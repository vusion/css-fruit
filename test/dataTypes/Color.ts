import { expect } from 'chai';
import Color from '../../src/dataTypes/Color';

// @TODO
describe('Color', () => {
    it('#constructor(value)', () => {
        const color = new Color().parse('rgba(255 208 12 / 0.3)');
        console.log(color);
        // expect(image.value).to.be.an('URL');
        // expect(image.value).to.equal("url('abc.png')");
    });
});
