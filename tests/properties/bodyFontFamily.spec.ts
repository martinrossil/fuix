import { assert } from 'chai';
import { describe, it } from 'mocha';
import { Application, IApplication } from '../../src';

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
