import { StrokeLineCap } from '../types/StrokeLineCap';
import { StrokeLineJoin } from '../types/StrokeLineJoin';
import ISVG from './ISVG';

export default interface ISVGPath extends ISVG {
    d: string;
    fill: string;
    fillOpacity: number;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
    strokeLineCap: StrokeLineCap;
    strokeLineJoin: StrokeLineJoin;
}
