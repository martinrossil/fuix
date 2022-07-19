import Component from '../core/Component';
import IComponent from '../core/IComponent';
import { AlignItems } from '../types/AlignItems';
import { FlexWrap } from '../types/FlexWrap';
import { JustifyContent } from '../types/JustifyContent';
import { Target } from '../types/Target';
import ILinkContainer from './ILinkContainer';

export default class LinkContainer extends Component implements ILinkContainer {
    public constructor() {
        super();
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
        for (const component of components) {
            frag.appendChild(component as unknown as Node);
        }
        this.#anchor.appendChild(frag);
        return this;
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
        if (isNaN(value) || value <= 0) {
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
        if (isNaN(value) || value <= 0) {
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
}
customElements.define('link-container', LinkContainer);
