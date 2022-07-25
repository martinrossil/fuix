import Component from '../core/Component';
import ISVG from './ISVG';

export default class SVG extends Component implements ISVG {
    public constructor() {
        super();
        this.appendChild(this.svg);
    }

    private _viewBox: string = '';

    public set viewBox(value: string) {
        this._viewBox = value;
        this.svg.setAttribute('viewBox', value);
    }

    public get viewBox(): string {
        return this._viewBox;
    }

    private _svg!: SVGSVGElement;

    protected get svg(): SVGSVGElement {
        if (!this._svg) {
            this._svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this._svg.style.position = 'absolute';
            this._svg.style.overflow = 'visible';
            this._svg.setAttribute('fill', 'none');
            this._svg.setAttribute('width', '100%');
            this._svg.setAttribute('height', '100%');
            this._svg.setAttribute('preserveAspectRatio', 'none');
        }
        return this._svg;
    }
}
customElements.define('fx-svg', SVG);
