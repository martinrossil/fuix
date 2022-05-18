/**
 * The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
 *
 * Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout; the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display} for syntax
 */
export const Display = {
    /**
     * The element generates a block element box, generating line breaks both before and after the element when in the normal flow.
     */
    BLOCK: 'block',

    /**
     * The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.
     */
    INLINE: 'inline',

    /**
     * The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).
     */
    INLINE_BLOCK: 'inline-block',

    /**
     * The element behaves like an inline element and lays out its content according to the flexbox model.
     */
    INLINE_FLEX: 'inline-flex',

    /**
     * The element behaves like a block element and lays out its content according to the flexbox model.
     */
    FLEX: 'flex',

    /**
     * The element behaves like an inline element and lays out its content according to the grid model.
     */
    INLINE_GRID: 'inline-grid',

    /**
     * The element behaves like a block element and lays out its content according to the grid model.
     */
    GRID: 'grid',

    /**
     * Turns off the display of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off. To have an element take up the space that it would normally take, but without actually rendering anything, use the visibility property instead.
     */
    NONE: 'none'
}
