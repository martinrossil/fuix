import IComponent from '../core/IComponent';
import { AlignItems } from '../types/AlignItems';
import { Display } from '../types/Display';
import { FlexWrap } from '../types/FlexWrap';
import { JustifyContent } from '../types/JustifyContent';
import { Overflow } from '../types/Overflow';
import { Position } from '../types/Position';
import { Target } from '../types/Target';
import ILinkContainer from './ILinkContainer';

export default class LinkContainer extends HTMLElement implements ILinkContainer {
    public constructor() {
        super();
        this.style.display = 'contents';
        this.appendChild(this.anchor);
    }

    /**
     * The addComponent() method of the IContainer interface adds a IComponent to the end of the list of children of a specified parent IContainer. If the given IComponent is a reference to an existing IComponent in the document, addComponent() moves it from its current position to the new position (there is no requirement to remove the IComponent from its parent IContainer before appending it to some other IContainer).
     *
     * @param component - the component to add as child node.
     * @returns the calling component so we can chain.
     */
     public addComponent(component: IComponent): this {
        this.#anchor.appendChild(component as unknown as Node);
        return this;
    }

    /**
     * The addComponentAt() method of the IContainer interface adds a IComponent at the specified index. If the index out of bounce, the IComponent will be inserted as the last child ICompoment.
     *
     * @param component - the component to add as child node.
     * @param index - the index the component will be inserted at.
     * @returns the calling component so we can chain.
     */
     addComponentAt(component: IComponent, index: number): this {
        const componentNode: Node = component as unknown as Node;
        if (this.#anchor.children[index]) {
            const beforeNode: Node = this.#anchor.children[index];
            this.#anchor.insertBefore(componentNode, beforeNode);
            return this;
        }
        this.#anchor.appendChild(componentNode);
        return this;
     }

     /**
     * The removeComponent() method of the IContainer interface removes a Component from the DOM.
     *
     * @param component - the component to remove as child node.
     * @returns the calling component so we can chain.
     */
    public removeComponent(component: IComponent): this {
        this.#anchor.removeChild(component as unknown as Node);
        return this;
    }

    /**
     * The removeAllComponents(), removes all the IContainer children.
     *
     * @returns the calling component so we can chain.
     */
     public removeAllComponents(): this {
        while (this.#anchor.firstChild) {
            this.#anchor.removeChild(this.#anchor.firstChild);
        }
         return this;
     }

     /**
     * The containsComponent() method of the IContainer interface returns a boolean value indicating whether a IComponent is a descendant of a given IContainer, that is the IContainer itself, one of its direct children (IComponents), one of the children's direct children, and so on.
     *
     * @param component - The IComponent to test with.
     * @returns A boolean value that is true if component is contained in the IContainer, false if not.
     */
    public containsComponent(component: IComponent): boolean {
        return this.#anchor.contains(component as unknown as Node);
    }

    /**
     * The componentIndex() method, returns the index of the IComponent, so the first child IComponent will return 0 and so on. If the IComponent is not a child of the IContainer, NaN will be returned.
     *
     * @param component - The IComponent to get the index of.
     * @returns - returns the index of the IComponent, NaN if the IComponent is not a child of the IContainer
     */
     public componentIndex(component: IComponent): number {
        const componentNode: HTMLElement = component as unknown as HTMLElement;
        const index: number = Array.from(this.#anchor.children).indexOf(componentNode);
        return index !== -1 ? index : NaN;
    }

    /**
     * The addComponents method, adds multiple IComponent instances as children of the IContainer
     *
     * @param components - an array of IComponent instances
     * @returns the calling component so we can chain.
     */
     public addComponents(components: Array<IComponent>): this {
        const frag: DocumentFragment = document.createDocumentFragment();
        components.forEach((component) => frag.appendChild(component as unknown as Node));
        this.#anchor.appendChild(frag);
        return this;
     }

     #width = NaN;

    set width(value: number) {
        if (value < 0) {
            this.#width = 0;
            this.#anchor.style.width = '0px';
            return;
        }
        this.#width = value;
        if (!Number.isNaN(value)) {
            this.#anchor.style.width = value + 'px';
            return;
        }
        this.#anchor.style.width = '';
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
            this.#anchor.style.height = '0px';
            return;
        }
        this.#height = value;
        if (!Number.isNaN(value)) {
            this.#anchor.style.height = value + 'px';
            return;
        }
        this.#anchor.style.height = '';
    }

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    get height(): number {
        return this.#height;
    }

    #display: Display = 'inline-block';

    public set display(value: Display) {
        if (this.#display === value) {
            return;
        }
        this.#display = value;
        if (this.visible) {
            this.#anchor.style.display = value;
        } else {
            this.#anchor.style.display = 'none';
        }
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

    set backgroundColor(value: string) {
        this.#anchor.style.backgroundColor = value;
    }

    /**
     * The background-color CSS property sets the background color of an element.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color} for syntax
     */
    get backgroundColor(): string {
        return this.#anchor.style.backgroundColor;
    }

    #widthPercent = NaN;

    set widthPercent(value: number) {
        if (value < 0) {
            this.#widthPercent = 0;
            return;
        }
        this.#widthPercent = value;
        if (!Number.isNaN(value)) {
            this.#anchor.style.width = value + '%';
            return;
        }
        this.#anchor.style.width = '';
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
            this.#anchor.style.height = value + '%';
            return;
        }
        this.#anchor.style.height = '';
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
            this.#anchor.style.minWidth = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#minWidth = value;
            this.#anchor.style.minWidth = value + 'px';
            return;
        }
        this.#anchor.style.minWidth = '';
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
            this.#anchor.style.maxWidth = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#maxWidth = value;
            this.#anchor.style.maxWidth = value + 'px';
            return;
        }
        this.#anchor.style.maxWidth = '';
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
            this.#anchor.style.minHeight = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#minHeight = value;
            this.#anchor.style.minHeight = value + 'px';
            return;
        }
        this.#anchor.style.minHeight = '';
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
            this.#anchor.style.maxHeight = '0px';
            return;
        }
        if (!Number.isNaN(value)) {
            this.#maxHeight = value;
            this.#anchor.style.maxHeight = value + 'px';
            return;
        }
        this.#anchor.style.maxHeight = '';
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

    #overflow: Overflow = 'visible';

    public set overflow(value: Overflow) {
        if (this.#overflow === value) {
            return;
        }
        this.#overflow = value;
        this.#anchor.style.overflow = value;
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
            this.#anchor.style.borderRadius = '';
            return;
        }
        this.#borderRadius = value;
        this.#anchor.style.borderRadius = value + 'px';
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
        this.#anchor.style.position = value;
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
            this.#anchor.style.left = value + 'px';
            return;
        }
        this.#anchor.style.left = '';
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
            this.#anchor.style.top = value + 'px';
            return;
        }
        this.#anchor.style.top = '';
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
            this.#anchor.style.right = value + 'px';
            return;
        }
        this.#anchor.style.right = '';
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
            this.#anchor.style.bottom = value + 'px';
            return;
        }
        this.#anchor.style.bottom = '';
    }

    /**
     * The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/bottom} for syntax
     */
    get bottom(): number {
        return this.#bottom;
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
            this.#anchor.style.flexGrow = '';
            return;
        }
        this.#anchor.style.flexGrow = value.toString();
    }

    #aspectRatio = NaN;

    public set aspectRatio(value: number) {
        if (Number.isNaN(value)) {
            this.#aspectRatio = value;
            this.#anchor.style.aspectRatio = '';
            return;
        }
        this.#aspectRatio = value;
        this.#anchor.style.aspectRatio = value.toString();
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
        return window.getComputedStyle(this.#anchor);
    }

    #padding = 0;

    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    public get padding(): number {
        return this.#padding;
    }

    public set padding(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this.#padding = 0;
            this.#anchor.style.padding = '';
            return;
        }
        this.#padding = value;
        this.#anchor.style.padding = value + 'px';
    }

    #gap = 0;

    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
     */
    public get gap(): number {
        return this.#gap;
    }

    public set gap(value: number) {
        if (Number.isNaN(value) || value <= 0) {
            this.#gap = 0;
            this.#anchor.style.gap = '';
            return;
        }
        this.#gap = value;
        this.#anchor.style.gap = value + 'px';
    }

    /**
     * The IContainer.childCount read-only property returns the number of child components of this Container.
     */
     get childCount(): number {
        return this.#anchor.childElementCount;
    }

    #alignItems: AlignItems = 'normal';

    public set alignItems(value: AlignItems) {
        if (this.#alignItems === value) {
            return;
        }
        this.#alignItems = value;
        this.#anchor.style.alignItems = value;
    }

    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items} for syntax
     */
    public get alignItems(): AlignItems {
        return this.#alignItems;
    }

    #justifyContent: JustifyContent = 'normal';

    public set justifyContent(value: JustifyContent) {
        if (this.#justifyContent === value) {
            return;
        }
        this.#justifyContent = value;
        this.#anchor.style.justifyContent = value;
    }

    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content} for syntax
     */
    public get justifyContent(): JustifyContent {
        return this.#justifyContent;
    }

    #flexWrap: FlexWrap = 'nowrap';

    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap} for syntax
     */
    public get flexWrap(): FlexWrap {
        return this.#flexWrap;
    }

    public set flexWrap(value: FlexWrap) {
        this.#flexWrap = value;
        this.#anchor.style.flexWrap = value;
    }

    #gridTemplateColumns = 'none';

    public set gridTemplateColumns(value: string) {
        this.#gridTemplateColumns = value;
        this.#anchor.style.gridTemplateColumns = value;
    }

    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns} for syntax
     */
    public get gridTemplateColumns(): string {
        return this.#gridTemplateColumns;
    }

    #anchor!: HTMLAnchorElement;

    public get anchor(): HTMLAnchorElement {
        if (!this.#anchor) {
            this.#anchor = document.createElement('a');
            this.#anchor.style.display = 'inline-block';
        }
        return this.#anchor;
    }

    public set href(value: string) {
        this.#anchor.href = value;
    }

    public get href(): string {
        return this.#anchor.href;
    }

    #target: Target = '_self';

    public set target(value: Target) {
        this.#target = value;
        this.#anchor.target = value;
    }

    public get target(): Target {
        return this.#target;
    }

    #visible = true;

    public set visible(value: boolean) {
        if (this.#visible === value) {
            return;
        }
        this.#visible = value;
        if (value) {
            this.#anchor.style.display = this.display;
        } else {
            this.#anchor.style.display = 'none';
        }
    }

    /**
     * Toggles the style.display property, so visible = false will set style.display to 'none', true will respect the current IComponent display property.
     */
    public get visible(): boolean {
        return this.#visible;
    }

    #inset = 'auto';

    public set inset(value: string) {
        if (this.#inset === value) {
            return;
        }
        this.#inset = value;
        this.style.inset = value;
    }

    /**
     * The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.
     */
    public get inset(): string {
        return this.#inset;
    }
}
customElements.define('link-container', LinkContainer);
