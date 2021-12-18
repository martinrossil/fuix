export default interface IEventListener<Item> {
    (event: CustomEvent<Item>): void;
}
