import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.setWidthPercent()', () => {
    it('given widthPercent is NaN, when setWidthPercent(NaN), widthPercent should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidthPercent(NaN);
        assert.isNaN(sizeElement.widthPercent);
    });
    it('given widthPercent is NaN, when setWidthPercent(' + positiveRandom + '), widthPercent should be ' + positiveRandom, () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidthPercent(positiveRandom);
        assert.strictEqual(sizeElement.widthPercent, positiveRandom);
    });
    it('given widthPercent is NaN, when setWidthPercent(' + minusRandom + '), widthPercent should be 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidthPercent(minusRandom);
        assert.strictEqual(sizeElement.widthPercent, 0);
    });
});
