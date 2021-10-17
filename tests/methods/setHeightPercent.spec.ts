import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.setHeightPercent()', () => {
    it('given heightPercent is NaN, when setHeightPercent(NaN), heightPercent should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeightPercent(NaN);
        assert.isNaN(sizeElement.heightPercent);
    });
    it('given heightPercent is NaN, when setHeightPercent(' + positiveRandom + '), heightPercent should be ' + positiveRandom, () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeightPercent(positiveRandom);
        assert.strictEqual(sizeElement.heightPercent, positiveRandom);
    });
    it('given heightPercent is NaN, when setHeightPercent(' + minusRandom + '), heightPercent should be 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeightPercent(minusRandom);
        assert.strictEqual(sizeElement.heightPercent, 0);
    });
});
