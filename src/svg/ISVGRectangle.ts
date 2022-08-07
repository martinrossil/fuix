import ISVG from './ISVG';

export default interface ISVGRectangle extends ISVG {
    rx: number;
    ry: number;
    fill: string;
    fillOpacity: number;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
}
