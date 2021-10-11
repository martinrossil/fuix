import PositionElementInterface from './PositionElementInterface';

export default class PositionElement extends HTMLElement implements PositionElementInterface {
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
}
customElements.define('position-element', PositionElement);