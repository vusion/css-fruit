import { expect } from 'chai';
import Background from '../../src/properties/Background';

describe('Background', () => {
    it('#constructor(value)', () => {
        const background = new Background('url(abc.png) center top no-repeat');

        if (typeof background.image !== 'string')
            expect(background.image.value.path).to.equal('abc.png');
        expect(background.position.toString()).to.equal('center top');
        if (typeof background.repeat !== 'string')
            expect(background.repeat.x).to.equal('no-repeat');
    });
});
