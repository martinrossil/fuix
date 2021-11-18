import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IComponent, Component } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.setWidth()', () => {
    it('given width is NaN, when setWidth(NaN), width should be NaN', () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setWidth(NaN);
        assert.isNaN(sizeElement.width);
    });
    it('given width is NaN, when setWidth(' + positiveRandom + '), width should be ' + positiveRandom, () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setWidth(positiveRandom);
        assert.strictEqual(sizeElement.width, positiveRandom);
    });
    it('given width is NaN, when setWidth(' + minusRandom + '), width should be 0', () => {
        const sizeElement: IComponent = new Component();
        sizeElement.setWidth(minusRandom);
        assert.strictEqual(sizeElement.width, 0);
    });
    it('given width is ' + positiveRandom + ', when setWidth(NaN), width should be NaN', () => {
        const sizeElement: IComponent = new Component();
        sizeElement.width = positiveRandom;
        sizeElement.setWidth(NaN);
        assert.isNaN(sizeElement.width);
    });
    it('given width is NaN, when setWidth(NaN), style.width should be ""', () => {
        const sizeElement: Component = new Component();
        sizeElement.setWidth(NaN);
        assert.strictEqual(sizeElement.style.width, '');
    });
    it('given width is NaN, when setWidth(' + positiveRandom + '), style.width should be ' + positiveRandom + 'px', () => {
        const sizeElement: Component = new Component();
        sizeElement.setWidth(positiveRandom);
        assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
    });
    it('given width is NaN, when setWidth(' + minusRandom + '), style.width should be 0px', () => {
        const sizeElement: Component = new Component();
        sizeElement.setWidth(minusRandom);
        assert.strictEqual(sizeElement.style.width, '0px');
    });
    it('given width is ' + positiveRandom + ', when setWidth(NaN), style.width should be ""', () => {
        const sizeElement: Component = new Component();
        sizeElement.width = positiveRandom;
        sizeElement.setWidth(NaN);
        assert.strictEqual(sizeElement.style.width, '');
    });
});
