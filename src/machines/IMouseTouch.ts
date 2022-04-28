export default interface IMouseTouch extends EventTarget {
    initial(e: Event): void;
    hover(): void;
    pressed(x: number, y: number): void;
    clicked(): void;
    getBoundingClientRect(): DOMRect;
}
