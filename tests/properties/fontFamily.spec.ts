import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IParagraph, Paragraph } from '../../src/';

describe('IParagraph.fontFamily property', () => {
    describe('default value', () => {
        it('fontFamily should be ""', () => {
            const text: IParagraph = new Paragraph();
            assert.strictEqual(text.fontFamily, '');
        });
    });
    describe('default style', () => {
        it('style.fontFamily should be ""', () => {
            const text: Paragraph = new Paragraph();
            assert.strictEqual(text.style.fontFamily, '');
        });
    });
    describe('fontFamily property', () => {
        it('given fontFamily is "", when fontFamily = "", fontFamily should be ""', () => {
            const text: IParagraph = new Paragraph();
            text.fontFamily = '';
            assert.strictEqual(text.fontFamily, '');
        });
        it('given fontFamily is "", when fontFamily = "Arial", fontFamily should be "Arial"', () => {
            const text: IParagraph = new Paragraph();
            text.fontFamily = 'Arial';
            assert.strictEqual(text.fontFamily, 'Arial');
        });
        it('given fontFamily is "Arial", when fontFamily = "", fontFamily should be ""', () => {
            const text: IParagraph = new Paragraph();
            text.fontFamily = 'Arial';
            text.fontFamily = '';
            assert.strictEqual(text.fontFamily, '');
        });
    });
});
