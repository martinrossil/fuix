import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const positiveRandom = Math.ceil(Math.random() * 10);
const minusRandom = Math.floor(-10 + Math.random() * 5);

describe('IComponent.borderRadius property', () => {
    describe('default value', () => {
        it('borderRadius should be 0', () => {
            const displayElement: IComponent = new Component();
            assert.strictEqual(displayElement.borderRadius, 0);
        });
    });
    describe('borderRadius property', () => {
        it('given borderRadius is 0, when borderRadius = ' + positiveRandom + ', borderRadius should be ' + positiveRandom, () => {
            const displayElement: IComponent = new Component();
            displayElement.borderRadius = positiveRandom;
            assert.strictEqual(displayElement.borderRadius, positiveRandom);
        });
        it('given borderRadius is 0, when borderRadius = 0, borderRadius should be 0', () => {
            const displayElement: IComponent = new Component();
            displayElement.borderRadius = 0;
            assert.strictEqual(displayElement.borderRadius, 0);
        });
        it('given borderRadius is 10, when borderRadius = NaN, borderRadius should be 0', () => {
            const displayElement: IComponent = new Component();
            displayElement.borderRadius = 10;
            displayElement.borderRadius = NaN;
            assert.strictEqual(displayElement.borderRadius, 0);
        });
        it('given borderRadius is 0, when borderRadius = ' + minusRandom + ', borderRadius should be 0', () => {
            const displayElement: IComponent = new Component();
            displayElement.borderRadius = minusRandom;
            assert.strictEqual(displayElement.borderRadius, 0);
        });
        it('given borderRadius is 0, when borderRadius = ' + positiveRandom + ', style.borderRadius should be ' + positiveRandom + 'px', () => {
            const displayElement: Component = new Component();
            displayElement.borderRadius = positiveRandom;
            assert.strictEqual(displayElement.style.borderRadius, positiveRandom + 'px');
        });
        it('given borderRadius is 0, when borderRadius = 0, style.borderRadius should be ""', () => {
            const displayElement: Component = new Component();
            displayElement.borderRadius = 0;
            assert.strictEqual(displayElement.style.borderRadius, '');
        });
        it('given borderRadius is 10, when borderRadius = NaN, style.borderRadius should be ""', () => {
            const displayElement: Component = new Component();
            displayElement.borderRadius = 10;
            displayElement.borderRadius = NaN;
            assert.strictEqual(displayElement.style.borderRadius, '');
        });
        it('given borderRadius is 0, when borderRadius = ' + minusRandom + ', style.borderRadius should be ""', () => {
            const displayElement: Component = new Component();
            displayElement.borderRadius = minusRandom;
            assert.strictEqual(displayElement.style.borderRadius, '');
        });
    });
});
