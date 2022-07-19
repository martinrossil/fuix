import { assert } from 'chai';
import DataContainer from '../../src/components/DataContainer';
import IDataContainer from '../../src/components/IDataContainer';

describe('IDataContainer', () => {
    describe('default values', () => {
        it('dataProvider should be null', () => {
            const dataContainer: IDataContainer<string> = new DataContainer();
            assert.isNull(dataContainer.dataProvider);
        });
    });
});
