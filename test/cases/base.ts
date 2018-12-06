import { expect } from 'chai';
import URL from '../../src/dataTypes/URL';
import { Stem } from '../../src/Fruit';

// @TODO
describe('base', () => {
    it('analyze(stem)', () => {
        const url = new URL();
        const stem = new Stem(' url("abc.png") #ccc ');
        url.analyze(stem);
        expect(url.valid).to.be.true;
        expect(stem.head()).not.to.be.undefined;
    });

    it('analyze(stem) -> invalid', () => {
        const url = new URL();
        const stem = new Stem(' url( ');
        console.log(stem.nodes[1].nodes);
        url.analyze(stem);
        expect(url.valid).to.be.false;
        expect(stem.head()).not.to.be.undefined;
    });
});
