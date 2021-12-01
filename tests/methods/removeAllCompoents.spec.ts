import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IContainer, IComponent } from '../../src';

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
