import { assert } from 'chai';
import { describe, it } from 'mocha';
import { IComponent, Component } from '../../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('IComponent.width property', () => {
    describe('default value', () => {
        it('width should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.width);
        });
    });
    describe('default style', () => {
        it('style.width should be ""', () => {
            const sizeElement: Component = new Component();
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
    describe('width property', () => {
        it('given width is NaN, when width = NaN, width should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('given width is NaN, when width = ' + positiveRandom + ', width should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.width, positiveRandom);
        });
        it('given width is NaN, when width = ' + minusRandom + ', width should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.width = minusRandom;
            assert.strictEqual(sizeElement.width, 0);
        });
        it('given width is ' + positiveRandom + ', when width = NaN, width should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
    });
    describe('width style', () => {
        it('given width is NaN, when width = NaN, style.width should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.width = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
        it('given width is NaN, when width = ' + positiveRandom + ', style.width should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
        });
        it('given width is NaN, when width = ' + minusRandom + ', style.width should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.width = minusRandom;
            assert.strictEqual(sizeElement.style.width, '0px');
        });
        it('given width is ' + positiveRandom + ', when width = NaN, style.width should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
});
