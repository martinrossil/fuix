import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IParagraph, Paragraph } from '../../src/';

const positiveRandom = Math.round(Math.random() * 5) + 10;
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('IParagraph.lineHeight property', () => {
    describe('default value', () => {
        it('lineHeight should be NaN', () => {
            const text: IParagraph = new Paragraph();
            assert.isNaN(text.lineHeight);
        });
    });
    describe('default style', () => {
        it('style.lineHeight should be ""', () => {
            const text: Paragraph = new Paragraph();
            assert.strictEqual(text.style.lineHeight, '');
        });
    });
    describe('lineHeight property', () => {
        it('given lineHeight is NaN, when lineHeight = 1.2, lineHeight should be 1.2', () => {
            const text: IParagraph = new Paragraph();
            text.lineHeight = 1.2;
            assert.strictEqual(text.lineHeight, 1.2);
        });
        it('given lineHeight is NaN, when lineHeight = 1.2, style.lineHeight should be "1.2"', () => {
            const text: Paragraph = new Paragraph();
            text.lineHeight = 1.2;
            assert.strictEqual(text.style.lineHeight, '1.2');
        });
        it('given lineHeight is 1.2, when lineHeight = ' + minusRandom + ', lineHeight should be NaN', () => {
            const text: IParagraph = new Paragraph();
            text.lineHeight = 1.2;
            text.lineHeight = minusRandom;
            assert.isNaN(text.lineHeight);
        });
        it('given lineHeight is 1.2, when lineHeight = ' + minusRandom + ', style.lineHeight should be ""', () => {
            const text: Paragraph = new Paragraph();
            text.lineHeight = 1.2;
            text.lineHeight = minusRandom;
            assert.strictEqual(text.style.lineHeight, '');
        });
        it('given lineHeight is 1.2, when lineHeight = ' + positiveRandom + ', lineHeight should be ' + positiveRandom, () => {
            const text: IParagraph = new Paragraph();
            text.lineHeight = 1.2;
            text.lineHeight = positiveRandom;
            assert.strictEqual(text.lineHeight, positiveRandom);
        });
        it('given lineHeight is 1.2, when lineHeight = NaN, style.lineHeight should be ""', () => {
            const text: Paragraph = new Paragraph();
            text.lineHeight = 1.2;
            text.lineHeight = NaN;
            assert.strictEqual(text.style.lineHeight, '');
        });
    });
});
