import IContainer from '../core/IContainer';

export default interface IBaseButton extends IContainer {
    /**
     * The text that should be shown inside the button.
     */
    text: string;

    /**
     * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
     */
    color: string;

    /**
     * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
     */
    fontFamily: string;
}
