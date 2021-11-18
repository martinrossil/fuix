import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Application, IApplication } from '../../src';

describe('IApplicationElement.bodyColor property', () => {
    describe('default value', () => {
        it('bodyColor should be ""', () => {
            const applicationElement: IApplication = new Application();
            assert.strictEqual(applicationElement.bodyColor, '');
        });
    });
    describe('bodyColor property', () => {
        it('given bodyColor is "", when bodyColor = "rgb(18, 52, 86)", bodyColor should be "rgb(18, 52, 86)"', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyColor = 'rgb(18, 52, 86)';
            assert.strictEqual(applicationElement.bodyColor, 'rgb(18, 52, 86)');
        });
        it('given bodyColor is "rgb(18, 52, 86)", when bodyColor = "", bodyColor should be ""', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyColor = 'rgb(18, 52, 86)';
            applicationElement.bodyColor = '';
            assert.strictEqual(applicationElement.bodyColor, '');
        });
    });
});
