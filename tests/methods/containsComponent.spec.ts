import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent, IContainer } from '../../src';

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
