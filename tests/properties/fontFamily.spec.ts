import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IText, Text } from '../../src/';

describe('IText.fontFamily property', () => {
    describe('default value', () => {
        it('fontFamily should be ""', () => {
            const text: IText = new Text();
            assert.strictEqual(text.fontFamily, '');
        });
    });
    describe('default style', () => {
        it('style.fontFamily should be ""', () => {
            const text: Text = new Text();
            assert.strictEqual(text.style.fontFamily, '');
        });
    });
    describe('fontFamily property', () => {
        it('given fontFamily is "", when fontFamily = "", fontFamily should be ""', () => {
            const text: IText = new Text();
            text.fontFamily = '';
            assert.strictEqual(text.fontFamily, '');
        });
        it('given fontFamily is "", when fontFamily = "Arial", fontFamily should be "Arial"', () => {
            const text: IText = new Text();
            text.fontFamily = 'Arial';
            assert.strictEqual(text.fontFamily, 'Arial');
        });
        it('given fontFamily is "Arial", when fontFamily = "", fontFamily should be ""', () => {
            const text: IText = new Text();
            text.fontFamily = 'Arial';
            text.fontFamily = '';
            assert.strictEqual(text.fontFamily, '');
        });
    });
});
