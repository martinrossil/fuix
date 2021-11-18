import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.maxHeight property', () => {
    describe('default value', () => {
        it('maxHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.maxHeight);
        });
    });
    describe('maxHeight property', () => {
        it('given maxHeight is NaN, when maxHeight = NaN, maxHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = NaN;
            assert.isNaN(sizeElement.maxHeight);
        });
        it('given maxHeight is NaN, when maxHeight = ' + positiveRandom + ', maxHeight should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = positiveRandom;
            assert.strictEqual(sizeElement.maxHeight, positiveRandom);
        });
        it('given maxHeight is NaN, when maxHeight = ' + positiveRandom + ', style.maxHeight should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = positiveRandom;
            assert.strictEqual(sizeElement.style.maxHeight, positiveRandom + 'px');
        });
        it('given maxHeight is NaN, when maxHeight = ' + minusRandom + ', maxHeight should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = minusRandom;
            assert.strictEqual(sizeElement.maxHeight, 0);
        });
        it('given maxHeight is NaN, when maxHeight = ' + minusRandom + ', style.maxHeight should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = minusRandom;
            assert.strictEqual(sizeElement.style.maxHeight, '0px');
        });
        it('given maxHeight is ' + positiveRandom + ', when maxHeight = NaN, style.maxHeight should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = positiveRandom;
            sizeElement.maxHeight = NaN;
            assert.strictEqual(sizeElement.style.maxHeight, '');
        });
    });
});
