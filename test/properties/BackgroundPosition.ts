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
        expect(BackgroundPosition.validate('center')).to.be.true;
        expect(BackgroundPosition.validate('right')).to.be.true;
        expect(BackgroundPosition.validate('top')).to.be.true;
        expect(BackgroundPosition.validate('20%')).to.be.true;

        expect(BackgroundPosition.validate('center center')).to.be.true;
        expect(BackgroundPosition.validate('left center')).to.be.true;
        expect(BackgroundPosition.validate('bottom center')).to.be.true;
        expect(BackgroundPosition.validate('20% center')).to.be.true;
        expect(BackgroundPosition.validate('center left')).to.be.true;
        expect(BackgroundPosition.validate('top left')).to.be.true;
        expect(BackgroundPosition.validate('center top')).to.be.true;
        expect(BackgroundPosition.validate('right bottom')).to.be.true;
        expect(BackgroundPosition.validate('20% bottom')).to.be.true;
        expect(BackgroundPosition.validate('center 40%')).to.be.true;
        expect(BackgroundPosition.validate('right 40%')).to.be.true;
        expect(BackgroundPosition.validate('20% 40%')).to.be.true;

        expect(BackgroundPosition.validate('top 40% left')).to.be.true;
        expect(BackgroundPosition.validate('right 40% top')).to.be.true;
        expect(BackgroundPosition.validate('center left 60%')).to.be.true;
        expect(BackgroundPosition.validate('center top 60%')).to.be.true;
        expect(BackgroundPosition.validate('left top 60%')).to.be.true;
        expect(BackgroundPosition.validate('top left 60%')).to.be.true;

        expect(BackgroundPosition.validate('top 40% right 80%')).to.be.true;
        expect(BackgroundPosition.validate('left 40% top 80%')).to.be.true;
    });

    it('(value) -> invalid', () => {
        expect(BackgroundPosition.validate('right left')).to.be.false;
        expect(BackgroundPosition.validate('20% right')).to.be.false;
        expect(BackgroundPosition.validate('top bottom')).to.be.false;
        expect(BackgroundPosition.validate('top 40%')).to.be.false;

        expect(BackgroundPosition.validate('center center left')).to.be.false;
        expect(BackgroundPosition.validate('left center left')).to.be.false;
        expect(BackgroundPosition.validate('top center left')).to.be.false;
        expect(BackgroundPosition.validate('20% center left')).to.be.false;
        expect(BackgroundPosition.validate('center right left')).to.be.false;
        expect(BackgroundPosition.validate('top right left')).to.be.false;
        expect(BackgroundPosition.validate('center bottom left')).to.be.false;
        expect(BackgroundPosition.validate('left top left')).to.be.false;
        expect(BackgroundPosition.validate('20% top left')).to.be.false;
        expect(BackgroundPosition.validate('center 40% left')).to.be.false;
        expect(BackgroundPosition.validate('left 40% left')).to.be.false;
        expect(BackgroundPosition.validate('20% 40% left')).to.be.false;

        expect(BackgroundPosition.validate('center center top')).to.be.false;
        expect(BackgroundPosition.validate('right center top')).to.be.false;
        expect(BackgroundPosition.validate('bottom center top')).to.be.false;
        expect(BackgroundPosition.validate('20% center top')).to.be.false;
        expect(BackgroundPosition.validate('center right top')).to.be.false;
        expect(BackgroundPosition.validate('bottom left top')).to.be.false;
        expect(BackgroundPosition.validate('center top top')).to.be.false;
        expect(BackgroundPosition.validate('right top top')).to.be.false;
        expect(BackgroundPosition.validate('20% top bottom')).to.be.false;
        expect(BackgroundPosition.validate('center 40% top')).to.be.false;
        expect(BackgroundPosition.validate('top 40% bottom')).to.be.false;
        expect(BackgroundPosition.validate('20% 40% bottom')).to.be.false;

        expect(BackgroundPosition.validate('center center 60%')).to.be.false;
        expect(BackgroundPosition.validate('left center 60%')).to.be.false;
        expect(BackgroundPosition.validate('top center 60%')).to.be.false;
        expect(BackgroundPosition.validate('20% center 60%')).to.be.false;
        expect(BackgroundPosition.validate('20% top 60%')).to.be.false;
        expect(BackgroundPosition.validate('center 40% 60%')).to.be.false;
        expect(BackgroundPosition.validate('left 40% 60%')).to.be.false;
        expect(BackgroundPosition.validate('bottom 40% 60%')).to.be.false;
        expect(BackgroundPosition.validate('20% 80% 60%')).to.be.false;

        expect(BackgroundPosition.validate('top left 60% 80%')).to.be.false;
        expect(BackgroundPosition.validate('center left 60% 80%')).to.be.false;
        expect(BackgroundPosition.validate('left top 60% 80%')).to.be.false;
        expect(BackgroundPosition.validate('center bottom 60% 80%')).to.be.false;
    });

    // it('(~space~comment~) -> trimmed', () => {
    //     expect(new BackgroundPosition('  left /* test */ 20px  ').toString()).to.equal('left 20px');
    // });

    // it('(value) -> simple', () => {
    //     expect(new BackgroundPosition('20px auto').toString()).to.equal('20px');
    // });

    // it('(value) -> complete', () => {
    //     expect(new BackgroundPosition('20px auto').toString(true)).to.equal('20px auto');
    // });
});
