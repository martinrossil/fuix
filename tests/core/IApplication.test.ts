import { assert } from 'chai';
import Application from '../../src/core/Application';
import IApplication from '../../src/core/IApplication';

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

describe('IApplicationElement.bodyFontFamily property', () => {
    describe('default value', () => {
        it('bodyFontFamily should be ""', () => {
            const applicationElement: IApplication = new Application();
            assert.strictEqual(applicationElement.bodyFontFamily, '');
        });
    });
    describe('bodyFontFamily property', () => {
        it('given bodyFontFamily is "", when bodyFontFamily = "Arial", bodyFontFamily should be "Arial"', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyFontFamily = 'Arial';
            assert.strictEqual(applicationElement.bodyFontFamily, 'Arial');
        });
        it('given bodyFontFamily is "Arial", when bodyFontFamily = "", bodyFontFamily should be ""', () => {
            const applicationElement: IApplication = new Application();
            applicationElement.bodyFontFamily = 'Arial';
            applicationElement.bodyFontFamily = '';
            assert.strictEqual(applicationElement.bodyColor, '');
        });
    });
});
