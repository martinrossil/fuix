import Container from '../core/Container';
import IArrayCollection from '../data/IArrayCollection';
import DataRenderer from './DataRenderer';
import IDataContainer from './IDataContainer';
import IDataRenderer from './IDataRenderer';

export default class DataContainer<Item> extends Container implements IDataContainer<Item> {
    private reset(): void {
        // implement
    }

    private _DataRendererClass!: new () => IDataRenderer<Item>;

    public set DataRendererClass(value: new () => IDataRenderer<Item>) {
        if (this._DataRendererClass === value) {
            return;
        }
        this._DataRendererClass = value;
        this.reset();
    }

    public get DataRendererClass(): new () => IDataRenderer<Item> {
        if (!this._DataRendererClass) {
            this._DataRendererClass = DataRenderer;
        }
        return this._DataRendererClass;
    }

    private _dataProvider: IArrayCollection<Item> | null = null;

    public set dataProvider(value: IArrayCollection<Item> | null) {
        // implement
    }

    public get dataProvider(): IArrayCollection<Item> | null {
        return this._dataProvider;
    }
}
