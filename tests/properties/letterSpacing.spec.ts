import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IText, Text } from '../../src/';

const positiveRandom = Math.round(Math.random() * 5) + 10;
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('IText.letterSpacing property', () => {
    describe('default value', () => {
        it('letterSpacing should be 0', () => {
            const text: IText = new Text();
            assert.strictEqual(text.letterSpacing, 0);
        });
    });
    describe('default style', () => {
        it('style.letterSpacing should be ""', () => {
            const text: Text = new Text();
            assert.strictEqual(text.style.letterSpacing, '');
        });
    });
    describe('letterSpacing property', () => {
        it('given letterSpacing is 0, when letterSpacing = 0, letterSpacing should be 0', () => {
            const text: IText = new Text();
            text.letterSpacing = 0;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is 0, when letterSpacing = ' + minusRandom + ', letterSpacing should be ' + minusRandom, () => {
            const text: IText = new Text();
            text.letterSpacing = minusRandom;
            assert.strictEqual(text.letterSpacing, minusRandom);
        });
        it('given letterSpacing is 0, when letterSpacing = ' + positiveRandom + ', letterSpacing should be ' + positiveRandom, () => {
            const text: IText = new Text();
            text.letterSpacing = positiveRandom;
            assert.strictEqual(text.letterSpacing, positiveRandom);
        });
        it('given letterSpacing is 0, when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IText = new Text();
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is ' + positiveRandom + ', when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IText = new Text();
            text.letterSpacing = positiveRandom;
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is ' + minusRandom + ', when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IText = new Text();
            text.letterSpacing = minusRandom;
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
    });
});
