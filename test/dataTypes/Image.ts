import { expect } from 'chai';
import Image from '../../src/dataTypes/Image';

// @TODO
describe('Image', () => {
    it('#constructor(value)', () => {
        const image = new Image('url(abc.png)');
        expect(image.value).to.be.an('URL');
        expect(image.value.toString()).to.equal("url('abc.png')");
    });

    // it('(value) -> equal', () => {
    //     expect(new URL('url(abc.png)').toString()).to.equal(`url('abc.png')`);
    //     expect(new URL('url("abc.png")').toString()).to.equal(`url('abc.png')`);
    // });

    // it('(~space~comment~) -> trimmed', () => {
    //     expect(new URL('url("abc.png?sprite=name#first") /* comment */').toString()).to.equal(`url('abc.png?sprite=name#first')`);
    // });

    // it('url(~中文~) -> encoded', () => {
    //     const url = new URL('url("中文.png?参数=值#哈希")');

    //     expect(url.path).to.equal('中文.png');
    //     expect(url.query['参数']).to.equal('值');
    //     expect(url.hash).to.equal('哈希');

    //     expect(url.toString()).to.equal(`url('%E4%B8%AD%E6%96%87.png?%E5%8F%82%E6%95%B0=%E5%80%BC#%E5%93%88%E5%B8%8C')`);
    // });

    it('parse(url) -> url', () => {
        expect(Image.parse('url(abc.png)')).to.be.a('string');
    });

    it('parse(value) -> invalid', () => {
        expect(Image.parse('abc')).to.be.undefined;
    });

    it('url(xxx) url(xxx) -> invalid', () => {
        expect(Image.parse('/* test */ url("abc.png?sprite=name#first") url(def.png)')).to.be.undefined;
    });

    it('url(xxx) abc -> invalid', () => {
        expect(Image.parse('/* test */ url("abc.png?sprite=name#first") abc()')).to.be.undefined;
    });
});
