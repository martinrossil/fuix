import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IComponent.bottom property', () => {
    describe('default value', () => {
        it('bottom should be NaN', () => {
            const positionElement: IComponent = new Component();
            assert.isNaN(positionElement.bottom);
        });
        it('style.bottom should be ""', () => {
            const positionElement: Component = new Component();
            assert.strictEqual(positionElement.style.bottom, '');
        });
    });
    describe('bottom property', () => {
        it('given bottom is NaN, when bottom = NaN, bottom should be NaN', () => {
            const positionElement: IComponent = new Component();
            positionElement.bottom = NaN;
            assert.isNaN(positionElement.bottom);
        });
        it('given bottom is NaN, when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is ' + random + ', when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.bottom = random;
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is NaN, when bottom = ' + random + ', positionElement.style.bottom should be ' + random + 'px', () => {
            const positionElement: Component = new Component();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.style.bottom, random + 'px');
        });
        it('given bottom is ' + random + ', when bottom = NaN, positionElement.style.bottom should be ""', () => {
            const positionElement: Component = new Component();
            positionElement.bottom = random;
            positionElement.bottom = NaN;
            assert.strictEqual(positionElement.style.bottom, '');
        });
    });
});
