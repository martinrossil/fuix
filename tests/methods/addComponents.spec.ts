import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IContainer, IComponent } from '../../src';

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
