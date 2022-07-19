/* eslint-disable @typescript-eslint/no-unused-vars */
import IMouseTouch from './IMouseTouch';

export default class MouseTouch extends HTMLElement implements IMouseTouch {
    public constructor() {
        super();
    }

    public initial(e: Event): void {

    }

    hover(): void {

    }

    pressed(x: number, y: number): void {

    }

    clicked(): void {

    }
}
customElements.define('fx-mouse-touch', MouseTouch);
