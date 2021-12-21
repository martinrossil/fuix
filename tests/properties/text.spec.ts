import { assert } from 'chai';
import { describe, it } from 'mocha';
import { TextBlock, ITextBlock } from '../../src/';

describe('ITextBlock.text property', () => {
    describe('default value', () => {
        it('text should be ""', () => {
            const text: ITextBlock = new TextBlock();
            assert.strictEqual(text.text, '');
        });
    });
    it('given text is "", when text = "Lorem ipsum", text should be "Lorem ipsum"', () => {
        const text: ITextBlock = new TextBlock();
        text.text = 'Lorem ipsum';
        assert.strictEqual(text.text, 'Lorem ipsum');
    });
    it('given text is "Lorem ipsum", when text = "", text should be ""', () => {
        const text: ITextBlock = new TextBlock();
        text.text = 'Lorem ipsum';
        text.text = '';
        assert.strictEqual(text.text, '');
    });
});
