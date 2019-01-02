import { expect } from 'chai';
import Padding from '../../src/properties/Padding';

describe('Padding', () => {
    it('#constructor(value)', () => {
        const padding = new Padding('20px 40px');

        expect(padding.top.toString()).to.equal('20px');
        expect(padding.bottom.toString()).to.equal('20px');
        expect(padding.right.toString()).to.equal('40px');
        expect(padding.left.toString()).to.equal('40px');
    });

    it('(value) -> valid', () => {
        expect(Padding.validate('1em')).to.be.true;
        expect(Padding.validate('20px 3em 40px')).to.be.true;
        expect(Padding.validate('2px 1em 0 10px')).to.be.true;
    });

    it('(value) -> invalid', () => {
        expect(Padding.validate('auto')).to.be.false;
        expect(Padding.validate('-20px')).to.be.false;
        expect(Padding.validate('5% auto')).to.be.false;
        expect(Padding.validate('5px -10px')).to.be.false;
        expect(Padding.validate('2px 1em 0 auto 3px')).to.be.false;
    });

    it('(value) -> string', () => {
        expect(Padding.parse('1em').toString()).to.equal('1em');
        expect(Padding.parse('5% 10px').toString()).to.equal('5% 10px');
        expect(Padding.parse('20px 3em 40px').toString()).to.equal('20px 3em 40px');
        expect(Padding.parse('2px 1em 0 10px').toString()).to.equal('2px 1em 0 10px');
    });
});
