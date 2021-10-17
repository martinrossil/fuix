import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.setHeight()', () => {
    it('given height is NaN, when setHeight(NaN), height should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeight(NaN);
        assert.isNaN(sizeElement.height);
    });
    it('given height is NaN, when setHeight(' + positiveRandom + '), height should be ' + positiveRandom, () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeight(positiveRandom);
        assert.strictEqual(sizeElement.height, positiveRandom);
    });
    it('given height is NaN, when setHeight(' + minusRandom + '), height should be 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setHeight(minusRandom);
        assert.strictEqual(sizeElement.height, 0);
    });
    it('given height is ' + positiveRandom + ', when setHeight(NaN), height should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.height = positiveRandom;
        sizeElement.setHeight(NaN);
        assert.isNaN(sizeElement.height);
    });
    it('given height is NaN, when setHeight(NaN), style.height should be ""', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setHeight(NaN);
        assert.strictEqual(sizeElement.style.height, '');
    });
    it('given height is NaN, when setHeight(' + positiveRandom + '), style.height should be ' + positiveRandom + 'px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setHeight(positiveRandom);
        assert.strictEqual(sizeElement.style.height, positiveRandom + 'px');
    });
    it('given height is NaN, when setHeight(' + minusRandom + '), style.height should be 0px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setHeight(minusRandom);
        assert.strictEqual(sizeElement.style.height, '0px');
    });
    it('given height is ' + positiveRandom + ', when setHeight(NaN), style.height should be ""', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.height = positiveRandom;
        sizeElement.setHeight(NaN);
        assert.strictEqual(sizeElement.style.height, '');
    });
});
