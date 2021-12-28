import { JustifyContent } from '../consts/JustifyContent';

/**
 * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content} for syntax
 */
export type JustifyContentType = JustifyContent.CENTER | JustifyContent.END | JustifyContent.FLEX_END | JustifyContent.FLEX_START | JustifyContent.LEFT | JustifyContent.NORMAL | JustifyContent.RIGHT | JustifyContent.SPACE_AROUND | JustifyContent.SPACE_BETWEEN | JustifyContent.SPACE_EVENLY | JustifyContent.START | JustifyContent.STRETCH;
