import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.height property', () => {
    describe('default value', () => {
        it('height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.height);
        });
    });
    describe('default style', () => {
        it('style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
    describe('height property', () => {
        it('given height is NaN, when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('given height is NaN, when height = ' + positiveRandom + ', height should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.height, positiveRandom);
        });
        it('given height is NaN, height width = ' + minusRandom + ', height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = minusRandom;
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given height is ' + positiveRandom + ', when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
    });
    describe('height style', () => {
        it('given height is NaN, when height = NaN, style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
        it('given height is NaN, when height = ' + positiveRandom + ', style.height should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + 'px');
        });
        it('given height is NaN, height width = ' + minusRandom + ', style.height should be 0px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = minusRandom;
            assert.strictEqual(sizeElement.style.height, '0px');
        });
        it('given height is ' + positiveRandom + ', when height = NaN, style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
});