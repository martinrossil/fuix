import { assert } from 'chai';
import Component from './Component';
import IComponent from './IComponent';

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

describe('IComponent.height property', () => {
    describe('default value', () => {
        it('height should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.height);
        });
    });
    describe('default style', () => {
        it('style.height should be ""', () => {
            const sizeElement: Component = new Component();
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
    describe('height property', () => {
        it('given height is NaN, when height = NaN, height should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('given height is NaN, when height = ' + positiveRandom + ', height should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.height, positiveRandom);
        });
        it('given height is NaN, height width = ' + minusRandom + ', height should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.height = minusRandom;
            assert.strictEqual(sizeElement.height, 0);
        });
        it('given height is ' + positiveRandom + ', when height = NaN, height should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
    });
    describe('height style', () => {
        it('given height is NaN, when height = NaN, style.height should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.height = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
        it('given height is NaN, when height = ' + positiveRandom + ', style.height should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.height = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + 'px');
        });
        it('given height is NaN, height width = ' + minusRandom + ', style.height should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.height = minusRandom;
            assert.strictEqual(sizeElement.style.height, '0px');
        });
        it('given height is ' + positiveRandom + ', when height = NaN, style.height should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.height = positiveRandom;
            sizeElement.height = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
});

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

describe('IComponent.heightPercent property', () => {
    describe('default value', () => {
        it('heightPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.heightPercent);
        });
    });
    describe('heightPercent property', () => {
        it('given heightPercent is NaN, when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', heightPercent should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.heightPercent, positiveRandom);
        });
        it('given heightPercent is NaN, when heightPercent = ' + minusRandom + ', heightPercent should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.heightPercent = minusRandom;
            assert.strictEqual(sizeElement.heightPercent, 0);
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, heightPercent should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.isNaN(sizeElement.heightPercent);
        });
        it('given heightPercent is NaN, when heightPercent = ' + positiveRandom + ', style.height should be ' + positiveRandom + '%', () => {
            const sizeElement: Component = new Component();
            sizeElement.heightPercent = positiveRandom;
            assert.strictEqual(sizeElement.style.height, positiveRandom + '%');
        });
        it('given heightPercent is ' + positiveRandom + ', when heightPercent = NaN, style.height should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.heightPercent = positiveRandom;
            sizeElement.heightPercent = NaN;
            assert.strictEqual(sizeElement.style.height, '');
        });
    });
});

describe('IComponent.minWidth property', () => {
    describe('default value', () => {
        it('minWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.minWidth);
        });
    });
    describe('minWidth property', () => {
        it('given minWidth is NaN, when minWidth = NaN, minWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = NaN;
            assert.isNaN(sizeElement.minWidth);
        });
        it('given minWidth is NaN, when minWidth = ' + positiveRandom + ', minWidth should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = positiveRandom;
            assert.strictEqual(sizeElement.minWidth, positiveRandom);
        });
        it('given minWidth is NaN, when minWidth = ' + positiveRandom + ', style.minWidth should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = positiveRandom;
            assert.strictEqual(sizeElement.style.minWidth, positiveRandom + 'px');
        });
        it('given minWidth is NaN, when minWidth = ' + minusRandom + ', minWidth should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minWidth = minusRandom;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('given minWidth is NaN, when minWidth = ' + minusRandom + ', style.minWidth should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = minusRandom;
            assert.strictEqual(sizeElement.style.minWidth, '0px');
        });
        it('given minWidth is ' + positiveRandom + ', when minWidth = NaN, style.minWidth should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.minWidth = positiveRandom;
            sizeElement.minWidth = NaN;
            assert.strictEqual(sizeElement.style.minWidth, '');
        });
    });
});

describe('IComponent.maxWidth property', () => {
    describe('default value', () => {
        it('maxWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.maxWidth);
        });
    });
    describe('maxWidth property', () => {
        it('given maxWidth is NaN, when maxWidth = NaN, maxWidth should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxWidth = NaN;
            assert.isNaN(sizeElement.maxWidth);
        });
        it('given maxWidth is NaN, when maxWidth = ' + positiveRandom + ', maxWidth should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxWidth = positiveRandom;
            assert.strictEqual(sizeElement.maxWidth, positiveRandom);
        });
        it('given maxWidth is NaN, when maxWidth = ' + positiveRandom + ', style.maxWidth should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxWidth = positiveRandom;
            assert.strictEqual(sizeElement.style.maxWidth, positiveRandom + 'px');
        });
        it('given maxWidth is NaN, when maxWidth = ' + minusRandom + ', maxWidth should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxWidth = minusRandom;
            assert.strictEqual(sizeElement.maxWidth, 0);
        });
        it('given maxWidth is NaN, when maxWidth = ' + minusRandom + ', style.maxWidth should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxWidth = minusRandom;
            assert.strictEqual(sizeElement.style.maxWidth, '0px');
        });
        it('given maxWidth is ' + positiveRandom + ', when maxWidth = NaN, style.maxWidth should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxWidth = positiveRandom;
            sizeElement.maxWidth = NaN;
            assert.strictEqual(sizeElement.style.maxWidth, '');
        });
    });
});

describe('IComponent.minHeight property', () => {
    describe('default value', () => {
        it('minHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.minHeight);
        });
    });
    describe('minHeight property', () => {
        it('given minHeight is NaN, when minHeight = NaN, minHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minHeight = NaN;
            assert.isNaN(sizeElement.minHeight);
        });
        it('given minHeight is NaN, when minHeight = ' + positiveRandom + ', minHeight should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minHeight = positiveRandom;
            assert.strictEqual(sizeElement.minHeight, positiveRandom);
        });
        it('given minHeight is NaN, when minHeight = ' + positiveRandom + ', style.minHeight should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minHeight = positiveRandom;
            assert.strictEqual(sizeElement.style.minHeight, positiveRandom + 'px');
        });
        it('given minHeight is NaN, when minHeight = ' + minusRandom + ', minHeight should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.minHeight = minusRandom;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('given minHeight is NaN, when minHeight = ' + minusRandom + ', style.minHeight should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.minHeight = minusRandom;
            assert.strictEqual(sizeElement.style.minHeight, '0px');
        });
        it('given minHeight is ' + positiveRandom + ', when minHeight = NaN, style.minHeight should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.minHeight = positiveRandom;
            sizeElement.minHeight = NaN;
            assert.strictEqual(sizeElement.style.minHeight, '');
        });
    });
});

describe('IComponent.maxHeight property', () => {
    describe('default value', () => {
        it('maxHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            assert.isNaN(sizeElement.maxHeight);
        });
    });
    describe('maxHeight property', () => {
        it('given maxHeight is NaN, when maxHeight = NaN, maxHeight should be NaN', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = NaN;
            assert.isNaN(sizeElement.maxHeight);
        });
        it('given maxHeight is NaN, when maxHeight = ' + positiveRandom + ', maxHeight should be ' + positiveRandom, () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = positiveRandom;
            assert.strictEqual(sizeElement.maxHeight, positiveRandom);
        });
        it('given maxHeight is NaN, when maxHeight = ' + positiveRandom + ', style.maxHeight should be ' + positiveRandom + 'px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = positiveRandom;
            assert.strictEqual(sizeElement.style.maxHeight, positiveRandom + 'px');
        });
        it('given maxHeight is NaN, when maxHeight = ' + minusRandom + ', maxHeight should be 0', () => {
            const sizeElement: IComponent = new Component();
            sizeElement.maxHeight = minusRandom;
            assert.strictEqual(sizeElement.maxHeight, 0);
        });
        it('given maxHeight is NaN, when maxHeight = ' + minusRandom + ', style.maxHeight should be 0px', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = minusRandom;
            assert.strictEqual(sizeElement.style.maxHeight, '0px');
        });
        it('given maxHeight is ' + positiveRandom + ', when maxHeight = NaN, style.maxHeight should be ""', () => {
            const sizeElement: Component = new Component();
            sizeElement.maxHeight = positiveRandom;
            sizeElement.maxHeight = NaN;
            assert.strictEqual(sizeElement.style.maxHeight, '');
        });
    });
});
