/* eslint-disable @typescript-eslint/no-unused-vars */
import IMouseTouch from './IMouseTouch';

export default class MouseTouch extends HTMLElement implements IMouseTouch {
    public constructor() {
        super();
    }

    public initial(e: Event): void {

    }

    public hover(): void {

    }

    public pressed(x: number, y: number): void {

    }

    public clicked(): void {

    }
}
customElements.define('fx-mouse-touch', MouseTouch);
