import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Container, IContainer } from '../../src/';

const positiveRandom = Math.round(Math.random() * 10) + 1;
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('IContainer.padding property', () => {
    describe('default value', () => {
        it('padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            assert.strictEqual(displayContainer.padding, 0);
        });
    });
    describe('default style', () => {
        it('style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
    describe('padding property', () => {
        it('given padding is 0, when padding = 0, padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', padding should be ' + positiveRandom, () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.padding, positiveRandom);
        });
        it('given padding is 0, when padding = ' + minusRandom + ', padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.padding, 0);
        });

        it('given padding is 0, when padding = 0, style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', style.padding should be ' + positiveRandom + 'px', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.style.padding, positiveRandom + 'px');
        });
        it('given padding is 0, when padding = ' + minusRandom + ', style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
});
