import { expect } from 'chai';
import BackgroundRepeat from '../../src/properties/BackgroundRepeat';

describe('BackgroundRepeat', () => {
    it('#constructor(value)', () => {
       const backgroundRepeat = new BackgroundRepeat('repeat no-repeat');

       expect(backgroundRepeat.x).to.equal('repeat');
       expect(backgroundRepeat.y).to.equal('no-repeat');
    });

    it('(value) -> equal', () => {
        expect(new BackgroundRepeat('repeat-x').toString()).to.equal('repeat-x');
        expect(new BackgroundRepeat('repeat-y').toString()).to.equal('repeat-y');
        expect(new BackgroundRepeat('space').toString()).to.equal('space');
        expect(new BackgroundRepeat('round no-repeat').toString()).to.equal('round no-repeat');
    });

    it('(value) -> invalid', () => {
        expect(BackgroundRepeat.validate('repeat-a')).to.equal(false);
        expect(BackgroundRepeat.validate('repeat-x repeat-y')).to.equal(false);
        expect(BackgroundRepeat.validate('repeat space round')).to.equal(false);
    });

    it('(~space~comment~) -> trimmed', () => {
        expect(new BackgroundRepeat('  round /* test */ no-repeat  ').toString()).to.equal('round no-repeat');
    });

    it('(value) -> simple', () => {
        expect(new BackgroundRepeat('no-repeat repeat').toString()).to.equal('repeat-y');
        expect(new BackgroundRepeat('round round').toString()).to.equal('round');
    });

    it('(value) -> complete', () => {
        expect(new BackgroundRepeat('repeat no-repeat').toString(true)).to.equal('repeat no-repeat');
    });
});
