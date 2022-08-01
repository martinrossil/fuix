import IComponent from '../core/IComponent';
import { FontWeight } from '../types/FontWeight';
import { TextOverflow } from '../types/TextOverflow';
import { WhiteSpace } from '../types/WhiteSpace';

export default interface ITextBase extends IComponent {
    /**
     * The text property of the IComponent interface represents the "rendered" text content of an IText and its descendants.
     * As a getter, it approximates the text the user would get if they highlighted the contents of the IText with the cursor and then copied it to the clipboard.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText} for syntax
     */
    text: string;

    /**
     * The font-size CSS property sets the size of the font in pixels.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size}
     */
    fontSize: number;

    /**
     * The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight}
     */
    fontWeight: FontWeight;

    /**
     * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
     */
    fontFamily: string;

    /**
     * The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing}
     */
    letterSpacing: number;

    /**
     * The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height}
     */
    lineHeight: string;

    /**
     * The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow}
     */
    textOverflow: TextOverflow;

    /**
     * The white-space CSS property sets how white space inside an element is handled.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/white-space}
     */
    whiteSpace: WhiteSpace;

    /**
     * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
     */
    color: string;
}
