import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Display, Component, IComponent } from '../../src';

describe('IDisplayElement.display property', () => {
    describe('default value', () => {
        it('display should be Display.INLINE', () => {
            const displayElement: IComponent = new Component();
            assert.strictEqual(displayElement.display, Display.INLINE);
        });
    });
    describe('display property', () => {
        it('given display is Display.INLINE, when display = Display.INLINE, display should be Display.INLINE', () => {
            const displayElement: IComponent = new Component();
            displayElement.display = Display.INLINE;
            assert.strictEqual(displayElement.display, Display.INLINE);
        });
        it('given display is Display.INLINE, when display = Display.BLOCK, display should be Display.BLOCK', () => {
            const displayElement: IComponent = new Component();
            displayElement.display = Display.BLOCK;
            assert.strictEqual(displayElement.display, Display.BLOCK);
        });
        it('given display is Display.INLINE, when display = Display.BLOCK, style.display should be Display.BLOCK', () => {
            const displayElement: Component = new Component();
            displayElement.display = Display.BLOCK;
            assert.strictEqual(displayElement.style.display, Display.BLOCK);
        });
    });
});
