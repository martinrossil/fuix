import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent, IContainer } from '../../src';

describe('IContainer.removeComponent(component: IComponent)', () => {
    it('given a container with a child component, when removeComponent is called with the child component, containsElement(component), should return false.', () => {
        const child: IComponent = new Component();
        const container: IContainer = new Container();
        container.addComponent(child);
        container.removeComponent(child);
        assert.isFalse(container.containsComponent(child));
    });
});
