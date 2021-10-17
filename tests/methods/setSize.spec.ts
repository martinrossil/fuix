import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.setSize()', () => {
    it('given width is NaN and height is NaN, when setSize(NaN, NaN), width and height should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setSize(NaN, NaN);
        assert.isNaN(sizeElement.width);
        assert.isNaN(sizeElement.height);
    });
    it('given width is NaN and height is NaN, when setSize(NaN, NaN), style.width and style.height should be ""', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setSize(NaN, NaN);
        assert.strictEqual(sizeElement.style.width, '');
        assert.strictEqual(sizeElement.style.height, '');
    });
    it('given width is NaN and height is NaN, when setSize(' + positiveRandom + ', ' + positiveRandom + '), width and height should be ' + positiveRandom, () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setSize(positiveRandom, positiveRandom);
        assert.strictEqual(sizeElement.width, positiveRandom);
        assert.strictEqual(sizeElement.height, positiveRandom);
    });
    it('given width is NaN and height is NaN, when setSize(' + positiveRandom + ', ' + positiveRandom + '), style.width and style.height should be ' + positiveRandom + 'px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setSize(positiveRandom, positiveRandom);
        assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
        assert.strictEqual(sizeElement.style.height, positiveRandom + 'px');
    });
    it('given width is NaN and height is NaN, when setSize(' + minusRandom + ', ' + minusRandom + '), width and height should be 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setSize(minusRandom, minusRandom);
        assert.strictEqual(sizeElement.width, 0);
        assert.strictEqual(sizeElement.height, 0);
    });
    it('given width is NaN and height is NaN, when setSize(' + minusRandom + ', ' + minusRandom + '), style.width and style.height should be 0px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setSize(minusRandom, minusRandom);
        assert.strictEqual(sizeElement.style.width, '0px');
        assert.strictEqual(sizeElement.style.height, '0px');
    });
});
