import Application from './core/Application';
import ISVGPath from './svg/ISVGPath';
import ISVGRectangle from './svg/ISVGRectangle';
import SVGPath from './svg/SVGPath';
import SVGRectangle from './svg/SVGRectangle';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.display = 'flex';
        this.alignItems = 'center';
        this.justifyContent = 'center';

        this.addComponent(this.svgPath);
    }

    private _svgPath!: ISVGPath;

    private get svgPath(): ISVGPath {
        if (!this._svgPath) {
            this._svgPath = new SVGPath();
            this._svgPath.width = 200;
            this._svgPath.height = 200;
            this._svgPath.stroke = '#000';
            this._svgPath.fill = 'red';
            this._svgPath.strokeWidth = 2;
            this._svgPath.viewBox = '0 0 24 24';
            // this._svgPath.strokeOpacity = 0.5;
            this._svgPath.strokeLineCap = 'round';
            this._svgPath.d = 'M6 11h4M8 9v4m7-1h.01M18 10h.01m-7.561-5h3.102c2.625 0 3.937 0 4.967.497a5 5 0 0 1 2.162 2.014c.57.992.664 2.3.85 4.919l.247 3.444a2.918 2.918 0 0 1-5.152 2.076l-.375-.45c-.343-.412-.515-.618-.71-.784a3 3 0 0 0-1.436-.672C13.851 16 13.584 16 13.047 16h-2.095c-.536 0-.804 0-1.056.044a3 3 0 0 0-1.436.672c-.195.166-.367.372-.71.784l-.375.45a2.918 2.918 0 0 1-5.152-2.075l.246-3.445c.187-2.618.28-3.927.85-4.92a5 5 0 0 1 2.162-2.013C6.511 5 7.824 5 10.45 5Z';
        }
        return this._svgPath;
    }

    private _svgRectangle!: ISVGRectangle;

    private get svgRectangle(): ISVGRectangle {
        if (!this._svgRectangle) {
            this._svgRectangle = new SVGRectangle();
            this._svgRectangle.width = 300;
            this._svgRectangle.height = 300;
            this._svgRectangle.fill = 'blue';
            this._svgRectangle.rx = 50;
            this._svgRectangle.ry = 50;
            this._svgRectangle.stroke = '#CC0000';
            this._svgRectangle.strokeWidth = 30;
            // this._svgRectangle.strokeOpacity = 0.5;
            this._svgRectangle.fillOpacity = 0.5;
        }
        return this._svgRectangle;
    }
}
customElements.define('fuix-dev', FuixDev);
