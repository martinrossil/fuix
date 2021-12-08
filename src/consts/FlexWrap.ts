/**
 * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap} for syntax
 */
export const enum FlexWrap {
    /**
     * The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending on the flex-direction value. This is the default value.
     */
    NOWRAP = 'nowrap',
    /**
     * The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.
     */
    WRAP = 'wrap',
    /**
     * Behaves the same as wrap but cross-start and cross-end are permuted.
     */
    WRAP_REVERSE = 'wrap-reverse'
}
