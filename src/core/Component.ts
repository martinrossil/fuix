import { Position } from '../types/Position';
import { Display } from '../types/Display';
import { Overflow } from '../types/Overflow';
import IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
    #width = NaN;

    set width(value: number) {
        if (value < 0) {
            this.#width = 0;
            this.style.width = '0px';
            return;
        }
        this.#width = value;
        if (!Number.isNaN(value)) {
            this.style.width = value + 'px';
            return;
        }
        this.style.width = '';
    }

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    get width(): number {
        return this.#width;
    }

    #height = NaN;

    set height(value: number) {
        if (value < 0) {
            this.#height = 0;
            this.style.height = '0px';
            return;
        }
        this.#height = value;
        if (!Number.isNaN(value)) {
            this.style.height = value + 'px';
            return;
        }
        this.style.height = '';
    }

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    get height(): number {
        return this.#height;
    }

    #widthPercent = NaN;

    set widthPercent(value: number) {
        if (value < 0) {
            this.#widthPercent = 0;
            return;
        }
        this.#widthPercent = value;
        if (!Number.isNaN(value)) {
            this.style.width = value + '%';
            return;
        }
        this.style.width = '';
    }

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    get widthPercent(): number {
        return this.#widthPercent;
    }

    #heightPercent = NaN;

    set heightPercent(value: number) {
        if (value < 0) {
            this.#heightPercent = 0;
            return;
        }
        this.#heightPercent = value;
        if (!Number.isNaN(value)) {
            this.style.height = value + '%';
            return;
        }
        this.style.height = '';
    }

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    get heightPercent(): number {
        return this.#heightPercent;
    }

    #minWidth = NaN;

    public set minWidth(value: number) {
        if (value < 0) {
            this.#minWidth = 0;
            this.style.minWidth = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#minWidth = value;
            this.style.minWidth = value + 'px';
            return;
        }
        this.style.minWidth = '';
    }

    /**
     * The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     * The element's width is set to the value of min-width whenever min-width is larger than max-width or width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width} for syntax
     */
    public get minWidth(): number {
        return this.#minWidth;
    }

    #maxWidth = NaN;

    public set maxWidth(value: number) {
        if (value < 0) {
            this.#maxWidth = 0;
            this.style.maxWidth = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#maxWidth = value;
            this.style.maxWidth = value + 'px';
            return;
        }
        this.style.maxWidth = '';
    }

    /**
     * The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
     * max-width overrides width, but min-width overrides max-width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width} for syntax
     */
    public get maxWidth(): number {
        return this.#maxWidth;
    }

    #minHeight = NaN;

    public set minHeight(value: number) {
        if (value < 0) {
            this.#minHeight = 0;
            this.style.minHeight = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#minHeight = value;
            this.style.minHeight = value + 'px';
            return;
        }
        this.style.minHeight = '';
    }

    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
     * The element's height is set to the value of min-height whenever min-height is larger than max-height or height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height} for syntax
     */
    public get minHeight(): number {
        return this.#minHeight;
    }

    #maxHeight = NaN;

    public set maxHeight(value: number) {
        if (value < 0) {
            this.#maxHeight = 0;
            this.style.maxHeight = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#maxHeight = value;
            this.style.maxHeight = value + 'px';
            return;
        }
        this.style.maxHeight = '';
    }

    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
     * max-height overrides height, but min-height overrides max-height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height} for syntax
     */
    public get maxHeight(): number {
        return this.#maxHeight;
    }

    #display: Display = 'inline';

    public set display(value: Display) {
        if (this.#display === value) {
            return;
        }
        this.#display = value;
        this.style.display = value;
    }

    /**
     * The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
     *
     * Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display} for syntax
     */
    public get display(): Display {
        return this.#display;
    }

    #overflow: Overflow = 'visible';

    public set overflow(value: Overflow) {
        if (this.#overflow === value) {
            return;
        }
        this.#overflow = value;
        this.style.overflow = value;
    }

    /**
     * The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow} for syntax
     */
    public get overflow(): Overflow {
        return this.#overflow;
    }

    #borderRadius = 0;

    public set borderRadius(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this.#borderRadius = 0;
            this.style.borderRadius = '';
            return;
        }
        this.#borderRadius = value;
        this.style.borderRadius = value + 'px';
    }

    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius} for syntax
     */
    public get borderRadius(): number {
        return this.#borderRadius;
    }

    #position: Position = 'static';

    set position(value: Position) {
        if (this.#position === value) {
            return;
        }
        this.#position = value;
        this.style.position = value;
    }

    /**
     * The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/position} for syntax
     */
    get position(): Position {
        return this.#position;
    }

    #left = NaN;

    set left(value: number) {
        this.#left = value;
        if (!Number.isNaN(value)) {
            this.style.left = value + 'px';
            return;
        }
        this.style.left = '';
    }

    /**
     * The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/left} for syntax
     */
    get left(): number {
        return this.#left;
    }

    #top = NaN;

    set top(value: number) {
        this.#top = value;
        if (!Number.isNaN(value)) {
            this.style.top = value + 'px';
            return;
        }
        this.style.top = '';
    }

    /**
     * The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/top} for syntax
     */
    get top(): number {
        return this.#top;
    }

    #right = NaN;

    set right(value: number) {
        this.#right = value;
        if (!Number.isNaN(value)) {
            this.style.right = value + 'px';
            return;
        }
        this.style.right = '';
    }

    /**
     * The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/right} for syntax
     */
    get right(): number {
        return this.#right;
    }

    #bottom = NaN;

    set bottom(value: number) {
        this.#bottom = value;
        if (!Number.isNaN(value)) {
            this.style.bottom = value + 'px';
            return;
        }
        this.style.bottom = '';
    }

    /**
     * The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/bottom} for syntax
     */
    get bottom(): number {
        return this.#bottom;
    }

    set backgroundColor(value: string) {
        this.style.backgroundColor = value;
    }

    /**
     * The background-color CSS property sets the background color of an element.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color} for syntax
     */
    get backgroundColor(): string {
        return this.style.backgroundColor;
    }

    #flexGrow = 0;

    /**
     * The flex-grow CSS property sets the flex grow factor of a flex item's main size.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow} for syntax
     */
    get flexGrow(): number {
        return this.#flexGrow;
    }

    set flexGrow(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this.style.flexGrow = '';
            return;
        }
        this.style.flexGrow = value.toString();
    }

    #aspectRatio = NaN;

    public set aspectRatio(value: number) {
        if (Number.isNaN(value)) {
            this.#aspectRatio = value;
            this.style.aspectRatio = '';
            return;
        }
        this.#aspectRatio = value;
        this.style.aspectRatio = value.toString();
    }

    /**
     * The aspect-ratio  CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio} for syntax
     */
    public get aspectRatio(): number {
        return this.#aspectRatio;
    }

    /**
     * The computedStyle() method returns an object containing the values of all CSS properties of the Component, after applying active stylesheets and resolving any basic computation those values may contain. Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.
     */
    public get computedStyle(): CSSStyleDeclaration {
        return window.getComputedStyle(this);
    }
}
customElements.define('fx-component', Component);
