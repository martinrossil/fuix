import { assert } from 'chai';
import DataContainer from './DataContainer';
import IDataContainer from './IDataContainer';

describe('IDataContainer', () => {
    describe('default values', () => {
        it('dataProvider should be null', () => {
            const dataContainer: IDataContainer<string> = new DataContainer();
            assert.isNull(dataContainer.dataProvider);
        });
    });
});
