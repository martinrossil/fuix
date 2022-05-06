/* eslint-disable no-undef */
import { assert } from 'chai';
import Component from './Component';
import Container from './Container';
import IComponent from './IComponent';
import IContainer from './IContainer';

const positiveRandom = Math.round(Math.random() * 10) + 1;
const minusRandom = Math.round(-10 + Math.random() * 5);

describe('IContainer.addComponent(component: IComponent)', () => {
    it('given an empty container, when addComponent is called with a component, Node.contains(node), should return true.', () => {
        const child: IComponent = new Component();
        const container: Container = new Container();
        container.addComponent(child);
        assert.isTrue(container.contains(child as unknown as Node));
    });
});

describe('IContainer.addComponentAt(component: IComponent, index: number)', () => {
    it('given an empty container, when index -1, componentIndex should return 0.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponentAt(child, -1);
        assert.strictEqual(container.componentIndex(child), 0);
    });
    it('given an empty container, when index 1, componentIndex should return 0.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponentAt(child, 1);
        assert.strictEqual(container.componentIndex(child), 0);
    });
    it('given a container with one child component, when index 0, componentIndex should return 0.', () => {
        const container: IContainer = new Container();
        const child: IComponent = new Component();
        container.addComponent(child);
        const child2: IComponent = new Component();
        container.addComponentAt(child2, 0);
        assert.strictEqual(container.componentIndex(child2), 0);
    });
    it('given a container with one child component, when index 1, componentIndex should return 1.', () => {
        const container: IContainer = new Container();
        const child: IComponent = new Component();
        container.addComponent(child);
        const child2: IComponent = new Component();
        container.addComponentAt(child2, 1);
        assert.strictEqual(container.componentIndex(child2), 1);
    });
});

describe('IContainer.addComponents(component: Array<IComponent>)', () => {
    it('given an empty container, when addComponents is called with a child1 and child2, IContainer.containsComponent(child1) and IContainer.containsComponent(child2), should return true.', () => {
        const child1: IComponent = new Component();
        const child2: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponents([child1, child2]);
        assert.isTrue(container.containsComponent(child1));
        assert.isTrue(container.containsComponent(child2));
    });
});

describe('IContainer.componentIndex(component: IComponent)', () => {
    it('given an empty container, componentIndex should return NaN.', () => {
        const container: IContainer = new Container();
        const child: IComponent = new Component();
        assert.isNaN(container.componentIndex(child));
    });
    it('given a container with one child, componentIndex should return 0.', () => {
        const container: IContainer = new Container();
        const child: IComponent = new Component();
        container.addComponent(child);
        assert.strictEqual(container.componentIndex(child), 0);
    });
});

describe('IContainer.containsComponent(component: IComponent)', () => {
    it('given an empty container, containsElement(component), should return false.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        assert.isFalse(container.containsComponent(child));
    });
    it('given an empty container, when addComponent is called with a component, containsElement(component), should return true.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponent(child);
        assert.isTrue(container.containsComponent(child));
    });
});

describe('IContainer.removeAllComponents()', () => {
    it('given a container that contains child1 and child2, when removeAllComponents is called, IContainer.containsComponent(child1) and IContainer.containsComponent(child2), should return false.', () => {
        const child1: IComponent = new Component();
        const child2: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponents([child1, child2]);
        container.removeAllComponents();
        assert.isFalse(container.containsComponent(child1));
        assert.isFalse(container.containsComponent(child2));
    });
});

describe('IContainer.removeComponent(component: IComponent)', () => {
    it('given a container with a child component, when removeComponent is called with the child component, containsElement(component), should return false.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponent(child);
        container.removeComponent(child);
        assert.isFalse(container.containsComponent(child));
    });
});

describe('IContainer.padding property', () => {
    describe('default value', () => {
        it('padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            assert.strictEqual(displayContainer.padding, 0);
        });
    });
    describe('default style', () => {
        it('style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
    describe('padding property', () => {
        it('given padding is 0, when padding = 0, padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', padding should be ' + positiveRandom, () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.padding, positiveRandom);
        });
        it('given padding is 0, when padding = ' + minusRandom + ', padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.padding, 0);
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, padding should be 0', () => {
            const displayContainer: IContainer = new Container();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.padding, 0);
        });

        it('given padding is 0, when padding = 0, style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = 0;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is 0, when padding = ' + positiveRandom + ', style.padding should be ' + positiveRandom + 'px', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = positiveRandom;
            assert.strictEqual(displayContainer.style.padding, positiveRandom + 'px');
        });
        it('given padding is 0, when padding = ' + minusRandom + ', style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = minusRandom;
            assert.strictEqual(displayContainer.style.padding, '');
        });
        it('given padding is ' + positiveRandom + ', when padding = NaN, style.padding should be ""', () => {
            const displayContainer: Container = new Container();
            displayContainer.padding = positiveRandom;
            displayContainer.padding = NaN;
            assert.strictEqual(displayContainer.style.padding, '');
        });
    });
});

describe('IContainer.childCount property', () => {
    describe('default value', () => {
        it('given an empty container, childCount should be 0', () => {
            const container: IContainer = new Container();
            assert.strictEqual(container.childCount, 0);
        });
        it('given an empty container, when addComponent(), childCount should be 1', () => {
            const container: IContainer = new Container();
            const child: IComponent = new Component();
            container.addComponent(child);
            assert.strictEqual(container.childCount, 1);
        });
        it('given a container with 1 child, when removeComponent(), childCount should be 0', () => {
            const container: IContainer = new Container();
            const child: IComponent = new Component();
            container.addComponent(child);
            assert.strictEqual(container.childCount, 1);
            container.removeComponent(child);
            assert.strictEqual(container.childCount, 0);
        });
    });
});
