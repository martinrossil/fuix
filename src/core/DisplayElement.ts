import { Display } from '..';
import { Overflow } from '../consts/Overflow';
import { DisplayType } from '../types/DisplayType';
import { OverflowType } from '../types/OverflowType';
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

    private _overflow: OverflowType = Overflow.VISIBLE;
    public set overflow(value: OverflowType) {
        if (this._overflow === value) {
            return;
        }
        this._overflow = value;
        this.style.overflow = value;
    }

    /**
     * The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow} for syntax
     */
    public get overflow(): OverflowType {
        return this._overflow;
    }

    private _borderRadius = 0;
    public set borderRadius(value: number) {
        if (isNaN(value) || value < 0) {
            this._borderRadius = 0;
            this.style.borderRadius = '0px';
            return;
        }
        this._borderRadius = value;
        this.style.borderRadius = value + 'px';
    }

    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius} for syntax
     */
    public get borderRadius(): number {
        return this._borderRadius;
    }
}
customElements.define('display-element', DisplayElement);
