import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.minHeight property', () => {
    describe('default value', () => {
        it('minHeight should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.minHeight);
        });
    });
    describe('minHeight property', () => {
        it('given minHeight is NaN, when minHeight = NaN, minHeight should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = NaN;
            assert.isNaN(sizeElement.minHeight);
        });
        it('given minHeight is NaN, when minHeight = ' + positiveRandom + ', minHeight should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = positiveRandom;
            assert.strictEqual(sizeElement.minHeight, positiveRandom);
        });
        it('given minHeight is NaN, when minHeight = ' + positiveRandom + ', style.minHeight should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.minHeight = positiveRandom;
            assert.strictEqual(sizeElement.style.minHeight, positiveRandom + 'px');
        });
        it('given minHeight is NaN, when minHeight = ' + minusRandom + ', minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = minusRandom;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given minHeight is NaN, when minHeight = ' + minusRandom + ', style.minHeight should be 0px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.minHeight = minusRandom;
            assert.strictEqual(sizeElement.style.minHeight, '0px');
        });
        it('given minHeight is ' + positiveRandom + ', when minHeight = NaN, style.minHeight should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.minHeight = positiveRandom;
            sizeElement.minHeight = NaN;
            assert.strictEqual(sizeElement.style.minHeight, '');
        });
    });
});
