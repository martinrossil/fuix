import { FontWeight } from '../consts/FontWeight';
import { FontWeightType } from '../types/FontWeightType';
import Component from './Component';
import IText from './IText';

export default class Text extends Component implements IText {
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
        if (isNaN(value) || value < 0) {
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

    private _fontWeight: FontWeightType = FontWeight.NORMAL_400;
    public set fontWeight(value: FontWeightType) {
        this._fontWeight = value;
        this.style.fontWeight = this._fontWeight.toString();
    }

    /**
     * The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight}
     */
    public get fontWeight(): FontWeightType {
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
}
customElements.define('fx-text', Text);
