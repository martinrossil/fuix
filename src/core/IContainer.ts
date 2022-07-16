import { FlexWrap } from '../types/FlexWrap';
import { AlignItems } from '../types/AlignItems';
import { JustifyContent } from '../types/JustifyContent';
import IComponent from './IComponent';

export default interface IContainer extends IComponent {
    /**
     * The addComponent() method of the IContainer interface adds a IComponent to the end of the list of children of a specified parent IContainer. If the given IComponent is a reference to an existing IComponent in the document, addComponent() moves it from its current position to the new position (there is no requirement to remove the IComponent from its parent IContainer before appending it to some other IContainer).
     *
     * @param component - the component to add as child node.
     * @returns the calling component so we can chain.
     */
    addComponent(component: IComponent): this;

    /**
     * The addComponents method, adds multiple IComponent instances as children of the IContainer
     *
     * @param components - an array of IComponent instances
     * @returns the calling component so we can chain.
     */
    addComponents(components: Array<IComponent>): this;

    /**
     * The addComponentAt() method of the IContainer interface adds a IComponent at the specified index.
     *
     * @param component - the component to add as child node.
     * @param index - the index the component will be inserted at.
     * @returns the calling component so we can chain.
     */
    addComponentAt(component: IComponent, index: number): this;

    /**
     * The removeComponent() method of the IContainer interface removes a Component from the DOM.
     *
     * @param component - the component to remove as child node.
     * @returns the calling component so we can chain.
     */
    removeComponent(component: IComponent): this;

    /**
     * The removeAllComponents(), removes all the IContainer children.
     *
     * @returns the calling component so we can chain.
     */
    removeAllComponents(): this;

    /**
     * The containsComponent() method of the IContainer interface returns a boolean value indicating whether a IComponent is a descendant of a given IContainer, that is the IContainer itself, one of its direct children (IComponents), one of the children's direct children, and so on.
     *
     * @param component - The IComponent to test with.
     * @returns A boolean value that is true if component is contained in the IContainer, false if not.
     */
    containsComponent(component: IComponent): boolean;

    /**
     * The componentIndex() method, returns the index of the IComponent, so the first child IComponent will return 0 and so on. If the IComponent is not a child of the IContainer, NaN will be returned.
     *
     * @param component - The IComponent to get the index of.
     * @returns - returns the index of the IComponent, NaN if the IComponent is not a child of the IContainer
     */
    componentIndex(component: IComponent): number;

    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    padding: number;

    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
     */
    gap: number;

    /**
     * The IContainer.childCount read-only property returns the number of child components of this Container.
     */
    readonly childCount: number;

    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items} for syntax
     */

    alignItems: AlignItems;

    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content} for syntax
     */
    justifyContent: JustifyContent;

    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap} for syntax
     */
    flexWrap: FlexWrap;

    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns} for syntax
     */
    gridTemplateColumns: string;
}
