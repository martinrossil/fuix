import { Position } from '../consts/Position';
import { PositionType } from '../types/PositionType';
import IPositionElement from './IPositionElement';

export default class PositionElement extends HTMLElement implements IPositionElement {
    private _position: PositionType = Position.STATIC;
    set position(value: PositionType) {
        if (this._position === value) {
            return;
        }
        this._position = value;
        this.style.position = value;
    }

    /**
     * The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/position} for syntax
     */
    get position(): PositionType {
        return this._position;
    }

    private _left = NaN;
    set left(value: number) {
        this._left = value;
        if (!isNaN(value)) {
            this.style.left = value + 'px';
            return;
        }
        this.style.left = '';
    }

    /**
     * The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/left} for syntax
     */
    get left(): number {
        return this._left;
    }

    private _top = NaN;
    set top(value: number) {
        this._top = value;
        if (!isNaN(value)) {
            this.style.top = value + 'px';
            return;
        }
        this.style.top = '';
    }

    /**
     * The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/top} for syntax
     */
    get top(): number {
        return this._top;
    }

    private _right = NaN;
    set right(value: number) {
        this._right = value;
        if (!isNaN(value)) {
            this.style.right = value + 'px';
            return;
        }
        this.style.right = '';
    }

    /**
     * The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/right} for syntax
     */
    get right(): number {
        return this._right;
    }

    private _bottom = NaN;
    set bottom(value: number) {
        this._bottom = value;
        if (!isNaN(value)) {
            this.style.bottom = value + 'px';
            return;
        }
        this.style.bottom = '';
    }

    /**
     * The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/bottom} for syntax
     */
    get bottom(): number {
        return this._bottom;
    }
}
customElements.define('position-element', PositionElement);
