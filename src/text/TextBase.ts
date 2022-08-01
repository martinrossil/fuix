import Component from '../core/Component';
import { FontWeight } from '../types/FontWeight';
import { TextOverflow } from '../types/TextOverflow';
import { WhiteSpace } from '../types/WhiteSpace';
import ITextBase from './ITextBase';

export default class TextBase extends Component implements ITextBase {
    public constructor() {
        super();
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

    private _lineHeight: string = '1.2';

    public set lineHeight(value: string) {
        this._lineHeight = value;
        this.style.lineHeight = value;
    }

    /**
     * The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height}
     */
    public get lineHeight(): string {
        return this._lineHeight;
    }

    private _textOverflow: TextOverflow = 'clip';

    public set textOverflow(value: TextOverflow) {
        this._textOverflow = value;
        this.style.textOverflow = value;
    }

    /**
     * The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow}
     */
    public get textOverflow(): TextOverflow {
        return this._textOverflow;
    }

    private _whiteSpace: WhiteSpace = 'normal';

    public set whiteSpace(value: WhiteSpace) {
        this._whiteSpace = value;
        this.style.whiteSpace = value;
    }

    /**
     * The white-space CSS property sets how white space inside an element is handled.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/white-space}
     */
    public get whiteSpace(): WhiteSpace {
        return this._whiteSpace;
    }

    public set color(value: string) {
        this.style.color = value;
    }

    /**
     * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
     */
    public get color(): string {
        return this.style.color;
    }
}
customElements.define('fx-text-base', TextBase);
