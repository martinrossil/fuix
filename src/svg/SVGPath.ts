import { StrokeLineCap } from '../types/StrokeLinecap';
import { StrokeLineJoin } from '../types/StrokeLineJoin';
import ISVGPath from './ISVGPath';
import SVG from './SVG';

export default class SVGPath extends SVG implements ISVGPath {
    public constructor() {
        super();
        this.svg.appendChild(this.path);
    }

    private _d: string = '';

    public set d(value: string) {
        this._d = value;
        this.path.setAttribute('d', value);
    }

    public get d(): string {
        return this._d;
    }

    private _fill: string = '';

    public set fill(value: string) {
        this._fill = value;
        this.path.setAttribute('fill', value);
    }

    public get fill(): string {
        return this._fill;
    }

    private _fillOpacity: number = 1;

    public set fillOpacity(value: number) {
        this._fillOpacity = value;
        this.path.setAttribute('fill-opacity', value.toString());
    }

    public get fillOpacity(): number {
        return this._fillOpacity;
    }

    private _stroke: string = '';

    public set stroke(value: string) {
        this._stroke = value;
        this.path.setAttribute('stroke', value);
    }

    public get stroke(): string {
        return this._stroke;
    }

    private _strokeWidth: number = NaN;

    public set strokeWidth(value: number) {
        this._strokeWidth = value;
        this.path.setAttribute('stroke-width', value.toString());
    }

    public get strokeWidth(): number {
        return this._strokeWidth;
    }

    private _strokeOpacity: number = 1;

    public set strokeOpacity(value: number) {
        this._strokeOpacity = value;
        this.path.setAttribute('stroke-opacity', value.toString());
    }

    public get strokeOpacity(): number {
        return this._strokeOpacity;
    }

    private _strokeLineCap: StrokeLineCap = 'butt';

    public set strokeLineCap(value: StrokeLineCap) {
        this._strokeLineCap = value;
        this.path.setAttribute('stroke-linecap', value);
    }

    public get strokeLineCap(): StrokeLineCap {
        return this._strokeLineCap;
    }

    private _strokeLineJoin: StrokeLineJoin = 'miter';

    public set strokeLineJoin(value: StrokeLineJoin) {
        this._strokeLineJoin = value;
        this.path.setAttribute('stroke-linejoin', value);
    }

    public get strokeLineJoin(): StrokeLineJoin {
        return this._strokeLineJoin;
    }

    private _path!: SVGPathElement;

    private get path(): SVGPathElement {
        if (!this._path) {
            this._path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        }
        return this._path;
    }
}
customElements.define('fx-svg-path', SVGPath);
