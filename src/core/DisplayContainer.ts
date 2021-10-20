import DisplayElement from './DisplayElement';
import IDisplayContainer from './IDisplayContainer';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    private _padding = 0;
    public set padding(value: number) {
        if (isNaN(value) || value <= 0) {
            this._padding = 0;
            this.style.padding = '';
            return;
        }
        this._padding = value;
        this.style.padding = value + 'px';
    }

    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    public get padding(): number {
        return this._padding;
    }
}
customElements.define('display-container', DisplayContainer);
