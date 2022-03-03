import IEventDispatcher from '../event/IEventDispatcher';

export default interface IMouseTouch extends IEventDispatcher {
    initial(e: Event): void;
    hover(): void;
    pressed(x: number, y: number): void;
    clicked(): void;
    getBoundingClientRect(): DOMRect;
}
