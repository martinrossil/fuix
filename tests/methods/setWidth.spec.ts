import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.setWidth()', () => {
    it('given width is NaN, when setWidth(NaN), width should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidth(NaN);
        assert.isNaN(sizeElement.width);
    });
    it('given width is NaN, when setWidth(' + positiveRandom + '), width should be ' + positiveRandom, () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidth(positiveRandom);
        assert.strictEqual(sizeElement.width, positiveRandom);
    });
    it('given width is NaN, when setWidth(' + minusRandom + '), width should be 0', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.setWidth(minusRandom);
        assert.strictEqual(sizeElement.width, 0);
    });
    it('given width is ' + positiveRandom + ', when setWidth(NaN), width should be NaN', () => {
        const sizeElement: ISizeElement = new SizeElement();
        sizeElement.width = positiveRandom;
        sizeElement.setWidth(NaN);
        assert.isNaN(sizeElement.width);
    });
    it('given width is NaN, when setWidth(NaN), style.width should be ""', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setWidth(NaN);
        assert.strictEqual(sizeElement.style.width, '');
    });
    it('given width is NaN, when setWidth(' + positiveRandom + '), style.width should be ' + positiveRandom + 'px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setWidth(positiveRandom);
        assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
    });
    it('given width is NaN, when setWidth(' + minusRandom + '), style.width should be 0px', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.setWidth(minusRandom);
        assert.strictEqual(sizeElement.style.width, '0px');
    });
    it('given width is ' + positiveRandom + ', when setWidth(NaN), style.width should be ""', () => {
        const sizeElement: SizeElement = new SizeElement();
        sizeElement.width = positiveRandom;
        sizeElement.setWidth(NaN);
        assert.strictEqual(sizeElement.style.width, '');
    });
});
