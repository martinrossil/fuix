/**
 * The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow} for syntax
 */
export const enum Overflow {
    /**
     * Content is not clipped and may be rendered outside the padding box.
     */
    VISIBLE = 'visible',
    /**
     * Content is clipped if necessary to fit the padding box. No scrollbars are provided, and no support for allowing the user to scroll (such as by dragging or using a scroll wheel) is allowed. The content can be scrolled programmatically (for example, by setting the value of a property such as offsetLeft), so the element is still a scroll container.
     */
    HIDDEN = 'hidden',
    /**
     * Similar to hidden, the content is clipped to the element's padding box. The difference between clip and hidden is that the clip keyword also forbids all scrolling, including programmatic scrolling. The box is not a scroll container, and does not start a new formatting context. If you wish to start a new formatting context, you can use display: flow-root to do so.
     */
    CLIP = 'clip',
    /**
     * Content is clipped if necessary to fit the padding box. Browsers always display scrollbars whether or not any content is actually clipped, preventing scrollbars from appearing or disappearing as content changes. Printers may still print overflowing content.
     */
    SCROLL = 'scroll',
    /**
     * Depends on the user agent. If content fits inside the padding box, it looks the same as visible, but still establishes a new block formatting context. Desktop browsers provide scrollbars if content overflows.
     */
    AUTO = 'auto'
}
