import { expect } from 'chai';
import Length from '../../src/Length';

describe('Length', () => {
    it('#constructor(value)', () => {
        const length = new Length('4.01em');

        expect(length.number).to.equal(4.01);
        expect(length.unit).to.equal('em');
    });

    it('.validate(value) => true', () => {
        expect(Length.validate('12px')).to.equal(true);
        expect(Length.validate('4.01em')).to.equal(true);
        expect(Length.validate('-456.8rem')).to.equal(true);
        expect(Length.validate('.60vh')).to.equal(true);
        expect(Length.validate('10e3cm')).to.equal(true);
        expect(Length.validate('-3.4e-2in')).to.equal(true);
    });

    it('.validate(value) => false', () => {
        expect(Length.validate('12')).to.equal(false);
        expect(Length.validate('4deg')).to.equal(false);
        expect(Length.validate('4s')).to.equal(false);
        expect(Length.validate('')).to.equal(false);
        expect(Length.validate('none')).to.equal(false);
    });

    it('.validate(0) => true', () => {
        expect(Length.validate('0')).to.equal(true);
        expect(Length.validate('0.0em')).to.equal(true);
        expect(Length.validate('-0.0px')).to.equal(true);
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
