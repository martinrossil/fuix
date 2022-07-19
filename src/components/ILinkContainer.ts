import IContainer from '../core/IContainer';
import { Target } from '../types/Target';

export default interface ILinkContainer extends IContainer {
    href: string;
    target: Target;
    readonly anchor: HTMLAnchorElement;
}
