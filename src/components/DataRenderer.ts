import Container from '../core/Container';
import IDataRenderer from './IDataRenderer';

export default class DataRenderer<Item> extends Container implements IDataRenderer<Item> {
    protected dataChanged(): void {
        // override
    }

    private _data: Item | null = null;

    public set data(value: Item | null) {
        if (this._data === value) {
            return;
        }
        this._data = value;
        this.dataChanged();
    }

    public get data(): Item | null {
        return this._data;
    }
}
