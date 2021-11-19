import { assert } from 'chai';
import { describe, it } from 'mocha';
import IContainer from '../../src/core/IContainer';
import Component from '../../src/core/Component';
import IComponent from '../../src/core/IComponent';
import Container from '../../src/core/Container';

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
