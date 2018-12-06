import { expect } from 'chai';
import BackgroundSize from '../../src/properties/BackgroundSize';

describe('BackgroundSize', () => {
    it('#constructor(value)', () => {
       const backgroundRepeat = new BackgroundSize('auto 20px');

       expect(backgroundRepeat.width.toString()).to.equal('auto');
       expect(backgroundRepeat.height.toString()).to.equal('20px');
    });

    it('(value) -> equal', () => {
        expect(new BackgroundSize('contain').toString()).to.equal('contain');
        expect(new BackgroundSize('3em').toString()).to.equal('3em');
        expect(new BackgroundSize('50%').toString()).to.equal('50%');
        expect(new BackgroundSize('auto 1em').toString()).to.equal('auto 1em');
        expect(new BackgroundSize('25% 50%').toString()).to.equal('25% 50%');
    });

    it('(value) -> invalid', () => {
        expect(BackgroundSize.validate('abc')).to.be.false;
        expect(BackgroundSize.validate('cover contain')).to.be.false;
        expect(BackgroundSize.validate('auto 20px auto')).to.be.false;
    });

    it('(~space~comment~) -> trimmed', () => {
        expect(new BackgroundSize('  auto /* test */ 20px  ').toString()).to.equal('auto 20px');
    });

    it('(value) -> simple', () => {
        expect(new BackgroundSize('20px auto').toString()).to.equal('20px');
    });

    it('(value) -> complete', () => {
        expect(new BackgroundSize('20px auto').toString(true)).to.equal('20px auto');
    });
});
