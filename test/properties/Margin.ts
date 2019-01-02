import { expect } from 'chai';
import Margin from '../../src/properties/Margin';

describe('Margin', () => {
    it('#constructor(value)', () => {
        const margin = new Margin('20px 40px');

        expect(margin.top.toString()).to.equal('20px');
        expect(margin.bottom.toString()).to.equal('20px');
        expect(margin.right.toString()).to.equal('40px');
        expect(margin.left.toString()).to.equal('40px');
    });

    it('(value) -> valid', () => {
        expect(Margin.validate('auto')).to.be.true;
        expect(Margin.validate('1em')).to.be.true;
        expect(Margin.validate('5% auto')).to.be.true;
        expect(Margin.validate('20px 3em 40px')).to.be.true;
        expect(Margin.validate('2px 1em 0 auto')).to.be.true;
    });

    it('(value) -> invalid', () => {
        expect(Margin.validate('abc')).to.be.false;
        expect(Margin.validate('5% 4cb')).to.be.false;
        expect(Margin.validate('2px 1em 0 auto 3px')).to.be.false;
    });

    it('(value) -> string', () => {
        expect(Margin.parse('auto').toString()).to.equal('auto');
        expect(Margin.parse('1em').toString()).to.equal('1em');
        expect(Margin.parse('5% auto').toString()).to.equal('5% auto');
        expect(Margin.parse('20px 3em 40px').toString()).to.equal('20px 3em 40px');
        expect(Margin.parse('2px 1em 0 auto').toString()).to.equal('2px 1em 0 auto');
    });
});
