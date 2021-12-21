import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ITextBlock, TextBlock } from '../../src/';

const positiveRandom = Math.round(Math.random() * 5) + 10;
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('ITextBlock.fontSize property', () => {
    describe('default value', () => {
        it('fontSize should be 16', () => {
            const text: ITextBlock = new TextBlock();
            assert.strictEqual(text.fontSize, 16);
        });
    });
    describe('default style', () => {
        it('style.fontSize should be ""', () => {
            const text: TextBlock = new TextBlock();
            assert.strictEqual(text.style.fontSize, '');
        });
    });
    describe('fontSize property', () => {
        it('given fontSize is 16, when fontSize = 16, fontSize should be 16', () => {
            const text: ITextBlock = new TextBlock();
            text.fontSize = 16;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 16, when fontSize = ' + positiveRandom + ', fontSize should be ' + positiveRandom, () => {
            const text: ITextBlock = new TextBlock();
            text.fontSize = positiveRandom;
            assert.strictEqual(text.fontSize, positiveRandom);
        });
        it('given fontSize is 16, when fontSize = ' + minusRandom + ', fontSize should be 16', () => {
            const text: ITextBlock = new TextBlock();
            text.fontSize = minusRandom;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 16, when fontSize = NaN, fontSize should be 16', () => {
            const text: ITextBlock = new TextBlock();
            text.fontSize = NaN;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 24, when fontSize = NaN, fontSize should be 16', () => {
            const text: ITextBlock = new TextBlock();
            text.fontSize = 24;
            text.fontSize = NaN;
            assert.strictEqual(text.fontSize, 16);
        });
    });
});
