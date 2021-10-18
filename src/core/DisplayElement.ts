import { Display } from '..';
import { DisplayType } from '../types/DisplayType';
import IDisplayElement from './IDisplayElement';
import SizeElement from './SizeElement';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    private _display: DisplayType = Display.INLINE;
    public set display(value: DisplayType) {
        if (this._display === value) {
            return;
        }
        this._display = value;
        this.style.display = value;
    }

    /**
     * The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
     * Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display} for syntax
     */
    public get display(): DisplayType {
        return this._display;
    }
}
customElements.define('display-element', DisplayElement);
