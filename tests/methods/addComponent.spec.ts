import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent } from '../../src';

describe('IContainer.addComponent(component: IComponent)', () => {
    it('given an empty container, when addComponent is called with a component, Node.contains(node), should return true.', () => {
        const child: IComponent = new Component();
        const container: Container = new Container();
        container.addComponent(child);
        assert.isTrue(container.contains(child as unknown as Node));
    });
});
