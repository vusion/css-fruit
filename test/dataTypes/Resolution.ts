import { expect } from 'chai';
import Resolution from '../../src/dataTypes/Resolution';

describe('Resolution', () => {
    it('#constructor(value: string)', () => {
        const resolution = new Resolution('2x');
        expect(resolution.number).to.equal(2);
        expect(resolution.unit).to.equal('x');
        expect(resolution.valid).to.be.true;
    });

    it('#constructor(number: number, unit: string)', () => {
        const resolution = new Resolution(192, 'dpi');
        expect(resolution.number).to.equal(192);
        expect(resolution.unit).to.equal('dpi');
        expect(resolution.valid).to.be.true;

        const resolution2 = new Resolution(2.1, 'ab');
        expect(resolution2.valid).to.be.false;
    });

    it('#toDppx()', () => {
        expect(new Resolution('192dpi').toDppx()).to.equal('2x');
    });

    it('#toDpcm()', () => {
        expect(new Resolution('2.54dpi').toDpcm()).to.equal('1dpcm');
    });
});
