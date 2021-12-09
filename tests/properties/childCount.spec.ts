import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Component, Container, IComponent, IContainer } from '../../src';

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
