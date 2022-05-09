import { assert } from 'chai';
import DataRenderer from './DataRenderer';
import IDataRenderer from './IDataRenderer';

const positiveRandom = Math.round(Math.random() * 1000);

describe('IDataRenderer.data property', () => {
    describe('default value', () => {
        it('data should be null', () => {
            const dataRenderer: IDataRenderer<unknown> = new DataRenderer();
            assert.isNull(dataRenderer.data);
        });
    });
    describe('data property', () => {
        it('given data is null, when data = ' + positiveRandom + ', data should be ' + positiveRandom, () => {
            const dataRenderer: IDataRenderer<number> = new DataRenderer();
            dataRenderer.data = positiveRandom;
            assert.strictEqual(dataRenderer.data, positiveRandom);
        });
        it('given data is ' + positiveRandom + ', when data = ' + positiveRandom + ', data should be ' + positiveRandom, () => {
            const dataRenderer: IDataRenderer<number> = new DataRenderer();
            dataRenderer.data = positiveRandom;
            dataRenderer.data = positiveRandom;
            assert.strictEqual(dataRenderer.data, positiveRandom);
        });
    });
});
