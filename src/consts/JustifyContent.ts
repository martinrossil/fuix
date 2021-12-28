/**
 * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content} for syntax
 */
export const enum JustifyContent {
    /**
     * The items are packed flush to each other toward the start edge of the alignment container in the main axis.
     */
    START = 'start',
    /**
     * The items are packed flush to each other toward the end edge of the alignment container in the main axis.
     */
    END = 'end',
    /**
     * The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like start.
     */
    FLEX_START = 'flex-start',
    /**
     * The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side. This only applies to flex layout items. For items that are not children of a flex container, this value is treated like end.
     */
    FLEX_END = 'flex-end',
    /**
     * The items are packed flush to each other toward the center of the alignment container along the main axis.
     */
    CENTER = 'center',
    /**
     * The items are packed flush to each other toward the left edge of the alignment container. If the property’s axis is not parallel with the inline axis, this value behaves like start.
     */
    LEFT = 'left',
    /**
     * The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property’s axis is not parallel with the inline axis, this value behaves like start.
     */
    RIGHT = 'right',
    /**
     * The items are packed in their default position as if no justify-content value was set. This value behaves as stretch in grid and flex containers.
     */
    NORMAL = 'normal',
    /**
     * The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.
     */
    SPACE_BETWEEN = 'space-between',
    /**
     * The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The empty space before the first and after the last item equals half of the space between each pair of adjacent items.
     */
    SPACE_AROUND = 'space-around',
    /**
     * The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
     */
    SPACE_EVENLY = 'space-evenly',
    /**
     * If the combined size of the items along the main axis is less than the size of the alignment container, any auto-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container along the main axis.
     *
     * Note: stretch is not supported by flexible boxes (flexbox).
     */
    STRETCH = 'stretch'
}
