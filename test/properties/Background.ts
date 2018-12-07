import { expect } from 'chai';
import Background from '../../src/properties/Background';

describe('Background', () => {
    it('#constructor(value)', () => {
        const background = new Background('url(abc.png) center top no-repeat');

        expect(background.image.toString()).to.equal(`url('abc.png')`);
        expect(background.position.toString()).to.equal('center top');
        expect(background.repeat.toString()).to.equal('no-repeat');
    });
});
