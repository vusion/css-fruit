import { expect } from 'chai';
import Color from '../../src/dataTypes/Color';

// @TODO
describe('Color', () => {
    it('#constructor()', () => {
        const color = new Color();
        expect(color.r).to.equal(0);
        expect(color.g).to.equal(0);
        expect(color.b).to.equal(0);
        expect(color.a).to.equal(1);
        expect(color.valid).to.be.true;
    });

    it('#constructor(r, g, b)', () => {
        const color = new Color(255, 0, 153);
        expect(color.r).to.equal(255);
        expect(color.g).to.equal(0);
        expect(color.b).to.equal(153);
        expect(color.a).to.equal(1);
        expect(color.valid).to.be.true;
    });

    it('#constructor(hex)', () => {
        const color = new Color('#ff0099');
        expect(color.r).to.equal(255);
        expect(color.g).to.equal(0);
        expect(color.b).to.equal(153);
        expect(color.a).to.equal(1);
        expect(color.valid).to.be.true;
    });

    it('#constructor(transparent)', () => {
        const color = new Color('transparent');
        expect(color.r).to.equal(0);
        expect(color.g).to.equal(0);
        expect(color.b).to.equal(0);
        expect(color.a).to.equal(0);
        expect(color.valid).to.be.true;
    });

    it('#constructor(namedColor)', () => {
        const color = new Color('aliceblue');
        expect(color.r).to.equal(240);
        expect(color.g).to.equal(248);
        expect(color.b).to.equal(255);
        expect(color.a).to.equal(1);
        expect(color.valid).to.be.true;
    });

    it('#toHex', () => {
        const color = new Color('violet');
        expect(color.toHex()).to.equal('#ee82ee');
    });

    it('#toRGB', () => {
        const color = new Color('#FF0099');
        expect(color.toRGB()).to.equal('rgb(255, 0, 153)');
        expect(color.toRGB(true)).to.equal('rgb(100%, 0%, 60%)');
    });

    it('#toRGBA', () => {
        const color = new Color('#ff009933');
        expect(color.toRGBA()).to.equal('rgba(255, 0, 153, 0.2)');
        expect(color.toRGBA(true)).to.equal('rgba(100%, 0%, 60%, 20%)');
    });

    it('#toHSL', () => {
        const color = new Color('violet');
        expect(color.toHSL()).to.equal('hsl(300, 76%, 72%)');
    });

    it('#toHSLA', () => {
        const color = new Color('violet');
        expect(color.toHSLA()).to.equal('hsla(300, 76%, 72%, 1)');
    });

    it('.fromHSL', () => {
        const color = Color.fromHSL(330, 100, 50);
        expect(color.r).to.equal(255);
        expect(color.g).to.equal(0);
        expect(color.b).to.equal(128);
    });

});
