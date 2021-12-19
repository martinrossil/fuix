import Container from '../core/Container';
import IArrayCollection from '../data/IArrayCollection';
import DataRenderer from './DataRenderer';
import IDataContainer from './IDataContainer';
import IDataRenderer from './IDataRenderer';

export default class DataContainer<Item> extends Container implements IDataContainer<Item> {
    private dataRendererCache: Array<IDataRenderer<Item>> = [];
    private listDataRendererLookup: Map<Item, IDataRenderer<Item> | undefined> = new Map();
    public constructor() {
        super();
        this.itemAdded = this.itemAdded.bind(this);
        this.itemsAdded = this.itemsAdded.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.reset = this.reset.bind(this);
    }

    protected itemAdded(e: CustomEvent<Item>): void {
        let dataRenderer: IDataRenderer<Item>
        if (this.dataRendererCache.length) {
            dataRenderer = this.dataRendererCache.splice(0, 1)[0];
        } else {
            dataRenderer = new this.DataRendererClass();
        }
        dataRenderer.data = e.detail;
        this.listDataRendererLookup.set(e.detail, dataRenderer);
        this.addComponent(dataRenderer);
    }

    protected itemsAdded(e: CustomEvent<Item[]>): void {
        this.addDataRenderers(e.detail);
    }

    protected addDataRenderers(items: Item[]): void {
        const listDataRenderers: IDataRenderer<Item>[] = [];
        for (const item of items) {
            let listDataRenderer: IDataRenderer<Item>;
            if (this.dataRendererCache.length) {
                listDataRenderer = this.dataRendererCache.splice(0, 1)[0];
            } else {
                listDataRenderer = new this.DataRendererClass();
            }
            listDataRenderer.data = item;
            this.listDataRendererLookup.set(item, listDataRenderer);
            listDataRenderers.push(listDataRenderer);
        }
        this.addComponents(listDataRenderers);
    }

    protected itemRemoved(e: CustomEvent<Item>): void {
        const dataRenderer: IDataRenderer<Item> | undefined = this.listDataRendererLookup.get(e.detail);
        if (dataRenderer) {
            dataRenderer.data = null;
            this.dataRendererCache.push(dataRenderer);
            this.removeComponent(dataRenderer);
        }
    }

    protected reset(): void {
        this.listDataRendererLookup.forEach((dataRenderer) => {
            if (dataRenderer) {
                dataRenderer.data = null;
                this.dataRendererCache.push(dataRenderer);
            }
        });
        this.removeAllComponents();
        this.listDataRendererLookup.clear();
        if (this.dataProvider) {
            this.addDataRenderers(this.dataProvider.source);
        }
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
        if (this._dataProvider === value) {
            return;
        }
        if (this._dataProvider) {
            this._dataProvider.removeCustomEventListener('itemAdded', this.itemAdded);
            this._dataProvider.removeCustomEventListener('itemsAdded', this.itemsAdded);
            this._dataProvider.removeCustomEventListener('itemRemoved', this.itemRemoved);
            this._dataProvider.removeCustomEventListener('reset', this.reset);
        }
        this._dataProvider = value;
        if (this._dataProvider) {
            this._dataProvider.addCustomEventListener('itemAdded', this.itemAdded);
            this._dataProvider.addCustomEventListener('itemsAdded', this.itemsAdded);
            this._dataProvider.addCustomEventListener('itemRemoved', this.itemRemoved);
            this._dataProvider.addCustomEventListener('reset', this.reset);
        }
        this.reset();
    }

    public get dataProvider(): IArrayCollection<Item> | null {
        return this._dataProvider;
    }
}
customElements.define('fx-data-container', DataContainer);
