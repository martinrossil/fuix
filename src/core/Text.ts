import Component from './Component';
import IText from './IText';

export default class Text extends Component implements IText {
    public constructor() {
        super();
        console.log('Text');
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
}
customElements.define('fx-text', Text);
