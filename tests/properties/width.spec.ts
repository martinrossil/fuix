import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.width property', () => {
    describe('default value', () => {
        it('width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.width);
        });
    });
    describe('default style', () => {
        it('style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
    describe('width property', () => {
        it('given width is NaN, when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('given width is NaN, when width = ' + positiveRandom + ', width should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.width, positiveRandom);
        });
        it('given width is NaN, when width = ' + minusRandom + ', width should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = minusRandom;
            assert.strictEqual(sizeElement.width, 0);
        });
        it('given width is ' + positiveRandom + ', when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
    });
    describe('width style', () => {
        it('given width is NaN, when width = NaN, style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
        it('given width is NaN, when width = ' + positiveRandom + ', style.width should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
        });
        it('given width is NaN, when width = ' + minusRandom + ', style.width should be 0px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = minusRandom;
            assert.strictEqual(sizeElement.style.width, '0px');
        });
        it('given width is ' + positiveRandom + ', when width = NaN, style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
});
