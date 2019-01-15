import { expect } from 'chai';
import URL from '../../src/dataTypes/URL';

// @TODO
describe('URL', () => {
    it('#constructor(value)', () => {
        const url = new URL('url("abc.png?sprite=name#first")');

        expect(url.path).to.equal('abc.png');
        expect(url.query['sprite']).to.equal('name');
        expect(url.hash).to.equal('first');
    });

    it('(value) -> equal', () => {
        expect(new URL('url(abc.png)').toString()).to.equal(`url('abc.png')`);
        expect(new URL('url("abc.png")').toString()).to.equal(`url('abc.png')`);
    });

    it('(~query~) -> equal', () => {
        expect(new URL(`url('abc.png?')`).toString()).to.equal(`url('abc.png?')`);
        expect(new URL(`url('abc.png?flag')`).toString()).to.equal(`url('abc.png?flag')`);
        expect(new URL(`url('abc.png?+flag')`).toString()).to.equal(`url('abc.png?flag')`);
        expect(new URL(`url('abc.png?-flag')`).toString()).to.equal(`url('abc.png?flag=false')`);
        expect(new URL(`url('abc.png?xyz=test')`).toString()).to.equal(`url('abc.png?xyz=test')`);
        expect(new URL(`url('abc.png?xyz=1')`).toString()).to.equal(`url('abc.png?xyz=1')`);
        expect(new URL(`url('abc.png?xyz[]=a')`).toString()).to.equal(`url('abc.png?xyz[]=a')`);
        expect(new URL(`url('abc.png?flag1&flag2')`).toString()).to.equal(`url('abc.png?flag1&flag2')`);
        expect(new URL(`url('abc.png?+flag1&-flag2')`).toString()).to.equal(`url('abc.png?flag1&flag2=false')`);
        expect(new URL(`url('abc.png?xyz[]=a&xyz[]=b')`).toString()).to.equal(`url('abc.png?xyz[]=a&xyz[]=b')`);
        // expect(new URL(`url('abc.png?a%2C%26b=c%2C%26d')`).toString()).to.equal(`url('abc.png?a%2C%26b=c%2C%26d')`);
        expect(new URL(`url('abc.png?{data:{a:1},isJSON5:true}')`).toString()).to.equal(`url('abc.png?{data:{a:1},isJSON5:true}')`);
    })

    it('(~space~comment~) -> trimmed', () => {
        expect(new URL('url("abc.png?sprite=name#first") /* comment */').toString()).to.equal(`url('abc.png?sprite=name#first')`);
    });

    it('url(~中文~) -> encoded', () => {
        const url = new URL('url("中文.png?参数=值#哈希")');

        expect(url.path).to.equal('中文.png');
        expect(url.query['参数']).to.equal('值');
        expect(url.hash).to.equal('哈希');

        expect(url.toString()).to.equal(`url('中文.png?参数=值#哈希')`);
    });

    it('url(xxx) url(xxx) -> invalid', () => {
        expect(URL.validate('url("abc.png?sprite=name#first") url(def.png)')).to.be.false;
    });
});
