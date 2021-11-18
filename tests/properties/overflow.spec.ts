import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Overflow, Component, IComponent } from '../../src';

describe('IComponent.overflow property', () => {
    describe('default value', () => {
        it('overflow should be Overflow.VISIBLE', () => {
            const displayElement: IComponent = new Component();
            assert.strictEqual(displayElement.overflow, Overflow.VISIBLE);
        });
    });
    describe('overflow property', () => {
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.VISIBLE, overflow should be Overflow.VISIBLE', () => {
            const displayElement: IComponent = new Component();
            displayElement.overflow = Overflow.VISIBLE;
            assert.strictEqual(displayElement.overflow, Overflow.VISIBLE);
        });
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.HIDDEN, overflow should be Overflow.HIDDEN', () => {
            const displayElement: IComponent = new Component();
            displayElement.overflow = Overflow.HIDDEN;
            assert.strictEqual(displayElement.overflow, Overflow.HIDDEN);
        });
        it('given overflow is Overflow.VISIBLE, when overflow = Overflow.HIDDEN, style.overflow should be Overflow.HIDDEN', () => {
            const displayElement: Component = new Component();
            displayElement.overflow = Overflow.HIDDEN;
            assert.strictEqual(displayElement.style.overflow, Overflow.HIDDEN);
        });
    });
});
