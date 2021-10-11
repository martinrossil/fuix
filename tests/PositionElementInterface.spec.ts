import { assert } from 'chai';
import { describe, it } from 'mocha';
import PositionElement from '../src/core/PositionElement';
import PositionElementInterface from '../src/core/PositionElementInterface';
const positionElement: PositionElementInterface = new PositionElement();

describe('PositionElementInterface interface', () => {
    describe('default values', () => {
        it('left should be NaN', () => {
            assert.isNaN(positionElement.left);
        });
    });
});
