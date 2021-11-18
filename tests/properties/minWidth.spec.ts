import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.minWidth property', () => {
    describe('default value', () => {
        it('minWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.minWidth);
        });
    });
    describe('minWidth property', () => {
        it('given minWidth is NaN, when minWidth = NaN, minWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = NaN;
            assert.isNaN(sizeElement.minWidth);
        });
        it('given minWidth is NaN, when minWidth = ' + positiveRandom + ', minWidth should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = positiveRandom;
            assert.strictEqual(sizeElement.minWidth, positiveRandom);
        });
        it('given minWidth is NaN, when minWidth = ' + positiveRandom + ', style.minWidth should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = positiveRandom;
            assert.strictEqual(sizeElement.style.minWidth, positiveRandom + 'px');
        });
        it('given minWidth is NaN, when minWidth = ' + minusRandom + ', minWidth should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = minusRandom;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('given minWidth is NaN, when minWidth = ' + minusRandom + ', style.minWidth should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = minusRandom;
            assert.strictEqual(sizeElement.style.minWidth, '0px');
        });
        it('given minWidth is ' + positiveRandom + ', when minWidth = NaN, style.minWidth should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = positiveRandom;
            sizeElement.minWidth = NaN;
            assert.strictEqual(sizeElement.style.minWidth, '');
        });
    });
});
