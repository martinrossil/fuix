import ISVG from './ISVG';

export default interface IPath extends ISVG {
    d: string;
    fill: string;
    stroke: string;
    strokeWidth: number;
}
