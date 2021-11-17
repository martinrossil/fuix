import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ApplicationElement, IAppliationElement } from '../../src';

describe('IApplicationElement.bodyFontFamily property', () => {
    describe('default value', () => {
        it('bodyFontFamily should be ""', () => {
            const applicationElement: IAppliationElement = new ApplicationElement();
            assert.strictEqual(applicationElement.bodyFontFamily, '');
        });
    });
    describe('bodyFontFamily property', () => {
        it('given bodyFontFamily is "", when bodyFontFamily = "Arial", bodyFontFamily should be "Arial"', () => {
            const applicationElement: IAppliationElement = new ApplicationElement();
            applicationElement.bodyFontFamily = 'Arial';
            assert.strictEqual(applicationElement.bodyFontFamily, 'Arial');
        });
        it('given bodyFontFamily is "Arial", when bodyFontFamily = "", bodyFontFamily should be ""', () => {
            const applicationElement: IAppliationElement = new ApplicationElement();
            applicationElement.bodyFontFamily = 'Arial';
            applicationElement.bodyFontFamily = '';
            assert.strictEqual(applicationElement.bodyColor, '');
        });
    });
});
