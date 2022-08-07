import ISVG from './ISVG';

export default interface ISVGPath extends ISVG {
    d: string;
    fill: string;
    stroke: string;
    strokeWidth: number;
}
