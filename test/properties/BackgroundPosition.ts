import { expect } from 'chai';
import BackgroundPosition from '../../src/properties/BackgroundPosition';

describe('BackgroundPosition', () => {
    it('#constructor(value)', () => {
       const backgroundPosition = new BackgroundPosition('left 40%');

       expect(backgroundPosition.x.origin).to.equal('left');
       expect(backgroundPosition.x.offset).to.be.undefined;
       expect(backgroundPosition.y.origin).to.equal('top');
       expect(backgroundPosition.y.offset.toString()).to.equal('40%');
    });

    // it('(value) -> equal', () => {
    //     expect(new BackgroundPosition('contain').toString()).to.equal('contain');
    //     expect(new BackgroundPosition('3em').toString()).to.equal('3em');
    //     expect(new BackgroundPosition('50%').toString()).to.equal('50%');
    //     expect(new BackgroundPosition('auto 1em').toString()).to.equal('auto 1em');
    //     expect(new BackgroundPosition('25% 50%').toString()).to.equal('25% 50%');
    // });

    it('(value) -> valid', () => {
        expect(BackgroundPosition.validate('top')).to.be.true;
        expect(BackgroundPosition.validate('20%')).to.be.true;
        expect(BackgroundPosition.validate('left center')).to.be.true;
        expect(BackgroundPosition.validate('center center')).to.be.true;
        expect(BackgroundPosition.validate('top right')).to.be.true;
        expect(BackgroundPosition.validate('left 50%')).to.be.true;
        expect(BackgroundPosition.validate('25% 75%')).to.be.true;
        expect(BackgroundPosition.validate('0 0')).to.be.true;
        expect(BackgroundPosition.validate('bottom 10px right')).to.be.true;
        expect(BackgroundPosition.validate('top right 10px')).to.be.true;
        expect(BackgroundPosition.validate('left 40% top')).to.be.true;
        expect(BackgroundPosition.validate('bottom 10px right 20px')).to.be.true;
    });

    it('(value) -> invalid', () => {
        expect(BackgroundPosition.validate('20% right')).to.be.false;
        expect(BackgroundPosition.validate('20% center left')).to.be.false;
        expect(BackgroundPosition.validate('20% top left')).to.be.false;
        expect(BackgroundPosition.validate('top 40%')).to.be.false;
        expect(BackgroundPosition.validate('right left')).to.be.false;
        expect(BackgroundPosition.validate('bottom bottom')).to.be.false;
        expect(BackgroundPosition.validate('top center right')).to.be.false;
        expect(BackgroundPosition.validate('top center 40%')).to.be.false;
        expect(BackgroundPosition.validate('left 20% 60%')).to.be.false;
        expect(BackgroundPosition.validate('left 20% right 30%')).to.be.false;
        expect(BackgroundPosition.validate('75% 20% top 30%')).to.be.false;
    });

    // it('(~space~comment~) -> trimmed', () => {
    //     expect(new BackgroundPosition('  left /* test */ 20px  ').toString()).to.equal('auto 20px');
    // });

    // it('(value) -> simple', () => {
    //     expect(new BackgroundPosition('20px auto').toString()).to.equal('20px');
    // });

    // it('(value) -> complete', () => {
    //     expect(new BackgroundPosition('20px auto').toString(true)).to.equal('20px auto');
    // });
});
