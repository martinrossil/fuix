import { assert } from 'chai';
import { describe, it } from 'mocha';
import { FontWeight, ITextBlock, TextBlock } from '../../src/';

describe('ITextBlock.fontWeight property', () => {
    describe('default value', () => {
        it('fontWeight should be 400', () => {
            const text: ITextBlock = new TextBlock();
            assert.strictEqual(text.fontWeight, FontWeight.NORMAL_400);
        });
    });
    describe('default style', () => {
        it('style.fontWeight should be ""', () => {
            const text: TextBlock = new TextBlock();
            assert.strictEqual(text.style.fontWeight, '');
        });
    });
    describe('fontWeight property', () => {
        it('given fontWeight is 400, when fontWeight = 400, fontWeight should be 400', () => {
            const text: ITextBlock = new TextBlock();
            text.fontWeight = FontWeight.NORMAL_400;
            assert.strictEqual(text.fontWeight, FontWeight.NORMAL_400);
        });
        it('given fontWeight is 400, when fontWeight = 900, fontWeight should be 900', () => {
            const text: ITextBlock = new TextBlock();
            text.fontWeight = FontWeight.BLACK_900;
            assert.strictEqual(text.fontWeight, FontWeight.BLACK_900);
        });
    });
});
