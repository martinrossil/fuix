import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IComponent, Component } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.widthPercent property', () => {
    describe('default value', () => {
        it('widthPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.widthPercent);
        });
    });
    describe('widthPercent property', () => {
        it('given widthPercent is NaN, when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', widthPercent should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.widthPercent, positiveRandom);
        });
        it('given widthPercent is NaN, when widthPercent = ' + minusRandom + ', widthPercent should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.widthPercent = minusRandom;
            assert.strictEqual(sizeElement.widthPercent, 0);
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', style.width should be ' + positiveRandom + '%', () => {
            const sizeElement: Component = new Component();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + '%');
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, style.width should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
});
