import Container from '../core/Container';
import IDataRenderer from './IDataRenderer';

export default class DataRenderer<Item> extends Container implements IDataRenderer<Item> {
    protected dataChanged(): void {
        // override
    }

    #data: Item | null = null;

    public set data(value: Item | null) {
        if (this.#data === value) {
            return;
        }
        this.#data = value;
        this.dataChanged();
    }

    public get data(): Item | null {
        return this.#data;
    }
}
customElements.define('fx-data-renderer', DataRenderer);
