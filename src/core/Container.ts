import Component from './Component';
import IContainer from './IContainer';

export default class Container extends Component implements IContainer {
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
customElements.define('fx-container', Container);
