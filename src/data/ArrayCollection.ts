import IArrayCollection from './IArrayCollection';

/**
 * @fires ArrayCollection.ITEM_ADDED
 * @fires ArrayCollection.ITEMS_ADDED
 * @fires ArrayCollection.ITEM_REMOVED
 * @fires ArrayCollection.RESET
 */
export default class ArrayCollection<Item> extends EventTarget implements IArrayCollection<Item> {
    /**
     * Is dispatched when a Item was added to the collection.
     * @event ITEM_ADDED
     * @property {Item} detail - The item that was added.
     */
    public static ITEM_ADDED = 'itemAdded';

    /**
     * Is dispatched when an Array of Items was added to the collection.
     *
     * @event ITEMS_ADDED
     * @property {Array} detail - An Array with the items that was added.
     */
    public static ITEMS_ADDED = 'itemsAdded';

    /**
     * Is dispatched when an Item was removed from the collection.
     *
     * @event ITEM_REMOVED
     * @property {Item} detail - The item that was removed.
     */
    public static ITEM_REMOVED = 'itemRemoved';

    /**
     * Is dispatched when the Array source has been replaced or cleared completely.
     *
     * @event RESET
     */
    public static RESET = 'reset';

    public constructor(source: Array<Item> | null = null) {
        super();
        if (source) {
            this._source = source;
            return;
        }
        this._source = [];
    }

    /**
     * @fires ArrayCollection.ITEM_ADDED
     */
    public addItem(item: Item): void {
        this.source.push(item);
        this.dispatchEvent(new CustomEvent(ArrayCollection.ITEM_ADDED, { detail: item }));
    }

    /**
     * @fires ArrayCollection.ITEMS_ADDED
     */
    public addItems(items: Array<Item>): void {
        this._source = this.source.concat(items);
        this.dispatchEvent(new CustomEvent(ArrayCollection.ITEMS_ADDED, { detail: items }));
    }

    public getItemIndex(item: Item): number {
        const index = this.source.indexOf(item);
        if (index === -1) {
            return NaN;
        }
        return index;
    }

    public getItemAt(index: number): Item | null {
        if (Number.isNaN(index) || index < 0) {
            return null;
        }
        if (index < this.source.length) {
            return this.source[index];
        }
        return null;
    }

    /**
     * @fires ArrayCollection.ITEM_REMOVED
     */
    public removeItem(item: Item): void {
        const index = this.source.indexOf(item);
        if (index > -1) {
            this.source.splice(index, 1);
            this.dispatchEvent(new CustomEvent(ArrayCollection.ITEM_REMOVED, { detail: item }));
        }
    }

    /**
     * @fires ArrayCollection.ITEM_REMOVED
     */
    public removeItemAt(index: number): void {
        const item = this.getItemAt(index);
        if (item) {
            this.source.splice(index, 1);
            this.dispatchEvent(new CustomEvent(ArrayCollection.ITEM_REMOVED, { detail: item }));
        }
    }

    /**
     * @fires ArrayCollection.RESET
     */
    public removeAll(): void {
        if (this.length > 0) {
            this.source.length = 0;
            this.dispatchEvent(new CustomEvent(ArrayCollection.RESET));
        }
    }

    public get length(): number {
        return this.source.length;
    }

    private _source: Array<Item>;

    public get source(): Array<Item> {
        return this._source;
    }
}
