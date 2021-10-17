import { assert } from 'chai';
import { describe, it } from 'mocha';
import { PositionElement, IPositionElement } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IPositionElement.top property', () => {
    describe('default value', () => {
        it('top should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            assert.isNaN(positionElement.top);
        });
        it('style.top should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            assert.strictEqual(positionElement.style.top, '');
        });
    });
    describe('top property', () => {
        it('given top is NaN, when top = NaN, top should be NaN', () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.top = NaN;
            assert.isNaN(positionElement.top);
        });
        it('given top is NaN, when top = ' + random + ', top should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is ' + random + ', when top = ' + random + ', top should be ' + random, () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.top = random;
            positionElement.top = random;
            assert.strictEqual(positionElement.top, random);
        });
        it('given top is NaN, when top = ' + random + ', positionElement.style.top should be ' + random + 'px', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.top = random;
            assert.strictEqual(positionElement.style.top, random + 'px');
        });
        it('given top is ' + random + ', when top = NaN, positionElement.style.top should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.top = random;
            positionElement.top = NaN;
            assert.strictEqual(positionElement.style.top, '');
        });
    });
});
