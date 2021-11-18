import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IComponent.top property', () => {
    describe('default value', () => {
        it('top should be NaN', () => {
            const positionElement: IComponent = new Component();
            assert.isNaN(positionElement.top);
        });
        it('style.top should be ""', () => {
            const positionElement: Component = new Component();
            assert.strictEqual(positionElement.style.top, '');
        });
    });
    describe('top property', () => {
        it('given top is NaN, when top = NaN, top should be NaN', () => {
            const positionElement: IComponent = new Component();
            positionElement.top = NaN;
            assert.isNaN(positionElement.top);
        });
        it('given top is NaN, when top = ' + random + ', top should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is ' + random + ', when top = ' + random + ', top should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.top = random;
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is NaN, when top = ' + random + ', positionElement.style.top should be ' + random + 'px', () => {
            const positionElement: Component = new Component();
            positionElement.top = random;
            assert.strictEqual(positionElement.style.top, random + 'px');
        });
        it('given top is ' + random + ', when top = NaN, positionElement.style.top should be ""', () => {
            const positionElement: Component = new Component();
            positionElement.top = random;
            positionElement.top = NaN;
            assert.strictEqual(positionElement.style.top, '');
        });
    });
});
