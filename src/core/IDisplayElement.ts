import { DisplayType } from '../types/DisplayType';
import { OverflowType } from '../types/OverflowType';
import ISizeElement from './ISizeElement';

export default interface IDisplayElement extends ISizeElement {
    /**
     * The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
     * Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display} for syntax
     */
    display: DisplayType;

    /**
     * The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow} for syntax
     */
    overflow: OverflowType;

    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius} for syntax
     */
    borderRadius: number;
}
