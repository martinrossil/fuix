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

    get position(): PositionType {
        return this._position;
    }

    private _left = NaN;
    set left(value: number) {
        if (isNaN(this._left) && isNaN(value)) {
            return;
        }
        if (this._left === value) {
            return;
        }
        this._left = value;
        if (!isNaN(value)) {
            this.style.left = value + 'px';
            return;
        }
        this.style.left = '';
    }

    get left(): number {
        return this._left;
    }

    private _top = NaN;
    set top(value: number) {
        if (isNaN(this._top) && isNaN(value)) {
            return;
        }
        if (this._top === value) {
            return;
        }
        this._top = value;
        if (!isNaN(value)) {
            this.style.top = value + 'px';
            return;
        }
        this.style.top = '';
    }

    get top(): number {
        return this._top;
    }

    private _right = NaN;
    set right(value: number) {
        if (isNaN(this._right) && isNaN(value)) {
            return;
        }
        if (this._right === value) {
            return;
        }
        this._right = value;
        if (!isNaN(value)) {
            this.style.right = value + 'px';
            return;
        }
        this.style.right = '';
    }

    get right(): number {
        return this._right;
    }

    private _bottom = NaN;
    set bottom(value: number) {
        if (isNaN(this._bottom) && isNaN(value)) {
            return;
        }
        if (this._bottom === value) {
            return;
        }
        this._bottom = value;
        if (!isNaN(value)) {
            this.style.bottom = value + 'px';
            return;
        }
        this.style.bottom = '';
    }

    get bottom(): number {
        return this._bottom;
    }
}
customElements.define('position-element', PositionElement);
