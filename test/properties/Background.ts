import { expect } from 'chai';
import Background from '../../src/properties/Background';

describe('Background', () => {
    it('#constructor(value)', () => {
        const background = new Background('url(abc.png) red center top border-box no-repeat');

        expect(background.color.toString()).to.equal(`red`);
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.position.toString()).to.equal('center top');
        expect(background.repeat.toString()).to.equal('no-repeat');
    });

    it('(value) -> valid', () => {
        expect(Background.validate('red url(abc.png) center top / auto 20px border-box no-repeat')).to.be.true;
        expect(Background.validate('red url(abc.png) padding-box 50% bottom / auto border-box space')).to.be.true;
    });


    it('(value) -> invalid', () => {
        expect(Background.validate('red url(abc.png) abc no-repeat')).to.be.false;
        expect(Background.validate('red url(abc.png) / auto no-repeat')).to.be.false;
        expect(Background.validate('red url(abc.png) center top / border-box no-repeat')).to.be.false;
        expect(Background.validate('red url(abc.png) center top / border-box repeat-x repeat-y')).to.be.false;
        expect(Background.validate('red url(abc center top no-repeat')).to.be.false;
    });
});
