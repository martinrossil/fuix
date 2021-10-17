import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.heightPercent property', () => {
    describe('default value', () => {
        it('heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.heightPercent);
        });
    });
    describe('heightPercent property', () => {
        it('given heightPercent is NaN, when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', heightPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.heightPercent, positiveRandom);
        });
        it('given heightPercent is NaN, when heightPercent = ' + minusRandom + ', heightPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = minusRandom;
            assert.strictEqual(sizeElement.heightPercent, 0);
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', style.height should be ' + positiveRandom + '%', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + '%');
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
});
