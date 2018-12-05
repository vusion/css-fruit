const expect = require('chai').expect;
const cssFruit = require('../../dist/cssFruit').default;

describe('Padding', () => {
    it('#default', () => {
        expect(cssFruit.parse('padding', '20px').toString()).to.equal('20px');
        expect(cssFruit.parse('padding', '10px  20px').toString()).to.equal('10px 20px');
        expect(cssFruit.parse('padding', ' 30px  10px  20px ').toString()).to.equal('30px 10px 20px');
        // expect(cssFruit.parse('padding-left', '20px').toString()).to.equal('undefined undefined undefined 20px');
    });

    it('#digest', () => {
        const padding = cssFruit.parse('padding', '20px');
        padding.digest('50px', 'right');

        expect(padding.toString()).to.equal('20px 50px 20px 20px');
    });
});
