import { expect } from 'chai';
import Length from '../../src/dataTypes/Length';

describe('Length', () => {
    it('#constructor(value?: string)', () => {
        const length = new Length('4.01em');

        expect(length.number).to.equal(4.01);
        expect(length.unit).to.equal('em');
    });

    it('#constructor(number: number, unit: string)', () => {
        const length = new Length(3, 'px');

        expect(length.number).to.equal(3);
        expect(length.unit).to.equal('px');
    });

    it('.validate(value) => true', () => {
        expect(Length.validate('12px')).to.be.true;
        expect(Length.validate('4.01em')).to.be.true;
        expect(Length.validate('-456.8rem')).to.be.true;
        expect(Length.validate('.60vh')).to.be.true;
        expect(Length.validate('10e3cm')).to.be.true;
        expect(Length.validate('-3.4e-2in')).to.be.true;
    });

    it('.validate(value) => false', () => {
        expect(Length.validate('12')).to.be.false;
        expect(Length.validate('4deg')).to.be.false;
        expect(Length.validate('4s')).to.be.false;
        expect(Length.validate('')).to.be.false;
        expect(Length.validate('none')).to.be.false;
    });

    it('.validate(0) => true', () => {
        expect(Length.validate('0')).to.be.true;
        expect(Length.validate('0.0em')).to.be.true;
        expect(Length.validate('-0.0px')).to.be.true;
    });

    it('#toString()', () => {
        expect(new Length('4.01em').toString()).to.equal('4.01em');
        expect(new Length('0em').toString()).to.equal('0');
    });

    it('#toString(true)', () => {
        expect(new Length('4.01em').toString(true)).to.equal('4.01em');
        expect(new Length('0em').toString(true)).to.equal('0em');
    });
});
