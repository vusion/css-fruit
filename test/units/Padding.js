const expect = require('chai').expect;
const propcss = require('../../dist/propcss').default;

describe('Padding', () => {
    it('#default', () => {
        expect(propcss.parse('padding', '20px').toString()).to.equal('20px');
        expect(propcss.parse('padding', '10px  20px').toString()).to.equal('10px 20px');
        expect(propcss.parse('padding', ' 30px  10px  20px ').toString()).to.equal('30px 10px 20px');
        // expect(propcss.parse('padding-left', '20px').toString()).to.equal('undefined undefined undefined 20px');
    });

    it('#digest', () => {
        const padding = propcss.parse('padding', '20px');
        padding.digest('50px', 'right');

        expect(padding.toString()).to.equal('20px 50px 20px 20px');
    });
});
