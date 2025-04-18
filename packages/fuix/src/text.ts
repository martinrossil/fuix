import Component from './component';
import Hex from './hex';
import LinearGradient from './linear-gradient';

export default class Text extends Component {
	public set characters(value: string) {
		assertIsString(value);
		this.#characters = value;
		this.#charactersChanged = true;
		this.invalidateProperties();
	}

	/**
	 * The raw characters in the text Component.
	 */
	public get characters(): string {
		return this.#characters;
	}

	/**
	 * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color} for syntax
	 */
	public set fill(value: Hex | LinearGradient | null) {
		assertIsValidFill(value);
		this.#fill = value;
		this.#fillChanged = true;
		this.invalidateProperties();
	}

	public get fill(): Hex | LinearGradient | null {
		return this.#fill;
	}

	/**
	 * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family} for syntax
	 */
	public set fontFamily(value: string) {
		assertIsString(value);
		this.#fontFamily = value;
		this.#fontFamilyChanged = true;
		this.invalidateProperties();
	}

	public get fontFamily(): string {
		return this.#fontFamily;
	}

	/**
	 * The font size in pixels
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size} for syntax
	 */
	public set fontSize(value: number) {
		assertIsNonNegative(value);
		this.#fontSize = value;
		this.#fontSizeChanged = true;
		this.invalidateProperties();
	}

	public get fontSize(): number {
		return this.#fontSize;
	}

	/**
	 * The font-weight CSS property sets the weight (or boldness) of the font. Valid values are from 1 to 1000.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight} for syntax
	 */
	public set fontWeight(value: number) {
		assertIsFromOneToThousand(value);
		this.#fontWeight = value;
		this.#fontWeightChanged = true;
		this.invalidateProperties();
	}

	public get fontWeight(): number {
		return this.#fontWeight;
	}

	/**
	 * The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together. Valid values are positive and negative numbers in pixels.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing} for syntax
	 */
	public set letterSpacing(value: number) {
		assertIsNumber(value);
		this.#letterSpacing = value;
		this.#letterSpacingChanged = true;
		this.invalidateProperties();
	}

	public get letterSpacing(): number {
		return this.#letterSpacing;
	}

	/**
	 * The line-height CSS property sets the height of a line box in horizontal writing modes. In vertical writing modes, it sets the width of a line box. It's commonly used to set the distance between lines of text. On block-level elements in horizontal writing modes, it specifies the preferred height of line boxes within the element, and on non-replaced inline elements, it specifies the height that is used to calculate line box height.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height} for syntax
	 */
	public set lineHeight(value: 'auto' | number) {
		assertIsValidLineHeight(value);
		this.#lineHeight = value;
		this.#lineHeightChanged = true;
		this.invalidateProperties();
	}

	public get lineHeight(): 'auto' | number {
		return this.#lineHeight;
	}

	/**
	 * The line-clamp CSS property allows limiting of the contents of a block to the specified number of lines.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-clamp} for syntax
	 */
	public set maxLines(value: number) {
		assertIsPositiveInteger(value);
		this.#maxLines = value;
		this.#maxLinesChanged = true;
		this.invalidateProperties();
	}

	public get maxLines(): number {
		return this.#maxLines;
	}

	/**
	 * The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/user-select} for syntax
	 */
	public set selectable(value: boolean) {
		assertIsBoolean(value);
		this.#selectable = value;
		this.#selectableChanged = true;
		this.invalidateProperties();
	}

	public get selectable(): boolean {
		return this.#selectable;
	}

	/**
	 * The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element. This means it works like vertical-align but in the horizontal direction.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align} for syntax
	 */
	public set textAlignHorizontal(value: 'center' | 'justified' | 'left' | 'right') {
		assertIsValidTextAlignHorizontal(value);
		this.#textAlignHorizontal = value;
		this.#textAlignHorizontalChanged = true;
		this.invalidateProperties();
	}

	public get textAlignHorizontal(): 'center' | 'justified' | 'left' | 'right' {
		return this.#textAlignHorizontal;
	}

	/**
	 * The textAlignVertical property, sets the vertical alignment of the text.
	 */
	public set textAlignVertical(value: 'bottom' | 'middle' | 'top') {
		assertIsValidTextAlignVertical(value);
		this.#textAlignVertical = value;
		this.#textAlignVerticalChanged = true;
		this.invalidateProperties();
	}

	public get textAlignVertical(): 'bottom' | 'middle' | 'top' {
		return this.#textAlignVertical;
	}

	/**
	 * The truncate property, sets if the text should be cut off and show three dots (...), if there is not enough space to show al the text.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow} for syntax
	 */
	public set truncate(value: boolean) {
		assertIsBoolean(value);
		this.#truncate = value;
		this.#truncateChanged = true;
		this.invalidateProperties();
	}

	public get truncate(): boolean {
		return this.#truncate;
	}

	/**
	 * The text-box CSS property is a shorthand that corresponds to the text-box-trim and text-box-edge properties, which together specify the amount of space to trim from the block-start edge and block-end edge of a text element's block container.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-box} for syntax
	 */
	public set verticalTrim(value: 'cap' | 'standard') {
		assert_is_valid_verticalTrim(value);
		this.#verticalTrim = value;
		this.#verticalTrimChanged = true;
		this.invalidateProperties();
	}

	public get verticalTrim(): 'cap' | 'standard' {
		return this.#verticalTrim;
	}

	#characters: string;

	#charactersChanged: boolean;

	#fill: Hex | LinearGradient | null;

	#fillChanged: boolean;

	#fontFamily: string;

	#fontFamilyChanged: boolean;

	#fontSize: number;

	#fontSizeChanged: boolean;

	#fontWeight: number;

	#fontWeightChanged: boolean;

	#letterSpacing: number;

	#letterSpacingChanged: boolean;

	#lineHeight: 'auto' | number;

	#lineHeightChanged: boolean;

	#maxLines: number;

	#maxLinesChanged: boolean;

	#selectable: boolean;

	#selectableChanged: boolean;

	#textAlignHorizontal: 'center' | 'justified' | 'left' | 'right';

	#textAlignHorizontalChanged: boolean;

	#textAlignVertical: 'bottom' | 'middle' | 'top';

	#textAlignVerticalChanged: boolean;

	#textContent: Component;

	#truncate: boolean;

	#truncateChanged: boolean;

	#verticalTrim: 'cap' | 'standard';

	#verticalTrimChanged: boolean;

	public constructor() {
		super();
		this.style.alignItems = 'flex-start';
		this.style.color = '';
		this.style.display = 'inline-flex';
		this.style.fontFamily = '';
		this.style.fontSize = '16px';
		this.style.fontWeight = '400';
		this.style.lineHeight = '1.2';
		this.style.textAlign = 'start';
		this.style.userSelect = 'none';
		this.#characters = '';
		this.#charactersChanged = false;
		this.#fill = null;
		this.#fillChanged = false;
		this.#fontFamily = '';
		this.#fontFamilyChanged = false;
		this.#fontSize = 16;
		this.#fontSizeChanged = false;
		this.#fontWeight = 400;
		this.#fontWeightChanged = false;
		this.#letterSpacing = 0;
		this.#letterSpacingChanged = false;
		this.#lineHeight = 'auto';
		this.#lineHeightChanged = false;
		this.#maxLines = 1;
		this.#maxLinesChanged = false;
		this.#selectable = false;
		this.#selectableChanged = false;
		this.#textAlignHorizontal = 'left';
		this.#textAlignHorizontalChanged = false;
		this.#textAlignVertical = 'top';
		this.#textAlignVerticalChanged = false;
		this.#textContent = new Component();
		this.#textContent.style.background = '';
		this.#textContent.style.display = 'inline-block';
		this.#textContent.style.overflow = 'visible';
		this.#textContent.style.textBoxTrim = '';
		this.#textContent.style.textBoxEdge = '';
		this.#textContent.style.webkitBackgroundClip = '';
		this.#textContent.style.webkitLineClamp = '1';
		this.#textContent.style.webkitTextFillColor = '';
		this.#truncate = false;
		this.#truncateChanged = false;
		this.#verticalTrim = 'standard';
		this.#verticalTrimChanged = false;
		/**
		 * The #textContent child Component is used instead of the textContent property,
		 * because we need to support vertical alignment, which is not possible using a
		 * single HTML Element
		 */
		this.appendChild(this.#textContent);
	}

	override commitProperties(): void {
		super.commitProperties();
		if (this.#charactersChanged) {
			this.#commitCharacters();
		}
		if (this.#fillChanged) {
			this.#commit_fill();
		}
		if (this.#fontFamilyChanged) {
			this.#commitFontFamily();
		}
		if (this.#fontSizeChanged) {
			this.#commitFontSize();
		}
		if (this.#fontWeightChanged) {
			this.#commitFontWeight();
		}
		if (this.#letterSpacingChanged) {
			this.#commitLetterSpacing();
		}
		if (this.#lineHeightChanged) {
			this.#commitLineHeight();
		}
		if (this.#selectableChanged) {
			this.#commitSelectable();
		}
		if (this.#textAlignHorizontalChanged) {
			this.#commitTextAlignHorizontal();
		}
		if (this.#textAlignVerticalChanged) {
			this.#commitTextAlignVertical();
		}
		if (this.#truncateChanged || this.#maxLinesChanged) {
			this.#committruncate();
			this.#commitMaxLines();
		}
		if (this.#verticalTrimChanged) {
			this.#commitVerticalTrim();
		}
	}

	#commit_fill(): void {
		this.#fillChanged = false;
		this.style.color = '';
		if (this.fill instanceof LinearGradient) {
			this.#textContent.style.background = this.fill.toStyleString();
			this.#textContent.style.webkitTextFillColor = 'transparent';
			this.#textContent.style.webkitBackgroundClip = 'text';
			return;
		}
		this.#textContent.style.background = '';
		this.#textContent.style.webkitTextFillColor = '';
		this.#textContent.style.webkitBackgroundClip = '';
		if (this.fill instanceof Hex) {
			this.style.color = this.fill.toStyleString();
		}
	}

	#commitCharacters(): void {
		this.#charactersChanged = false;
		this.#textContent.textContent = this.characters;
	}

	#commitFontFamily(): void {
		this.#fontFamilyChanged = false;
		this.style.fontFamily = this.fontFamily;
	}

	#commitFontSize(): void {
		this.#fontSizeChanged = false;
		this.style.fontSize = `${this.fontSize}px`;
	}

	#commitFontWeight(): void {
		this.#fontWeightChanged = false;
		this.style.fontWeight = `${this.fontWeight}`;
	}

	#commitLetterSpacing(): void {
		this.#letterSpacingChanged = false;
		this.style.letterSpacing = `${this.letterSpacing}px`;
	}

	#commitLineHeight(): void {
		this.#lineHeightChanged = false;
		if (this.lineHeight === 'auto') {
			this.style.lineHeight = '1.2';
			return;
		}
		this.style.lineHeight = `${this.lineHeight}px`;
	}

	#commitMaxLines(): void {
		this.#maxLinesChanged = false;
		this.#textContent.style.webkitLineClamp = this.maxLines.toString();
	}

	#commitSelectable(): void {
		this.#selectableChanged = false;
		this.style.userSelect = this.#selectable ? '' : 'none';
	}

	#commitTextAlignHorizontal(): void {
		this.#textAlignHorizontalChanged = false;
		if (this.textAlignHorizontal === 'left') {
			this.style.textAlign = 'start';
			return;
		}
		if (this.textAlignHorizontal === 'right') {
			this.style.textAlign = 'end';
			return;
		}
		if (this.textAlignHorizontal === 'justified') {
			this.style.textAlign = 'justify';
			return;
		}
		if (this.textAlignHorizontal === 'center') {
			this.style.textAlign = 'center';
		}
	}

	#commitTextAlignVertical(): void {
		this.#textAlignVerticalChanged = false;
		if (this.textAlignVertical === 'top') {
			this.style.alignItems = 'flex-start';
			return;
		}
		if (this.textAlignVertical === 'middle') {
			this.style.alignItems = 'center';
			return;
		}
		if (this.textAlignVertical === 'bottom') {
			this.style.alignItems = 'flex-end';
		}
	}

	#committruncate(): void {
		this.#truncateChanged = false;
		if (this.#truncate) {
			this.#textContent.style.overflow = 'hidden';
			this.#textContent.style.display = '-webkit-box';
			this.#textContent.style.webkitBoxOrient = 'vertical';
		}
		else {
			this.#textContent.style.overflow = 'visible';
			this.#textContent.style.display = 'inline-block';
			this.#textContent.style.webkitBoxOrient = '';
		}
	}

	#commitVerticalTrim(): void {
		this.#verticalTrimChanged = false;
		if (this.verticalTrim === 'standard') {
			this.#textContent.style.textBoxTrim = '';
			this.#textContent.style.textBoxEdge = '';
		}
		else {
			this.#textContent.style.textBoxTrim = 'trim-both';
			this.#textContent.style.textBoxEdge = 'cap alphabetic';
		}
	}
}
customElements.define('fx-text', Text);

function assert_is_valid_verticalTrim(value: unknown): asserts value is 'cap' | 'standard' {
	if (value === 'standard' || value === 'cap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "standard" or "cap"`);
}

function assertIsBoolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}

function assertIsFromOneToThousand(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && value <= 1000) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 1 to 1000`);
}

function assertIsNonNegative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assertIsNumber(value: unknown): asserts value is number {
	if (typeof value === 'number') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a number type`);
}

function assertIsPositiveInteger(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 1 && String(value).includes('.') === false) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a positive integer`);
}

function assertIsString(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}

function assertIsValidFill(value: unknown): asserts value is Hex | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be null or an instance of Hex`);
}

function assertIsValidLineHeight(value: unknown): asserts value is 'auto' | number {
	if (value === 'auto') {
		return;
	}
	if (typeof value === 'number' && value > 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be more than 0 or "auto"`);
}

function assertIsValidTextAlignHorizontal(value: unknown): asserts value is 'center' | 'justified' | 'left' | 'right' {
	if (value === 'left' || value === 'center' || value === 'right' || value === 'justified') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "left", "center", "right" or "justified"`);
}

function assertIsValidTextAlignVertical(value: unknown): asserts value is 'bottom' | 'middle' | 'top' {
	if (value === 'top' || value === 'middle' || value === 'bottom') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top", "middle" or "bottom"`);
}
