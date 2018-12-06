import { expect } from 'chai';
import { numberRE } from '../../src/dataTypes/Number';

describe('Number', () => {
    it('.validate(value) => true', () => {
        expect(numberRE.test('12')).to.be.true;
        expect(numberRE.test('4.01')).to.be.true;
        expect(numberRE.test('-456.8')).to.be.true;
        expect(numberRE.test('0.0')).to.be.true;
        expect(numberRE.test('+0.0')).to.be.true;
        expect(numberRE.test('-0.0')).to.be.true;
        expect(numberRE.test('.60')).to.be.true;
        expect(numberRE.test('10e3')).to.be.true;
        expect(numberRE.test('-3.4e-2')).to.be.true;
    });

    it('.validate(value) => false', () => {
        expect(numberRE.test('12.')).to.be.false;
        expect(numberRE.test('+-12.2')).to.be.false;
        expect(numberRE.test('12.1.1')).to.be.false;
        expect(numberRE.test('')).to.be.false;
        expect(numberRE.test('none')).to.be.false;
        expect(numberRE.test('6px')).to.be.false;
    });
});
