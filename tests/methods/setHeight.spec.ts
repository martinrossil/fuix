import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, IComponent } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.setHeight()', () => {
    it('given height is NaN, when setHeight(NaN), height should be NaN', () => {
        const component: IComponent = new Component();
        component.setHeight(NaN);
        assert.isNaN(component.height);
    });
    it('given height is NaN, when setHeight(' + positiveRandom + '), height should be ' + positiveRandom, () => {
        const component: IComponent = new Component();
        component.setHeight(positiveRandom);
        assert.strictEqual(component.height, positiveRandom);
    });
    it('given height is NaN, when setHeight(' + minusRandom + '), height should be 0', () => {
        const component: IComponent = new Component();
        component.setHeight(minusRandom);
        assert.strictEqual(component.height, 0);
    });
    it('given height is ' + positiveRandom + ', when setHeight(NaN), height should be NaN', () => {
        const component: IComponent = new Component();
        component.height = positiveRandom;
        component.setHeight(NaN);
        assert.isNaN(component.height);
    });
    it('given height is NaN, when setHeight(NaN), style.height should be ""', () => {
        const component: Component = new Component();
        component.setHeight(NaN);
        assert.strictEqual(component.style.height, '');
    });
    it('given height is NaN, when setHeight(' + positiveRandom + '), style.height should be ' + positiveRandom + 'px', () => {
        const component: Component = new Component();
        component.setHeight(positiveRandom);
        assert.strictEqual(component.style.height, positiveRandom + 'px');
    });
    it('given height is NaN, when setHeight(' + minusRandom + '), style.height should be 0px', () => {
        const component: Component = new Component();
        component.setHeight(minusRandom);
        assert.strictEqual(component.style.height, '0px');
    });
    it('given height is ' + positiveRandom + ', when setHeight(NaN), style.height should be ""', () => {
        const component: Component = new Component();
        component.height = positiveRandom;
        component.setHeight(NaN);
        assert.strictEqual(component.style.height, '');
    });
});
