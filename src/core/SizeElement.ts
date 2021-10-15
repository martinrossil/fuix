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
     setWidth(width: number): ISizeElement {
         this.width = width;
         return this;
     }

     /**
      * Sets the height.
      * @param height - height in pixels from 0 to Infinity or NaN
      */
      setHeight(height: number): ISizeElement {
          this.height = height;
          return this;
      }

      /**
       * Sets the widthPercent.
       * @param widthPercent - widthPercent from 0 to Infinity or NaN
       */
      setWidthPercent(widthPercent: number): ISizeElement {
          this.widthPercent = widthPercent;
          return this;
      }

      /**
       * Sets the heightPercent.
       * @param heightPercent - heightPercent from 0 to Infinity or NaN
       */
      setHeightPercent(heightPercent: number): ISizeElement {
          this.heightPercent = heightPercent;
          return this;
      }

    private _width = NaN;

    set width(value: number) {
        if (value < 0) {
            this._width = 0;
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
}
customElements.define('size-element', SizeElement);
