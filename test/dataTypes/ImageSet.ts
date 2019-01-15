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

    it('#constructor(value) - 2', () => {
        const imageSet = new ImageSet(`-webkit-image-set(url('./angry-birds.png') 1x, url('./angry-birds@2x.png') 2x)`);

        expect(imageSet.valid).to.be.true;
        expect(Object.keys(imageSet.resolutions).length).to.equal(2);
        // console.log(imageSet.toString());
        // expect(imageSet.resolutions['1x'].toString()).to.equal(`url('cat.png')`);
        // expect(imageSet.resolutions['2x'].toString()).to.equal(`url('cat-2x.png')`);
    });

})
