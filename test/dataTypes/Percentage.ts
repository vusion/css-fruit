import { expect } from 'chai';
import Percentage from '../../src/dataTypes/Percentage';

describe('Percentage', () => {
    it('#constructor(value)', () => {
        const percentage = new Percentage('4.01%');

        expect(percentage.number).to.equal(4.01);
    });

    it('.validate(value) => true', () => {
        expect(Percentage.validate('12%')).to.be.true;
        expect(Percentage.validate('4.01%')).to.be.true;
        expect(Percentage.validate('-456.8%')).to.be.true;
        expect(Percentage.validate('.60%')).to.be.true;
        expect(Percentage.validate('10e3%')).to.be.true;
        expect(Percentage.validate('-3.4e-2%')).to.be.true;
    });

    it('.validate(value) => false', () => {
        expect(Percentage.validate('12')).to.be.false;
        expect(Percentage.validate('4deg')).to.be.false;
        expect(Percentage.validate('4.01em')).to.be.false;
        expect(Percentage.validate('')).to.be.false;
        expect(Percentage.validate('none')).to.be.false;
    });

    it('.validate(0) => true', () => {
        expect(Percentage.validate('0')).to.be.false;
        expect(Percentage.validate('0.0%')).to.be.true;
        expect(Percentage.validate('-0.0%')).to.be.true;
    });

    it('#toString()', () => {
        expect(new Percentage('4.01%').toString()).to.equal('4.01%');
        expect(new Percentage('0%').toString()).to.equal('0%');
    });
});
