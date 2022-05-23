import FlexWrap from '../consts/FlexWrap';

/**
 * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap} for syntax
 *
 * @beta
 */
export type FlexWrapType = typeof FlexWrap.NOWRAP | typeof FlexWrap.WRAP | typeof FlexWrap.WRAP_REVERSE; // 'nowrap' | 'wrap' | 'wrap-reverse'; // FlexWrap.NOWRAP | FlexWrap.WRAP | FlexWrap.WRAP_REVERSE;
