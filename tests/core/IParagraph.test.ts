import { assert } from 'chai';
import IParagraph from '../../src/core/IParagraph';
import Paragraph from '../../src/core/Paragraph';

const positiveRandom = Math.round(Math.random() * 5) + 10;
const minusRandom = Math.round(-10 + Math.random() * 5);

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

describe('IParagraph.fontSize property', () => {
    describe('default value', () => {
        it('fontSize should be 16', () => {
            const text: IParagraph = new Paragraph();
            assert.strictEqual(text.fontSize, 16);
        });
    });
    describe('default style', () => {
        it('style.fontSize should be ""', () => {
            const text: Paragraph = new Paragraph();
            assert.strictEqual(text.style.fontSize, '');
        });
    });
    describe('fontSize property', () => {
        it('given fontSize is 16, when fontSize = 16, fontSize should be 16', () => {
            const text: IParagraph = new Paragraph();
            text.fontSize = 16;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 16, when fontSize = ' + positiveRandom + ', fontSize should be ' + positiveRandom, () => {
            const text: IParagraph = new Paragraph();
            text.fontSize = positiveRandom;
            assert.strictEqual(text.fontSize, positiveRandom);
        });
        it('given fontSize is 16, when fontSize = ' + minusRandom + ', fontSize should be 16', () => {
            const text: IParagraph = new Paragraph();
            text.fontSize = minusRandom;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 16, when fontSize = NaN, fontSize should be 16', () => {
            const text: IParagraph = new Paragraph();
            text.fontSize = NaN;
            assert.strictEqual(text.fontSize, 16);
        });
        it('given fontSize is 24, when fontSize = NaN, fontSize should be 16', () => {
            const text: IParagraph = new Paragraph();
            text.fontSize = 24;
            text.fontSize = NaN;
            assert.strictEqual(text.fontSize, 16);
        });
    });
});

describe('IParagraph.fontWeight property', () => {
    describe('default value', () => {
        it('fontWeight should be 400', () => {
            const text: IParagraph = new Paragraph();
            assert.strictEqual(text.fontWeight, 400);
        });
    });
    describe('default style', () => {
        it('style.fontWeight should be ""', () => {
            const text: Paragraph = new Paragraph();
            assert.strictEqual(text.style.fontWeight, '');
        });
    });
    describe('fontWeight property', () => {
        it('given fontWeight is 400, when fontWeight = 400, fontWeight should be 400', () => {
            const text: IParagraph = new Paragraph();
            text.fontWeight = 400;
            assert.strictEqual(text.fontWeight, 400);
        });
        it('given fontWeight is 400, when fontWeight = 900, fontWeight should be 900', () => {
            const text: IParagraph = new Paragraph();
            text.fontWeight = 900;
            assert.strictEqual(text.fontWeight, 900);
        });
    });
});

describe('IParagraph.letterSpacing property', () => {
    describe('default value', () => {
        it('letterSpacing should be 0', () => {
            const text: IParagraph = new Paragraph();
            assert.strictEqual(text.letterSpacing, 0);
        });
    });
    describe('default style', () => {
        it('style.letterSpacing should be ""', () => {
            const text: Paragraph = new Paragraph();
            assert.strictEqual(text.style.letterSpacing, '');
        });
    });
    describe('letterSpacing property', () => {
        it('given letterSpacing is 0, when letterSpacing = 0, letterSpacing should be 0', () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = 0;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is 0, when letterSpacing = ' + minusRandom + ', letterSpacing should be ' + minusRandom, () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = minusRandom;
            assert.strictEqual(text.letterSpacing, minusRandom);
        });
        it('given letterSpacing is 0, when letterSpacing = ' + positiveRandom + ', letterSpacing should be ' + positiveRandom, () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = positiveRandom;
            assert.strictEqual(text.letterSpacing, positiveRandom);
        });
        it('given letterSpacing is 0, when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is ' + positiveRandom + ', when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = positiveRandom;
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
        it('given letterSpacing is ' + minusRandom + ', when letterSpacing = NaN, letterSpacing should be 0', () => {
            const text: IParagraph = new Paragraph();
            text.letterSpacing = minusRandom;
            text.letterSpacing = NaN;
            assert.strictEqual(text.letterSpacing, 0);
        });
    });
});

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
