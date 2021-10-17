import { assert } from 'chai';
import { describe, it } from 'mocha';
import { PositionElement, IPositionElement } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IPositionElement.right property', () => {
    describe('default value', () => {
        it('right should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            assert.isNaN(positionElement.right);
        });
        it('style.right should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            assert.strictEqual(positionElement.style.right, '');
        });
    });
    describe('right property', () => {
        it('given right is NaN, when right = NaN, right should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.right = NaN;
            assert.isNaN(positionElement.right);
        });
        it('given right is NaN, when right = ' + random + ', right should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is ' + random + ', when right = ' + random + ', right should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.right = random;
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is NaN, when right = ' + random + ', positionElement.style.right should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.right = random;
            assert.strictEqual(positionElement.style.right, random + 'px');
        });
        it('given right is ' + random + ', when right = NaN, positionElement.style.right should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.right = random;
            positionElement.right = NaN;
            assert.strictEqual(positionElement.style.right, '');
        });
    });
});
