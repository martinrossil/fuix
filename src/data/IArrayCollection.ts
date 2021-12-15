import IEventDispatcher from '../event/IEventDispatcher';

export default interface IArrayCollection<Item> extends IEventDispatcher {
    addItem(item: Item): void;
    addItems(items: Array<Item>): void;
    getItemIndex(item: Item): number;
    getItemAt(index: number): Item | null;
    removeItem(item: Item): void;
    removeItemAt(index: number): void;
    removeAll(): void;
    readonly source: Array<Item>;
    readonly length: number;
}
