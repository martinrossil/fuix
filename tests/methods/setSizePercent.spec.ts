import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IComponent, Component } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.setSizePercent()', () => {
    it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(NaN, NaN), widthPercent and heightPercent should be NaN', () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setSizePercent(NaN, NaN);
        assert.isNaN(sizeElement.widthPercent);
        assert.isNaN(sizeElement.heightPercent);
    });
    it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(' + positiveRandom + ', ' + positiveRandom + '), widthPercent and heightPercent should be ' + positiveRandom, () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setSizePercent(positiveRandom, positiveRandom);
        assert.strictEqual(sizeElement.widthPercent, positiveRandom);
        assert.strictEqual(sizeElement.heightPercent, positiveRandom);
    });
    it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(' + minusRandom + ', ' + minusRandom + '), widthPercent and heightPercent should be 0', () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setSizePercent(minusRandom, minusRandom);
        assert.strictEqual(sizeElement.widthPercent, 0);
        assert.strictEqual(sizeElement.heightPercent, 0);
    });
});
