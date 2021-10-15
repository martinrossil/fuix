import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ISizeElement, SizeElement } from '../src';
const positiveRandom = Math.round(Math.random() * 1000);
const minusRandom = Math.round(-1000 + Math.random() * 500);

describe('ISizeElement interface', () => {
    describe('setSize()', () => {
        it('given width is NaN and height is NaN, when setSize(NaN, NaN), width and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
        it('given width is NaN and height is NaN, when setSize(' + positiveRandom + ', ' + positiveRandom + '), width and height should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(positiveRandom, positiveRandom);
            assert.strictEqual(sizeElement.width, positiveRandom);
            assert.strictEqual(sizeElement.height, positiveRandom);
        });
        it('given width is NaN and height is NaN, when setSize(' + minusRandom + ', ' + minusRandom + '), width and height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSize(minusRandom, minusRandom);
            assert.strictEqual(sizeElement.width, 0);
            assert.strictEqual(sizeElement.height, 0);
        });
    });
    describe('setSizePercent()', () => {
        it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(NaN, NaN), widthPercent and heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSizePercent(NaN, NaN);
            assert.isNaN(sizeElement.widthPercent);
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(' + positiveRandom + ', ' + positiveRandom + '), widthPercent and heightPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSizePercent(positiveRandom, positiveRandom);
            assert.strictEqual(sizeElement.widthPercent, positiveRandom);
            assert.strictEqual(sizeElement.heightPercent, positiveRandom);
        });
        it('given widthPercent is NaN and heightPercent is NaN, when setSizePercent(' + minusRandom + ', ' + minusRandom + '), widthPercent and heightPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setSizePercent(minusRandom, minusRandom);
            assert.strictEqual(sizeElement.widthPercent, 0);
            assert.strictEqual(sizeElement.heightPercent, 0);
        });
    });
    describe('setWidth()', () => {
        it('given width is NaN, when setWidth(NaN), width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidth(NaN);
            assert.isNaN(sizeElement.width);
        });
        it('given width is NaN, when setWidth(' + positiveRandom + '), width should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidth(positiveRandom);
            assert.strictEqual(sizeElement.width, positiveRandom);
        });
        it('given width is NaN, when setWidth(' + minusRandom + '), width should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidth(minusRandom);
            assert.strictEqual(sizeElement.width, 0);
        });
    });
    describe('setHeight()', () => {
        it('given height is NaN, when setHeight(NaN), height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeight(NaN);
            assert.isNaN(sizeElement.height);
        });
        it('given height is NaN, when setHeight(' + positiveRandom + '), height should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeight(positiveRandom);
            assert.strictEqual(sizeElement.height, positiveRandom);
        });
        it('given height is NaN, when setHeight(' + minusRandom + '), height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeight(minusRandom);
            assert.strictEqual(sizeElement.height, 0);
        });
    });
    describe('setWidthPercent()', () => {
        it('given widthPercent is NaN, when setWidthPercent(NaN), widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidthPercent(NaN);
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when setWidthPercent(' + positiveRandom + '), widthPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidthPercent(positiveRandom);
            assert.strictEqual(sizeElement.widthPercent, positiveRandom);
        });
        it('given widthPercent is NaN, when setWidthPercent(' + minusRandom + '), widthPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setWidthPercent(minusRandom);
            assert.strictEqual(sizeElement.widthPercent, 0);
        });
    });
    describe('setHeightPercent()', () => {
        it('given heightPercent is NaN, when setHeightPercent(NaN), heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeightPercent(NaN);
            assert.isNaN(sizeElement.heightPercent);
        });
    });
    describe('setHeightPercent()', () => {
        it('given heightPercent is NaN, when setHeightPercent(' + positiveRandom + '), heightPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeightPercent(positiveRandom);
            assert.strictEqual(sizeElement.heightPercent, positiveRandom);
        });
    });
    describe('setHeightPercent()', () => {
        it('given heightPercent is NaN, when setHeightPercent(' + minusRandom + '), heightPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.setHeightPercent(minusRandom);
            assert.strictEqual(sizeElement.heightPercent, 0);
        });
    });
    describe('default values', () => {
        it('width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.width);
        });
        it('height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.height);
        });
        it('widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.widthPercent);
        });
        it('heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.heightPercent);
        });
    });
    describe('default styles', () => {
        it('style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            assert.strictEqual(sizeElement.style.width, '');
        });
        it('style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
    describe('width property', () => {
        it('given width is NaN, when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('given width is NaN, when width = ' + positiveRandom + ', width should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.width, positiveRandom);
        });
        it('given width is NaN, when width = ' + minusRandom + ', width should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = minusRandom;
            assert.strictEqual(sizeElement.width, 0);
        });
        it('given width is ' + positiveRandom + ', when width = NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('given width is NaN, when width = ' + positiveRandom + ', style.width should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + 'px');
        });
        it('given width is ' + positiveRandom + ', when width = NaN, style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.width = positiveRandom;
            sizeElement.width = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
    describe('height property', () => {
        it('given height is NaN, when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('given height is NaN, when height = ' + positiveRandom + ', height should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.height, positiveRandom);
        });
        it('given height is NaN, height width = ' + minusRandom + ', height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = minusRandom;
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given height is ' + positiveRandom + ', when height = NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('given height is NaN, when height = ' + positiveRandom + ', style.height should be ' + positiveRandom + 'px', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + 'px');
        });
        it('given height is ' + positiveRandom + ', when height = NaN, style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
    describe('widthPercent property', () => {
        it('given widthPercent is NaN, when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', widthPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.widthPercent, positiveRandom);
        });
        it('given widthPercent is NaN, when widthPercent = ' + minusRandom + ', widthPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = minusRandom;
            assert.strictEqual(sizeElement.widthPercent, 0);
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, widthPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.isNaN(sizeElement.widthPercent);
        });
        it('given widthPercent is NaN, when widthPercent = ' + positiveRandom + ', style.width should be ' + positiveRandom + '%', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.width, positiveRandom + '%');
        });
        it('given widthPercent is ' + positiveRandom + ', when widthPercent = NaN, style.width should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.widthPercent = positiveRandom;
            sizeElement.widthPercent = NaN;
            assert.strictEqual(sizeElement.style.width, '');
        });
    });
    describe('heightPercent property', () => {
        it('given heightPercent is NaN, when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', heightPercent should be ' + positiveRandom, () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.heightPercent, positiveRandom);
        });
        it('given heightPercent is NaN, when heightPercent = ' + minusRandom + ', heightPercent should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = minusRandom;
            assert.strictEqual(sizeElement.heightPercent, 0);
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', style.height should be ' + positiveRandom + '%', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + '%');
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, style.height should be ""', () => {
            const sizeElement: SizeElement = new SizeElement();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
});
