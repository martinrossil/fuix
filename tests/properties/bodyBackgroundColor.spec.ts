import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Application, IApplication } from '../../src';

describe('IApplicationElement.bodyBackgroundColor property', () => {
    describe('default value', () => {
        it('bodyBackgroundColor should be ""', () => {
            const applicationElement: IApplication = new Application();
            assert.strictEqual(applicationElement.bodyBackgroundColor, '');
        });
    });
    describe('bodyBackgroundColor property', () => {
        it('given bodyBackgroundColor is "", when bodyBackgroundColor = "rgb(18, 52, 86)", bodyBackgroundColor should be "rgb(18, 52, 86)"', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyBackgroundColor = 'rgb(18, 52, 86)';
            assert.strictEqual(applicationElement.bodyBackgroundColor, 'rgb(18, 52, 86)');
        });
        it('given bodyBackgroundColor is "rgb(18, 52, 86)", when bodyBackgroundColor = "", bodyBackgroundColor should be ""', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyBackgroundColor = 'rgb(18, 52, 86)';
            applicationElement.bodyBackgroundColor = '';
            assert.strictEqual(applicationElement.bodyBackgroundColor, '');
        });
    });
});
