import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    /**
     * Sets the width and height.
     * @param width - width
     * @param height - height
     * @returns the element
     */
    setSize(width: number, height: number): ISizeElement;

    /**
     * Sets the widthPercent and heightPercent.
     * @param widthPercent - widthPercent
     * @param heightPercent - heightPercent
     * @returns the element
     */
    setSizePercent(widthPercent: number, heightPercent: number): ISizeElement;

    /**
     * Sets the width.
     * @param width - width in pixels from 0 to Infinity or NaN
     */
    setWidth(width: number): ISizeElement;

    /**
     * Sets the height.
     * @param height - height in pixels from 0 to Infinity or NaN
     */
     setHeight(height: number): ISizeElement;

     /**
      * Sets the widthPercent.
      * @param widthPercent - widthPercent from 0 to Infinity or NaN
      */
     setWidthPercent(widthPercent: number): ISizeElement;

     /**
      * Sets the heightPercent.
      * @param heightPercent - heightPercent from 0 to Infinity or NaN
      */
     setHeightPercent(heightPercent: number): ISizeElement;

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    width: number;

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    height: number;

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    widthPercent: number;

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    heightPercent: number;

    /**
     * The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     * The element's width is set to the value of min-width whenever min-width is larger than max-width or width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width} for syntax
     */
    minWidth: number;

    /**
     * The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
     * max-width overrides width, but min-width overrides max-width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width} for syntax
     */
    maxWidth: number;

    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
     * The element's height is set to the value of min-height whenever min-height is larger than max-height or height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height} for syntax
     */
    minHeight: number;

    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
     * max-height overrides height, but min-height overrides max-height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height} for syntax
     */
    maxHeight: number;
}
