import { assert } from 'chai';
import { describe, it } from 'mocha';
import { PositionElement, IPositionElement, Position } from '../../src';
const random: number = Math.ceil(-100 + Math.random() * 200);

describe('IPositionElement.position property', () => {
    describe('default value', () => {
        it('position should be Position.STATIC', () => {
            const positionElement: IPositionElement = new PositionElement();
            assert.strictEqual(positionElement.position, Position.STATIC);
        });
        it('style.position should be ""', () => {
            const positionElement: PositionElement = new PositionElement();
            assert.strictEqual(positionElement.style.position, '');
        });
    });
    describe('position property', () => {
        it('given position is Position.STATIC, when position = Position.STATIC, position should be Position.STATIC', () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.position = Position.STATIC;
            assert.strictEqual(positionElement.position, Position.STATIC);
        });
        it('given position is Position.STATIC, when position = Position.ABSOLUTE, position should be Position.ABSOLUTE', () => {
            const positionElement: IPositionElement = new PositionElement();
            positionElement.position = Position.ABSOLUTE;
            assert.strictEqual(positionElement.position, Position.ABSOLUTE);
        });
        it('given position is Position.STATIC, when position = Position.ABSOLUTE, style.position should be Position.ABSOLUTE', () => {
            const positionElement: PositionElement = new PositionElement();
            positionElement.position = Position.ABSOLUTE;
            assert.strictEqual(positionElement.style.position, Position.ABSOLUTE);
        });
    });
});
