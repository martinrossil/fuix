import IComponent from './IComponent';

export default interface IText extends IComponent {
    /**
     * The text property of the IComponent interface represents the "rendered" text content of an IText and its descendants.
     * As a getter, it approximates the text the user would get if they highlighted the contents of the IText with the cursor and then copied it to the clipboard.
     */
    text: string;
}
