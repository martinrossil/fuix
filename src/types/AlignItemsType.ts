import { AlignItems } from '../consts/AlignItems';
/**
 * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items} for syntax
 */
export type AlignItemsType = AlignItems.CENTER | AlignItems.END | AlignItems.FLEX_END | AlignItems.FLEX_START | AlignItems.START | AlignItems.STRETCH | AlignItems.NORMAL;
