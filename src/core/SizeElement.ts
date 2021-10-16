import PositionElement from './PositionElement';
import ISizeElement from './ISizeElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    /**
     * Sets the width and height.
     * @param width - width in pixels or NaN
     * @param height - height in pixels or NaN
     * @returns the element
     */
    public setSize(width: number, height: number): ISizeElement {
        this.width = width;
        this.height = height;
        return this;
    }

    /**
     * Sets the widthPercent and heightPercent.
     * @param widthPercent - widthPercent from 0 to Infinity
     * @param heightPercent - heightPercent from 0 to Infinity
     * @returns the element
     */
    public setSizePercent(widthPercent: number, heightPercent: number): ISizeElement {
        this.widthPercent = widthPercent;
        this.heightPercent = heightPercent;
        return this;
    }

    /**
     * Sets the width.
     * @param width - width in pixels from 0 to Infinity or NaN
     */
     public setWidth(width: number): ISizeElement {
         this.width = width;
         return this;
     }

     /**
      * Sets the height.
      * @param height - height in pixels from 0 to Infinity or NaN
      */
      public setHeight(height: number): ISizeElement {
          this.height = height;
          return this;
      }

      /**
       * Sets the widthPercent.
       * @param widthPercent - widthPercent from 0 to Infinity or NaN
       */
      public setWidthPercent(widthPercent: number): ISizeElement {
          this.widthPercent = widthPercent;
          return this;
      }

      /**
       * Sets the heightPercent.
       * @param heightPercent - heightPercent from 0 to Infinity or NaN
       */
      public setHeightPercent(heightPercent: number): ISizeElement {
          this.heightPercent = heightPercent;
          return this;
      }

    private _width = NaN;

    set width(value: number) {
        if (value < 0) {
            this._width = 0;
            this.style.width = '0px';
            return;
        }
        this._width = value;
        if (!isNaN(value)) {
            this.style.width = value + 'px';
            return;
        }
        this.style.width = '';
    }

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    get width(): number {
        return this._width;
    }

    private _height = NaN;

    set height(value: number) {
        if (value < 0) {
            this._height = 0;
            this.style.height = '0px';
            return;
        }
        this._height = value;
        if (!isNaN(value)) {
            this.style.height = value + 'px';
            return;
        }
        this.style.height = '';
    }

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    get height(): number {
        return this._height;
    }

    private _widthPercent = NaN;

    set widthPercent(value: number) {
        if (value < 0) {
            this._widthPercent = 0;
            return;
        }
        this._widthPercent = value;
        if (!isNaN(value)) {
            this.style.width = value + '%';
            return;
        }
        this.style.width = '';
    }

    /**
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width} for syntax
     */
    get widthPercent(): number {
        return this._widthPercent;
    }

    private _heightPercent = NaN;

    set heightPercent(value: number) {
        if (value < 0) {
            this._heightPercent = 0;
            return;
        }
        this._heightPercent = value;
        if (!isNaN(value)) {
            this.style.height = value + '%';
            return;
        }
        this.style.height = '';
    }

    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height} for syntax
     */
    get heightPercent(): number {
        return this._heightPercent;
    }

    private _minWidth = NaN;

    public set minWidth(value: number) {
        if (value < 0) {
            this._minWidth = 0;
            this.style.minWidth = '0px';
            return;
        }
        if (!isNaN(value)) {
            this._minWidth = value;
            this.style.minWidth = value + 'px';
            return;
        }
        this.style.minWidth = '';
    }

    /**
     * The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     * The element's width is set to the value of min-width whenever min-width is larger than max-width or width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width} for syntax
     */
    public get minWidth(): number {
        return this._minWidth;
    }

    private _maxWidth = NaN;

    public set maxWidth(value: number) {
        if (value < 0) {
            this._maxWidth = 0;
            this.style.maxWidth = '0px';
            return;
        }
        if (!isNaN(value)) {
            this._maxWidth = value;
            this.style.maxWidth = value + 'px';
            return;
        }
        this.style.maxWidth = '';
    }

    /**
     * The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
     * max-width overrides width, but min-width overrides max-width.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width} for syntax
     */
    public get maxWidth(): number {
        return this._maxWidth;
    }

    private _minHeight = NaN;

    public set minHeight(value: number) {
        if (value < 0) {
            this._minHeight = 0;
            this.style.minHeight = '0px';
            return;
        }
        if (!isNaN(value)) {
            this._minHeight = value;
            this.style.minHeight = value + 'px';
            return;
        }
        this.style.minHeight = '';
    }

    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
     * The element's height is set to the value of min-height whenever min-height is larger than max-height or height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height} for syntax
     */
    public get minHeight(): number {
        return this._minHeight;
    }

    private _maxHeight = NaN;

    public set maxHeight(value: number) {
        if (value < 0) {
            this._maxHeight = 0;
            this.style.maxHeight = '0px';
            return;
        }
        if (!isNaN(value)) {
            this._maxHeight = value;
            this.style.maxHeight = value + 'px';
            return;
        }
        this.style.maxHeight = '';
    }

    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
     * max-height overrides height, but min-height overrides max-height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height} for syntax
     */
    public get maxHeight(): number {
        return this._maxHeight;
    }
}
customElements.define('size-element', SizeElement);
