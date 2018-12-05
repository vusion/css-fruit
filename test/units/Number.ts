import { expect } from 'chai';
import { numberRE } from '../../src/Number';

describe('Number', () => {
    it('.validate(value) => true', () => {
        expect(numberRE.test('12')).to.equal(true);
        expect(numberRE.test('4.01')).to.equal(true);
        expect(numberRE.test('-456.8')).to.equal(true);
        expect(numberRE.test('0.0')).to.equal(true);
        expect(numberRE.test('+0.0')).to.equal(true);
        expect(numberRE.test('-0.0')).to.equal(true);
        expect(numberRE.test('.60')).to.equal(true);
        expect(numberRE.test('10e3')).to.equal(true);
        expect(numberRE.test('-3.4e-2')).to.equal(true);
    });

    it('.validate(value) => false', () => {
        expect(numberRE.test('12.')).to.equal(false);
        expect(numberRE.test('+-12.2')).to.equal(false);
        expect(numberRE.test('12.1.1')).to.equal(false);
        expect(numberRE.test('')).to.equal(false);
        expect(numberRE.test('none')).to.equal(false);
        expect(numberRE.test('6px')).to.equal(false);
    });
});
