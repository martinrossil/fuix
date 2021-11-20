import { assert } from 'chai';
import { describe, it } from 'mocha';
import Component from '../../src/core/Component';
import IComponent from '../../src/core/IComponent';

describe('IComponent.backgroundColor property', () => {
    describe('default value', () => {
        it('backgroundColor should be ""', () => {
            const component: IComponent = new Component();
            assert.strictEqual(component.backgroundColor, '');
        });
    });
    describe('backgroundColor property', () => {
        it('given backgroundColor is "", when backgroundColor = "rgb(18, 52, 86)", backgroundColor should be "rgb(18, 52, 86)"', () => {
            const component: IComponent = new Component();
            component.backgroundColor = 'rgb(18, 52, 86)';
            assert.strictEqual(component.backgroundColor, 'rgb(18, 52, 86)');
        });
        it('given backgroundColor is "rgb(18, 52, 86)", when backgroundColor = "", backgroundColor should be ""', () => {
            const component: IComponent = new Component();
            component.backgroundColor = 'rgb(18, 52, 86)';
            component.backgroundColor = '';
            assert.strictEqual(component.backgroundColor, '');
        });
    });
});
