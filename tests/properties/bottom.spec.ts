import { assert } from 'chai';
import { describe, it } from 'mocha';
import { PositionElement, IPositionElement } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IPositionElement.bottom property', () => {
    describe('default value', () => {
        it('bottom should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            assert.isNaN(positionElement.bottom);
        });
        it('style.bottom should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            assert.strictEqual(positionElement.style.bottom, '');
        });
    });
    describe('bottom property', () => {
        it('given bottom is NaN, when bottom = NaN, bottom should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.bottom = NaN;
            assert.isNaN(positionElement.bottom);
        });
        it('given bottom is NaN, when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is ' + random + ', when bottom = ' + random + ', bottom should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.bottom = random;
            positionElement.bottom = random;
            assert.strictEqual(positionElement.bottom, random);
        });
        it('given bottom is NaN, when bottom = ' + random + ', positionElement.style.bottom should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.bottom = random;
            assert.strictEqual(positionElement.style.bottom, random + 'px');
        });
        it('given bottom is ' + random + ', when bottom = NaN, positionElement.style.bottom should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.bottom = random;
            positionElement.bottom = NaN;
            assert.strictEqual(positionElement.style.bottom, '');
        });
    });
});
