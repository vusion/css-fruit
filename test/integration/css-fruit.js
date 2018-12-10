const { expect } = require('chai');
const Fruit = require('../../dist/css-fruit').default;

describe('cssFruit.absorb', () => {
    it('absorb()', () => {
        const background = Fruit.absorb('background', 'url(abc.png) #eee repeat-x')
            .absorb('background-size', '100%')
            .absorb('background-position', 'top right');
        expect(background).to.be.a('Background');
        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.color.toString()).to.equal('#eee');
        const repeat = background.repeat;
        expect(repeat.x).to.equal('repeat');
        expect(repeat.y).to.equal('no-repeat');
        const size = background.size;
        expect(size.width).to.equal('100%');
        expect(size.height).to.equal('auto');
        const position = background.position;
        expect(position.x.origin).to.equal('right');
        expect(position.y.origin).to.equal('top');
    });
});
