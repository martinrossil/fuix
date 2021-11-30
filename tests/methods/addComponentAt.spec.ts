import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent, IContainer } from '../../src';

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
