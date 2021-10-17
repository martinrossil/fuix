import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement.widthPercent property', () => {
    describe('default value', () => {
        it('widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.widthPercent);
        });
    });
    describe('widthPercent property', () => {
        it('given widthPercent is NaN, when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', widthPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.widthPercent, positiveRandom);
        });
        it('given widthPercent is NaN, when widthPercent = ' + minusRandom + ', widthPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = minusRandom;
            assert.strictEqual(sizeElement.widthPercent, 0);
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', style.width should be ' + positiveRandom + '%', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + '%');
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
});
