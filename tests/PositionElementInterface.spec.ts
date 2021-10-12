import { assert } from 'chai';
import { describe, it } from 'mocha';
import PositionElement from '../src/core/PositionElement';
import PositionElementInterface from '../src/core/PositionElementInterface';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('PositionElementInterface interface', () => {
    describe('default values', () => {
        it('left should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            assert.isNaN(positionElement.left);
        });
        it('top should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            assert.isNaN(positionElement.top);
        });
        it('right should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            assert.isNaN(positionElement.right);
        });
        it('bottom should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            assert.isNaN(positionElement.bottom);
        });
    });
    describe('left property', () => {
        it('given left is NaN, when left = NaN, left should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.left = NaN;
            assert.isNaN(positionElement.left);
        });
        it('given left is NaN, when left = ' + random + ', left should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.left = random;
            assert.strictEqual(positionElement.left, random);
        });
        it('given left is ' + random + ', when left = ' + random + ', left should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.left = random;
            positionElement.left = random;
            assert.strictEqual(positionElement.left, random);
        });
        it('given left is NaN, when left = ' + random + ', positionElement.style.left should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.left = random;
            assert.strictEqual(positionElement.style.left, random + 'px');
        });
    });
    describe('top property', () => {
        it('given top is NaN, when top = NaN, top should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.top = NaN;
            assert.isNaN(positionElement.top);
        });
        it('given top is NaN, when top = ' + random + ', top should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is ' + random + ', when top = ' + random + ', top should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.top = random;
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is NaN, when top = ' + random + ', positionElement.style.top should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.top = random;
            assert.strictEqual(positionElement.style.top, random + 'px');
        });
    });
    describe('right property', () => {
        it('given right is NaN, when right = NaN, right should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.right = NaN;
            assert.isNaN(positionElement.right);
        });
        it('given right is NaN, when right = ' + random + ', right should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is ' + random + ', when right = ' + random + ', right should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.right = random;
            positionElement.right = random;
            assert.strictEqual(positionElement.right, random);
        });
        it('given right is NaN, when right = ' + random + ', positionElement.style.right should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.right = random;
            assert.strictEqual(positionElement.style.right, random + 'px');
        });
    });
    describe('bottom property', () => {
        it('given bottom is NaN, when bottom = NaN, bottom should be NaN', () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.bottom = NaN;
            assert.isNaN(positionElement.bottom);
        });
        it('given bottom is NaN, when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is ' + random + ', when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: PositionElementInterface = new PositionElement();
            positionElement.bottom = random;
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is NaN, when bottom = ' + random + ', positionElement.style.bottom should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.style.bottom, random + 'px');
        });
    });
});
