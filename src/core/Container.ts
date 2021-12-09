import IComponent from './IComponent';
import Component from './Component';
import IContainer from './IContainer';

export default class Container extends Component implements IContainer {
    /**
     * The addComponent() method of the IContainer interface adds a IComponent to the end of the list of children of a specified parent IContainer. If the given IComponent is a reference to an existing IComponent in the document, addComponent() moves it from its current position to the new position (there is no requirement to remove the IComponent from its parent IContainer before appending it to some other IContainer).
     *
     * @param component - the component to add as child node.
     * @returns the calling component so we can chain.
     */
    public addComponent(component: IComponent): this {
        this.appendChild(component as unknown as Node);
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
        if (this.children[index]) {
            const beforeNode: Node = this.children[index];
            this.insertBefore(componentNode, beforeNode);
            return this;
        }
        this.appendChild(componentNode);
        return this;
     }

    /**
     * The removeComponent() method of the IContainer interface removes a Component from the DOM.
     *
     * @param component - the component to remove as child node.
     * @returns the calling component so we can chain.
     */
    public removeComponent(component: IComponent): this {
        this.removeChild(component as unknown as Node);
        return this;
    }

    /**
     * The removeAllComponents(), removes all the IContainer children.
     *
     * @returns the calling component so we can chain.
     */
     public removeAllComponents(): this {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
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
        return this.contains(component as unknown as Node);
    }

    /**
     * The componentIndex() method, returns the index of the IComponent, so the first child IComponent will return 0 and so on. If the IComponent is not a child of the IContainer, NaN will be returned.
     *
     * @param component - The IComponent to get the index of.
     * @returns - returns the index of the IComponent, NaN if the IComponent is not a child of the IContainer
     */
    public componentIndex(component: IComponent): number {
        const componentNode: HTMLElement = component as unknown as HTMLElement;
        const index: number = Array.from(this.children).indexOf(componentNode);
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
        this.appendChild(frag);
        return this;
     }

    private _padding = 0;

    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    public get padding(): number {
        return this._padding;
    }

    public set padding(value: number) {
        if (isNaN(value) || value <= 0) {
            this._padding = 0;
            this.style.padding = '';
            return;
        }
        this._padding = value;
        this.style.padding = value + 'px';
    }

    private _gap = 0;

    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
     */
    public get gap(): number {
        return this._gap;
    }

    public set gap(value: number) {
        if (isNaN(value) || value <= 0) {
            this._gap = 0;
            this.style.gap = '';
            return;
        }
        this.style.gap = value + 'px';
    }

    /**
     * The IContainer.childCount read-only property returns the number of child components of this Container.
     */
    get childCount(): number {
        return this.childElementCount;
    }
}
customElements.define('fx-container', Container);
