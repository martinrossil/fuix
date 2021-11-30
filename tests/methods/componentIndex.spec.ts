import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent, IContainer } from '../../src';

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
