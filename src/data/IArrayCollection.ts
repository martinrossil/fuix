import IEventDispatcher from '../event/IEventDispatcher';

export default interface IArrayCollection<Item> extends IEventDispatcher {
    addItem(item: Item): void;
    addItems(items: Item[]): void;
    getItemIndex(item: Item): number;
    getItemAt(index: number): Item | null;
    removeItem(item: Item): void;
    removeItemAt(index: number): void;
    removeAll(): void;
    readonly source: Item[];
    readonly length: number;
}
