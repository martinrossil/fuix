import ISVGRectangle from './ISVGRectangle';
import SVG from './SVG';

export default class SVGRectangle extends SVG implements ISVGRectangle {
    public constructor() {
        super();
        this.svg.appendChild(this.rect);
    }

    private _rx = 0;

    public set rx(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this._rx = 0;
            this.rect.setAttribute('rx', value.toString());
            return;
        }
        this._rx = value;
        this.rect.setAttribute('rx', value.toString());
    }

    public get rx(): number {
        return this._rx;
    }

    private _ry = 0;

    public set ry(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this._ry = 0;
            this.rect.setAttribute('ry', value.toString());
            return;
        }
        this._ry = value;
        this.rect.setAttribute('ry', value.toString());
    }

    public get ry(): number {
        return this._ry;
    }

    private _fill: string = '';

    public set fill(value: string) {
        this._fill = value;
        this.rect.setAttribute('fill', value);
    }

    public get fill(): string {
        return this._fill;
    }

    private _fillOpacity: number = 1;

    public set fillOpacity(value: number) {
        this._fillOpacity = value;
        this.rect.setAttribute('fill-opacity', value.toString());
    }

    public get fillOpacity(): number {
        return this._fillOpacity;
    }

    private _stroke: string = '';

    public set stroke(value: string) {
        this._stroke = value;
        this.rect.setAttribute('stroke', value);
    }

    public get stroke(): string {
        return this._stroke;
    }

    private _strokeWidth: number = NaN;

    public set strokeWidth(value: number) {
        this._strokeWidth = value;
        this.rect.setAttribute('stroke-width', value.toString());
    }

    public get strokeWidth(): number {
        return this._strokeWidth;
    }

    private _strokeOpacity: number = 1;

    public set strokeOpacity(value: number) {
        this._strokeOpacity = value;
        this.rect.setAttribute('stroke-opacity', value.toString());
    }

    public get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    private _rect!: SVGRectElement;

    private get rect(): SVGRectElement {
        if (!this._rect) {
            this._rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            this._rect.setAttribute('width', '100%');
            this._rect.setAttribute('height', '100%');
        }
        return this._rect;
    }
}
customElements.define('fx-svg-rect', SVGRectangle);
