import Container from '../core/Container';
import ArrayCollection from '../data/ArrayCollection';
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
        let dataRenderer: IDataRenderer<Item>;
        if (this.dataRendererCache.length) {
            [dataRenderer] = this.dataRendererCache.splice(0, 1);
        } else {
            dataRenderer = new this.DataRendererClass();
        }
        dataRenderer.data = e.detail;
        if (e.detail) {
            this.listDataRendererLookup.set(e.detail, dataRenderer);
        }
        this.addComponent(dataRenderer);
    }

    protected itemsAdded(e: CustomEvent<Array<Item>>): void {
        this.addDataRenderers(e.detail);
    }

    protected addDataRenderers(items: Array<Item>): void {
        const listDataRenderers: Array<IDataRenderer<Item>> = [];
        items.forEach((item) => {
            let listDataRenderer: IDataRenderer<Item>;
            if (this.dataRendererCache.length) {
                [listDataRenderer] = this.dataRendererCache.splice(0, 1);
            } else {
                listDataRenderer = new this.DataRendererClass();
            }
            listDataRenderer.data = item;
            this.listDataRendererLookup.set(item, listDataRenderer);
            listDataRenderers.push(listDataRenderer);
        });
        this.addComponents(listDataRenderers);
    }

    protected itemRemoved(e: CustomEvent<Item>): void {
        if (e.detail) {
            const dataRenderer: IDataRenderer<Item> | undefined = this.listDataRendererLookup.get(e.detail);
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

    #DataRendererClass!: new () => IDataRenderer<Item>;

    public set DataRendererClass(value: new () => IDataRenderer<Item>) {
        if (this.#DataRendererClass === value) {
            return;
        }
        this.#DataRendererClass = value;
        this.reset();
    }

    public get DataRendererClass(): new () => IDataRenderer<Item> {
        if (!this.#DataRendererClass) {
            this.#DataRendererClass = DataRenderer;
        }
        return this.#DataRendererClass;
    }

    #dataProvider: IArrayCollection<Item> | null = null;

    public set dataProvider(value: IArrayCollection<Item> | null) {
        if (this.#dataProvider === value) {
            return;
        }
        if (this.#dataProvider) {
            this.#dataProvider.removeEventListener(ArrayCollection.ITEM_ADDED, this.itemAdded as EventListener);
            this.#dataProvider.removeEventListener(ArrayCollection.ITEMS_ADDED, this.itemsAdded as EventListener);
            this.#dataProvider.removeEventListener(ArrayCollection.ITEM_REMOVED, this.itemRemoved as EventListener);
            this.#dataProvider.removeEventListener(ArrayCollection.RESET, this.reset);
        }
        this.#dataProvider = value;
        if (this.#dataProvider) {
            this.#dataProvider.addEventListener(ArrayCollection.ITEM_ADDED, this.itemAdded as EventListener);
            this.#dataProvider.addEventListener(ArrayCollection.ITEMS_ADDED, this.itemsAdded as EventListener);
            this.#dataProvider.addEventListener(ArrayCollection.ITEM_REMOVED, this.itemRemoved as EventListener);
            this.#dataProvider.addEventListener(ArrayCollection.RESET, this.reset);
        }
        this.reset();
    }

    public get dataProvider(): IArrayCollection<Item> | null {
        return this.#dataProvider;
    }
}
customElements.define('fx-data-container', DataContainer);
