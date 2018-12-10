import { expect } from 'chai';
import Fruit from '../../index';
import Background from '../../src/properties/Background';
import BackgroundRepeat from '../../src/properties/BackgroundRepeat';
import BackgroundSize from '../../src/properties/BackgroundSize';
import BackgroundPosition from '../../src/properties/BackgroundPosition';

describe('cssFruit.absorb', () => {
    it('absorb()', () => {
        const background = Background.absorb('background', 'url(abc.png) #eee repeat-x')
            .absorb('background-size', '100%')
            .absorb('background-position', 'top right') as Background;
        expect(background).to.be.a('Background');
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.color.toString()).to.equal('#eee');
        const repeat = background.repeat as BackgroundRepeat;
        expect(repeat.x).to.equal('repeat');
        expect(repeat.y).to.equal('no-repeat');
        const size = background.size as BackgroundSize;
        expect(size.width).to.equal('100%');
        expect(size.height).to.equal('auto');
        const position = background.position as BackgroundPosition;
        expect(position.x.origin).to.equal('right');
        expect(position.y.origin).to.equal('top');
    });

    it('2. absorb()', () => {
        const background = Fruit.absorb('background', 'url(abc.png) #eee repeat-x')
            .absorb('background-size', '100%')
            .absorb('background-position', 'top right') as Background;
        expect(background).to.be.a('Background');
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.color.toString()).to.equal('#eee');
        const repeat = background.repeat as BackgroundRepeat;
        expect(repeat.x).to.equal('repeat');
        expect(repeat.y).to.equal('no-repeat');
        const size = background.size as BackgroundSize;
        expect(size.width).to.equal('100%');
        expect(size.height).to.equal('auto');
        const position = background.position as BackgroundPosition;
        expect(position.x.origin).to.equal('right');
        expect(position.y.origin).to.equal('top');
    });

    it('3. absorb()', () => {
        const background = Fruit.absorb('background', 'url(abc.png) #eee repeat-x');
        expect(background.absorb.bind(background, 'background-abc', 'red')).to.throw();
        expect(background.absorb.bind(background, 'test-size', '100%')).to.throw();
    });

    it('absorb(Array)', () => {
        const background = Fruit.absorb([
            { prop: 'background', value: 'url(abc.png) #eee repeat-x'},
            { prop: 'background-size', value: '100%'},
            { prop: 'background-position', value: 'top right'},
        ]) as Background;
        expect(background).to.be.a('Background');
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.color.toString()).to.equal('#eee');
        const repeat = background.repeat as BackgroundRepeat;
        expect(repeat.x).to.equal('repeat');
        expect(repeat.y).to.equal('no-repeat');
        const size = background.size as BackgroundSize;
        expect(size.width).to.equal('100%');
        expect(size.height).to.equal('auto');
        const position = background.position as BackgroundPosition;
        expect(position.x.origin).to.equal('right');
        expect(position.y.origin).to.equal('top');
    });
})
