export default class ArrayCollectionEvent<Item> extends Event {
    public static ITEM_ADDED = 'itemAdded';
    public static ITEMS_ADDED = 'itemsAdded';
    public static ITEM_REMOVED = 'itemRemoved';
    public static RESET = 'reset';

    public item: Item | null;
    public items: Array<Item>;

    public constructor(type: string, item: Item | null = null, items: Array<Item> = []) {
        super(type)
        this.item = item;
        this.items = items;
    }
}
