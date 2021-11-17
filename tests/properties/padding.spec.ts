import { assert } from 'chai';
import { describe, it } from 'mocha';
import { DisplayContainer, IDisplayContainer } from '../../src';
const positiveRandom = Math.round(Math.random() * 10);
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('IDisplayContainer.padding property', () => {
    describe('default value', () => {
        it('padding should be 0', () => {
            const displayContainer: IDisplayContainer = new DisplayContainer();
            assert.strictEqual(displayContainer.padding, 0);
        });
    });
    describe('default style', () => {
        it('style.padding should be ""', () => {
            const displayContainer: DisplayContainer = new DisplayContainer();
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
    describe('padding property', () => {
        it('given padding is 0, when padding = 0, padding should be 0', () => {
            const displayContainer: IDisplayContainer = new DisplayContainer();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', padding should be ' + positiveRandom, () => {
            const displayContainer: IDisplayContainer = new DisplayContainer();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.padding, positiveRandom);
        });
        it('given padding is 0, when padding = ' + minusRandom + ', padding should be 0', () => {
            const displayContainer: IDisplayContainer = new DisplayContainer();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, padding should be 0', () => {
            const displayContainer: IDisplayContainer = new DisplayContainer();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.padding, 0);
        });

        it('given padding is 0, when padding = 0, style.padding should be ""', () => {
            const displayContainer: DisplayContainer = new DisplayContainer();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', style.padding should be ' + positiveRandom + 'px', () => {
            const displayContainer: DisplayContainer = new DisplayContainer();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.style.padding, positiveRandom + 'px');
        });
        it('given padding is 0, when padding = ' + minusRandom + ', style.padding should be ""', () => {
            const displayContainer: DisplayContainer = new DisplayContainer();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, style.padding should be ""', () => {
            const displayContainer: DisplayContainer = new DisplayContainer();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
});