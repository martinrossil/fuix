import { FontWeight } from '../types/FontWeight';
import IComponent from './IComponent';

export default interface IParagraph extends IComponent {
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
    lineHeight: number;
}
