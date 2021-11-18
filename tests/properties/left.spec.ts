import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IComponent.left property', () => {
    describe('default value', () => {
        it('left should be NaN', () => {
            const positionElement: IComponent = new Component();
            assert.isNaN(positionElement.left);
        });
        it('style.left should be ""', () => {
            const positionElement: Component = new Component();
            assert.strictEqual(positionElement.style.left, '');
        });
    });
    describe('left property', () => {
        it('given left is NaN, when left = NaN, left should be NaN', () => {
            const positionElement: IComponent = new Component();
            positionElement.left = NaN;
            assert.isNaN(positionElement.left);
        });
        it('given left is NaN, when left = ' + random + ', left should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.left = random;
            assert.strictEqual(positionElement.left, random);
        });
        it('given left is ' + random + ', when left = ' + random + ', left should be ' + random, () => {
            const positionElement: IComponent = new Component();
            positionElement.left = random;
            positionElement.left = random;
            assert.strictEqual(positionElement.left, random);
        });
        it('given left is NaN, when left = ' + random + ', positionElement.style.left should be ' + random + 'px', () => {
            const positionElement: Component = new Component();
            positionElement.left = random;
            assert.strictEqual(positionElement.style.left, random + 'px');
        });
        it('given left is ' + random + ', when left = NaN, positionElement.style.left should be ""', () => {
            const positionElement: Component = new Component();
            positionElement.left = random;
            positionElement.left = NaN;
            assert.strictEqual(positionElement.style.left, '');
        });
    });
});
