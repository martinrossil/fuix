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
        this._path.setAttribute('fill', value);
    }

    public get fill(): string {
        return this._fill;
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

    private _path!: SVGPathElement;

    private get path(): SVGPathElement {
        if (!this._path) {
            this._path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        }
        return this._path;
    }
}
customElements.define('fx-svg-path', SVGPath);
