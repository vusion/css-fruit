import { expect } from 'chai';
import ImageSet from '../../src/dataTypes/ImageSet';

describe('ImageSet', () => {
    it('#constructor(value)', () => {
        const imageSet = new ImageSet('image-set("cat.png" 1x, "cat-2x.png" 2x)');

        expect(imageSet.valid).to.be.true;
        expect(Object.keys(imageSet.resolutions).length).to.equal(2);
        expect(imageSet.resolutions['1x'].toString()).to.equal(`url('cat.png')`);
        expect(imageSet.resolutions['2x'].toString()).to.equal(`url('cat-2x.png')`);
    });
})
