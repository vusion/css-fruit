import { expect } from 'chai';
import Background from '../../src/properties/Background';

describe('Background', () => {
    it('#constructor(value)', () => {
        const background = new Background('url(abc.png) red center top border-box no-repeat');

        expect(background.color.toString()).to.equal(`#ff0000`);
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.position.toString()).to.equal('center top');
        expect(background.repeat.toString()).to.equal('no-repeat');
    });

    it('#constructor(~image-set~)', () => {
        const background = new Background(`red center top -webkit-image-set(url('./angry-birds.png') 1x, url('./angry-birds@2x.png') 2x) border-box no-repeat`);

        expect(background.color.toString()).to.equal(`#ff0000`);
        expect(background.image.toString()).to.equal(`-webkit-image-set(url('./angry-birds.png') 1x, url('./angry-birds@2x.png') 2x)`);
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

    it('(value) -> string', () => {
        expect(Background.parse('url(abc.png) red center top border-box no-repeat').toString())
            .to.equal(`#ff0000 url('abc.png') center top no-repeat border-box`);
        expect(Background.parse('red url(abc.png) center top / auto 20px border-box no-repeat').toString())
            .to.equal(`#ff0000 url('abc.png') center top / auto 20px no-repeat border-box`);
        expect(Background.parse('red url(abc.png) padding-box 50% bottom / auto border-box space').toString())
            .to.equal(`#ff0000 url('abc.png') 50% bottom / auto space padding-box border-box`);
    });
});
