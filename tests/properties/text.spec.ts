import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Paragraph, IParagraph } from '../../src/';

describe('IParagraph.text property', () => {
    describe('default value', () => {
        it('text should be ""', () => {
            const text: IParagraph = new Paragraph();
            assert.strictEqual(text.text, '');
        });
    });
    it('given text is "", when text = "Lorem ipsum", text should be "Lorem ipsum"', () => {
        const text: IParagraph = new Paragraph();
        text.text = 'Lorem ipsum';
        assert.strictEqual(text.text, 'Lorem ipsum');
    });
    it('given text is "Lorem ipsum", when text = "", text should be ""', () => {
        const text: IParagraph = new Paragraph();
        text.text = 'Lorem ipsum';
        text.text = '';
        assert.strictEqual(text.text, '');
    });
});
