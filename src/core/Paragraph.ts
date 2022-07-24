import { FontWeight } from '../types/FontWeight';
import Component from './Component';
import IParagraph from './IParagraph';

export default class Paragraph extends Component implements IParagraph {
    public constructor() {
        super();
        this.display = 'block';
    }

    public set text(value: string) {
        this.innerText = value;
    }

    /**
     * The text property of the IComponent interface represents the "rendered" text content of an IText and its descendants.
     * As a getter, it approximates the text the user would get if they highlighted the contents of the IText with the cursor and then copied it to the clipboard.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText} for syntax
     */
    public get text(): string {
        return this.innerText;
    }

    private _fontSize = 16;

    public set fontSize(value: number) {
        if (Number.isNaN(value) || value < 0) {
            if (this._fontSize !== 16) {
                this._fontSize = 16;
            }
        } else {
            this._fontSize = value;
        }
        this.style.fontSize = this._fontSize + 'px';
    }

    /**
     * The font-size CSS property sets the size of the font in pixels.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size}
     */
     public get fontSize(): number {
        return this._fontSize;
    }

    private _fontWeight: FontWeight = 400;

    public set fontWeight(value: FontWeight) {
        this._fontWeight = value;
        this.style.fontWeight = this._fontWeight.toString();
    }

    /**
     * The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight}
     */
    public get fontWeight(): FontWeight {
        return this._fontWeight;
    }

    public set fontFamily(value: string) {
        this.style.fontFamily = value;
    }

    /**
     * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
    */
    public get fontFamily(): string {
        return this.style.fontFamily;
    }

    private _letterSpacing = 0;

    public set letterSpacing(value: number) {
        if (Number.isNaN(value)) {
            if (this._letterSpacing !== 0) {
                this._letterSpacing = 0;
                this.style.letterSpacing = '';
            }
            return;
        }
        this._letterSpacing = value;
        this.style.letterSpacing = value + 'px';
    }

    /**
     * The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing}
     */
    public get letterSpacing(): number {
        return this._letterSpacing;
    }

    private _lineHeight = NaN;

    public set lineHeight(value: number) {
        if (Number.isNaN(value) || value < 0) {
            this._lineHeight = NaN;
            this.style.lineHeight = '';
            return;
        }
        this._lineHeight = value;
        this.style.lineHeight = value.toString();
    }

    /**
     * The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height}
     */
    public get lineHeight(): number {
        return this._lineHeight;
    }
}
customElements.define('fx-paragraph', Paragraph);
