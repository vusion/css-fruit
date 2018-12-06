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

    it('(~space~comment~) -> trimmed', () => {
        expect(new URL('url("abc.png?sprite=name#first") /* comment */').toString()).to.equal(`url('abc.png?sprite=name#first')`);
    });

    it('url(~中文~) -> encoded', () => {
        const url = new URL('url("中文.png?参数=值#哈希")');

        expect(url.path).to.equal('中文.png');
        expect(url.query['参数']).to.equal('值');
        expect(url.hash).to.equal('哈希');

        expect(url.toString()).to.equal(`url('%E4%B8%AD%E6%96%87.png?%E5%8F%82%E6%95%B0=%E5%80%BC#%E5%93%88%E5%B8%8C')`);
    });

    it('url(xxx) url(xxx) -> invalid', () => {
        expect(URL.validate('url("abc.png?sprite=name#first") url(def.png)')).to.be.false;
    });
});
