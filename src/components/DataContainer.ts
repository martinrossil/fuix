import Container from '../core/Container';
import ArrayCollectionEvent from '../data/ArrayCollectionEvent';
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

    protected itemAdded(e: ArrayCollectionEvent<Item>): void {
        let dataRenderer: IDataRenderer<Item>
        if (this.dataRendererCache.length) {
            dataRenderer = this.dataRendererCache.splice(0, 1)[0];
        } else {
            dataRenderer = new this.DataRendererClass();
        }
        dataRenderer.data = e.item;
        if (e.item) {
            this.listDataRendererLookup.set(e.item, dataRenderer);
        }
        this.addComponent(dataRenderer);
    }

    protected itemsAdded(e: ArrayCollectionEvent<Item>): void {
        this.addDataRenderers(e.items);
    }

    protected addDataRenderers(items: Array<Item>): void {
        const listDataRenderers: Array<IDataRenderer<Item>> = [];
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

    protected itemRemoved(e: ArrayCollectionEvent<Item>): void {
        if (e.item) {
            const dataRenderer: IDataRenderer<Item> | undefined = this.listDataRendererLookup.get(e.item);
            if (dataRenderer) {
                dataRenderer.data = null;
                this.dataRendererCache.push(dataRenderer);
                this.removeComponent(dataRenderer);
            }
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
            this._dataProvider.removeEventListener(ArrayCollectionEvent.ITEM_ADDED, this.itemAdded as EventListener);
            this._dataProvider.removeEventListener(ArrayCollectionEvent.ITEMS_ADDED, this.itemsAdded as EventListener);
            this._dataProvider.removeEventListener(ArrayCollectionEvent.ITEM_REMOVED, this.itemRemoved as EventListener);
            this._dataProvider.removeEventListener(ArrayCollectionEvent.RESET, this.reset);
        }
        this._dataProvider = value;
        if (this._dataProvider) {
            this._dataProvider.addEventListener(ArrayCollectionEvent.ITEM_ADDED, this.itemAdded as EventListener);
            this._dataProvider.addEventListener(ArrayCollectionEvent.ITEMS_ADDED, this.itemsAdded as EventListener);
            this._dataProvider.addEventListener(ArrayCollectionEvent.ITEM_REMOVED, this.itemRemoved as EventListener);
            this._dataProvider.addEventListener(ArrayCollectionEvent.RESET, this.reset);
        }
        this.reset();
    }

    public get dataProvider(): IArrayCollection<Item> | null {
        return this._dataProvider;
    }
}
customElements.define('fx-data-container', DataContainer);
