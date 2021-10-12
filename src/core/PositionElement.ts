import BaseElement from './BaseElement';
import PositionElementInterface from './PositionElementInterface';

export default class PositionElement extends BaseElement implements PositionElementInterface {
    public constructor() {
        super();
    }

    private _left: number = NaN;
    set left(value: number) {
        if (isNaN(this._left) && isNaN(value)) {
            return;
        }
        if (this._left === value) {
            return;
        }
        this._left = value;
        this.style.left = value + 'px';
    }
    get left() {
        return this._left;
    }

    private _top: number = NaN;
    set top(value: number) {
        if (isNaN(this._top) && isNaN(value)) {
            return;
        }
        if (this._top === value) {
            return;
        }
        this._top = value;
        this.style.top = value + 'px';
    }
    get top() {
        return this._top;
    }

    private _right: number = NaN;
    set right(value: number) {
        if (isNaN(this._right) && isNaN(value)) {
            return;
        }
        if (this._right === value) {
            return;
        }
        this._right = value;
        this.style.right = value + 'px';
    }
    get right() {
        return this._right;
    }

    private _bottom: number = NaN;
    set bottom(value: number) {
        if (isNaN(this._bottom) && isNaN(value)) {
            return;
        }
        if (this._bottom === value) {
            return;
        }
        this._bottom = value;
        this.style.bottom = value + 'px';
    }
    get bottom() {
        return this._bottom;
    }
}
customElements.define('position-element', PositionElement);