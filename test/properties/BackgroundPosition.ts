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

    it('(value) -> simple', () => {
        expect(BackgroundPosition.parse('center').toString()).to.be.equal('center center');
        expect(BackgroundPosition.parse('right').toString()).to.be.equal('right center');
        expect(BackgroundPosition.parse('top').toString()).to.be.equal('center top');
        expect(BackgroundPosition.parse('20%').toString()).to.be.equal('20% center');

        expect(BackgroundPosition.parse('center center').toString()).to.be.equal('center center');
        expect(BackgroundPosition.parse('left center').toString()).to.be.equal('left center');
        expect(BackgroundPosition.parse('bottom center').toString()).to.be.equal('center bottom');
        expect(BackgroundPosition.parse('20% center').toString()).to.be.equal('20% center');
        expect(BackgroundPosition.parse('center left').toString()).to.be.equal('left center');
        expect(BackgroundPosition.parse('top left').toString()).to.be.equal('left top');
        expect(BackgroundPosition.parse('center top').toString()).to.be.equal('center top');
        expect(BackgroundPosition.parse('right bottom').toString()).to.be.equal('right bottom');
        expect(BackgroundPosition.parse('20% bottom').toString()).to.be.equal('20% bottom');
        expect(BackgroundPosition.parse('center 40%').toString()).to.be.equal('center 40%');
        expect(BackgroundPosition.parse('right 40%').toString()).to.be.equal('right 40%');
        expect(BackgroundPosition.parse('20% 40%').toString()).to.be.equal('20% 40%');

        expect(BackgroundPosition.parse('top 40% left').toString()).to.be.equal('left 40%');
        expect(BackgroundPosition.parse('right 40% top').toString()).to.be.equal('right 40% top');
        expect(BackgroundPosition.parse('center left 60%').toString()).to.be.equal('60% center');
        expect(BackgroundPosition.parse('center top 60%').toString()).to.be.equal('center 60%');
        expect(BackgroundPosition.parse('left top 60%').toString()).to.be.equal('left 60%');
        expect(BackgroundPosition.parse('top left 60%').toString()).to.be.equal('60% top');

        expect(BackgroundPosition.parse('top 40% right 80%').toString()).to.be.equal('right 80% top 40%');
        expect(BackgroundPosition.parse('left 40% bottom 80%').toString()).to.be.equal('left 40% bottom 80%');
        expect(BackgroundPosition.parse('left 40% top 80%').toString()).to.be.equal('40% 80%');
        expect(BackgroundPosition.parse('bottom 40% right 80%').toString()).to.be.equal('right 80% bottom 40%');
    });

    // it('(value) -> complete', () => {
    //     expect(new BackgroundPosition('20px auto').toString(true)).to.equal('20px auto');
    // });
});
