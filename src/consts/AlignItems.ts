/**
 * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items} for syntax
 */
export const enum AlignItems {
    /**
     * The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.
     */
    CENTER = 'center',
    /**
     * The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.
     */
    FLEX_START = 'flex-start',
    /**
     * The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.
     */
    FLEX_END = 'flex-end',
    /**
     * The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.
     */
    START = 'start',
    /**
     * The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.
     */
    END = 'end',
    /**
     * Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.
     */
    STRETCH = 'stretch',
    /**
     * The effect of this keyword is dependent of the layout mode we are in:
     *
     * In absolutely-positioned layouts, the keyword behaves like start on replaced absolutely-positioned boxes, and as stretch on all other absolutely-positioned boxes.
     *
     * In static position of absolutely-positioned layouts, the keyword behaves as stretch.
     *
     * For flex items, the keyword behaves as stretch.
     *
     * For grid items, this keyword leads to a behavior similar to the one of stretch, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like start.
     */
    NORMAL = 'normal'
}
