import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Text, IText } from '../../src/';

describe('IText.text property', () => {
    describe('default value', () => {
        it('text should be ""', () => {
            const text: IText = new Text();
            assert.strictEqual(text.text, '');
        });
    });
    it('given text is "", when text = "Lorem ipsum", text should be "Lorem ipsum"', () => {
        const text: IText = new Text();
        text.text = 'Lorem ipsum';
        assert.strictEqual(text.text, 'Lorem ipsum');
    });
    it('given text is "Lorem ipsum", when text = "", text should be ""', () => {
        const text: IText = new Text();
        text.text = 'Lorem ipsum';
        text.text = '';
        assert.strictEqual(text.text, '');
    });
});
