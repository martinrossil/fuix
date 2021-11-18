import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IComponent.right property', () => {
    describe('default value', () => {
        it('right should be NaN', () => {
            const positionElement: IComponent = new Component();
            assert.isNaN(positionElement.right);
        });
        it('style.right should be ""', () => {
            const positionElement: Component = new Component();
            assert.strictEqual(positionElement.style.right, '');
        });
    });
    describe('right property', () => {
        it('given right is NaN, when right = NaN, right should be NaN', () => {
            const positionElement: IComponent = new Component();
            positionElement.right = NaN;
            assert.isNaN(positionElement.right);
        });
        it('given right is NaN, when right = ' + random + ', right should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is ' + random + ', when right = ' + random + ', right should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.right = random;
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is NaN, when right = ' + random + ', positionElement.style.right should be ' + random + 'px', () => {
            const positionElement: Component = new Component();
            positionElement.right = random;
            assert.strictEqual(positionElement.style.right, random + 'px');
        });
        it('given right is ' + random + ', when right = NaN, positionElement.style.right should be ""', () => {
            const positionElement: Component = new Component();
            positionElement.right = random;
            positionElement.right = NaN;
            assert.strictEqual(positionElement.style.right, '');
        });
    });
});
