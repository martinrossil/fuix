import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.maxWidth property', () => {
    describe('default value', () => {
        it('maxWidth should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.maxWidth);
        });
    });
    describe('maxWidth property', () => {
        it('given maxWidth is NaN, when maxWidth = NaN, maxWidth should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = NaN;
            assert.isNaN(sizeElement.maxWidth);
        });
        it('given maxWidth is NaN, when maxWidth = ' + positiveRandom + ', maxWidth should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = positiveRandom;
            assert.strictEqual(sizeElement.maxWidth, positiveRandom);
        });
        it('given maxWidth is NaN, when maxWidth = ' + positiveRandom + ', style.maxWidth should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.maxWidth = positiveRandom;
            assert.strictEqual(sizeElement.style.maxWidth, positiveRandom + 'px');
        });
        it('given maxWidth is NaN, when maxWidth = ' + minusRandom + ', maxWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = minusRandom;
            assert.strictEqual(sizeElement.maxWidth, 0);
        });
        it('given maxWidth is NaN, when maxWidth = ' + minusRandom + ', style.maxWidth should be 0px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.maxWidth = minusRandom;
            assert.strictEqual(sizeElement.style.maxWidth, '0px');
        });
        it('given maxWidth is ' + positiveRandom + ', when maxWidth = NaN, style.maxWidth should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.maxWidth = positiveRandom;
            sizeElement.maxWidth = NaN;
            assert.strictEqual(sizeElement.style.maxWidth, '');
        });
    });
});
