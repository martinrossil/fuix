import DropShadow from './drop-shadow';
import Observable from './observable';

export default class Component extends HTMLElement {
	public set cursor(value: '' | 'pointer') {
		assertIsValidCursor(value);
		this.#cursor = value;
		this.#cursorChanged = true;
		this.invalidateProperties();
	}

	public get cursor(): '' | 'pointer' {
		return this.#cursor;
	}

	public set effects(value: DropShadow[] | null) {
		assertIsValidEffects(value);
		this.#effects = value;
		this.#effectsChanged = true;
		this.invalidateProperties();
	}

	public get effects(): DropShadow[] | null {
		return this.#effects;
	}

	/**
	 * height should be a number, "fill" or "hug".
	 *
	 * If a number, it represents the height in pixels,
	 * and must be a non negative number.
	 *
	 * If "fill", the component should expand it's height as much as possible
	 *
	 * If "hug", the component should shrink it's height as much as possible.
	 */
	public set height(value: 'fill' | 'hug' | number) {
		assertIsValidSize(value);
		this.#height = value;
		this.#heightChanged = true;
		this.invalidateProperties();
	}

	public get height(): 'fill' | 'hug' | number {
		return this.#height;
	}

	public set maxHeight(value: number) {
		assertIsNonNegative(value);
		this.#maxHeight = value;
		this.#maxHeightChanged = true;
		this.invalidateProperties();
	}

	public get maxHeight(): number {
		return this.#maxHeight;
	}

	public set maxWidth(value: number) {
		assertIsNonNegative(value);
		this.#maxWidth = value;
		this.#maxWidthChanged = true;
		this.invalidateProperties();
	}

	public get maxWidth(): number {
		return this.#maxWidth;
	}

	public set minHeight(value: number) {
		assertIsNonNegative(value);
		this.#minHeight = value;
		this.#minHeightChanged = true;
		this.invalidateProperties();
	}

	public get minHeight(): number {
		return this.#minHeight;
	}

	public set minWidth(value: number) {
		assertIsNonNegative(value);
		this.#minWidth = value;
		this.#minWidthChanged = true;
		this.invalidateProperties();
	}

	public get minWidth(): number {
		return this.#minWidth;
	}

	public set opacity(value: number) {
		assertIsFromZeroToOne(value);
		this.#opacity = value;
		this.#opacityChanged = true;
		this.invalidateProperties();
	}

	public get opacity(): number {
		return this.#opacity;
	}

	public set parentAutoLayout(value: 'horizontal' | 'vertical' | 'wrap') {
		assertIsValidAutoLayout(value);
		this.#parentAutoLayout = value;
		this.#parentAutoLayoutChanged = true;
		this.invalidateProperties();
	}

	public get parentAutoLayout(): 'horizontal' | 'vertical' | 'wrap' {
		return this.#parentAutoLayout;
	}

	public set visible(value: boolean | Observable<boolean>) {
		assertIsValidVisible(value);
		if (value instanceof Observable) {
			this.#visible = value.value;
			value.add((value) => {
				this.#visible = value;
				this.#visibleChanged = true;
				this.invalidateProperties();
			});
			this.#visibleChanged = true;
			this.invalidateProperties();
		}
		else {
			this.#visible = value;
			this.#visibleChanged = true;
			this.invalidateProperties();
		}
	}

	public get visible(): boolean | Observable<boolean> {
		return this.#visible;
	}

	/**
	 * width should be a number, "fill" or "hug".
	 *
	 * If a number, it represents the width in pixels,
	 * and must be a non negative number.
	 *
	 * If "fill", the component should expand it's width as much as possible
	 *
	 * If "hug", the component should shrink it's width as much as possible.
	 */
	public set width(value: 'fill' | 'hug' | number) {
		assertIsValidSize(value);
		this.#width = value;
		this.#widthChanged = true;
		this.invalidateProperties();
	}

	public get width(): 'fill' | 'hug' | number {
		return this.#width;
	}

	#connected: boolean;

	#cursor: '' | 'pointer';

	#cursorChanged: boolean;

	#effects: DropShadow[] | null;

	#effectsChanged: boolean;

	#height: 'fill' | 'hug' | number;

	#heightChanged: boolean;

	#maxHeight: number;

	#maxHeightChanged: boolean;

	#maxWidth: number;

	#maxWidthChanged: boolean;

	#minHeight: number;

	#minHeightChanged: boolean;

	#minWidth: number;

	#minWidthChanged: boolean;

	#opacity: number;

	#opacityChanged: boolean;

	#parentAutoLayout: 'horizontal' | 'vertical' | 'wrap';

	#parentAutoLayoutChanged: boolean;

	#visible: boolean | Observable<boolean>;

	#visibleChanged: boolean;

	#width: 'fill' | 'hug' | number;

	#widthChanged: boolean;

	private set connected(value: boolean) {
		this.#connected = value;
	}

	private get connected(): boolean {
		return this.#connected;
	}

	public constructor() {
		super();
		this.style.background = '';
		this.style.boxSizing = 'border-box';
		this.style.borderRadius = '';
		this.style.cursor = '';
		this.style.display = 'inline-block';
		this.style.filter = '';
		this.style.maxHeight = '';
		this.style.maxWidth = '';
		this.style.minHeight = '0px';
		this.style.minWidth = '0px';
		this.style.opacity = '';
		this.#connected = false;
		this.#cursor = '';
		this.#cursorChanged = false;
		this.#effects = null;
		this.#effectsChanged = false;
		this.#height = 'hug';
		this.#heightChanged = false;
		this.#maxHeight = Infinity;
		this.#maxHeightChanged = false;
		this.#maxWidth = Infinity;
		this.#maxWidthChanged = false;
		this.#minHeight = 0;
		this.#minHeightChanged = false;
		this.#minWidth = 0;
		this.#minWidthChanged = false;
		this.#opacity = 1;
		this.#opacityChanged = false;
		this.#parentAutoLayout = 'horizontal';
		this.#parentAutoLayoutChanged = false;
		this.#visible = true;
		this.#visibleChanged = false;
		this.#width = 'hug';
		this.#widthChanged = false;
	}

	protected commitProperties(): void {
		if (this.#cursorChanged) {
			this.#commitCursor();
		}
		if (this.#effectsChanged) {
			this.#commitEffects();
		}
		if (this.#heightChanged) {
			this.#commitHeight();
		}
		if (this.#maxHeightChanged) {
			this.#commitMaxHeight();
		}
		if (this.#maxWidthChanged) {
			this.#commitMaxWidth();
		}
		if (this.#minHeightChanged) {
			this.#commitMinHeight();
		}
		if (this.#minWidthChanged) {
			this.#commitMinWidth();
		}
		if (this.#opacityChanged) {
			this.#commitOpacity();
		}
		if (this.#parentAutoLayoutChanged) {
			this.#commitParentAutoLayout();
		}
		if (this.#visibleChanged) {
			this.#commitVisible();
		}
		if (this.#widthChanged) {
			this.#commitWidth();
		}
	}

	/**
	 * invalidateProperties() is invoked by property setters,
	 * to trigger an invalidation pass that will commit the changes.
	 */
	protected invalidateProperties(): void {
		if (this.connected) {
			this.commitProperties();
		}
	}

	#commitCursor(): void {
		this.#cursorChanged = false;
		this.style.cursor = this.cursor;
	}

	#commitEffects(): void {
		this.#effectsChanged = false;
		if (this.effects === null) {
			this.style.filter = '';
			return;
		}
		for (const dropShadow of this.effects) {
			this.style.filter += `${dropShadow.toStyleString()} `;
		}
	}

	#commitHeight(): void {
		this.#heightChanged = false;
		this.#updateHeightStyles();
	}

	#commitMaxHeight(): void {
		this.#maxHeightChanged = false;
		this.style.maxHeight = `${this.maxHeight}px`;
	}

	#commitMaxWidth(): void {
		this.#maxWidthChanged = false;
		this.style.maxWidth = `${this.maxWidth}px`;
	}

	#commitMinHeight(): void {
		this.#minHeightChanged = false;
		this.style.minHeight = `${this.minHeight}px`;
	}

	#commitMinWidth(): void {
		this.#minWidthChanged = false;
		this.style.minWidth = `${this.minWidth}px`;
	}

	#commitOpacity(): void {
		this.#opacityChanged = false;
		this.style.opacity = `${this.opacity}`;
	}

	#commitParentAutoLayout(): void {
		this.#parentAutoLayoutChanged = false;
		this.#commitWidth();
		this.#commitHeight();
	}

	#commitVisible(): void {
		this.#visibleChanged = false;
		if (this.#visible === true || this.#visible instanceof Observable) {
			this.style.display = 'inline-block';
		}
		else {
			this.style.display = 'none';
		}
	}

	#commitWidth(): void {
		this.#widthChanged = false;
		this.#updateWidthStyles();
	}

	#updateHeightStyles(): void {
		if (this.height === 'fill') {
			if (this.parentAutoLayout === 'horizontal' || this.parentAutoLayout === 'wrap') {
				this.style.height = '';
				this.style.alignSelf = 'stretch';
				if (this.#width !== 'fill') {
					this.style.flexGrow = '';
				}
			}
			else if (this.parentAutoLayout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '1';
				if (this.#width !== 'fill') {
					this.style.alignSelf = '';
				}
			}
		}
		else if (this.height === 'hug') {
			if (this.parentAutoLayout === 'horizontal' || this.parentAutoLayout === 'wrap') {
				this.style.height = '';
				this.style.alignSelf = '';
			}
			else if (this.parentAutoLayout === 'vertical') {
				this.style.height = '';
				this.style.flexGrow = '';
			}
		}
		else {
			this.style.height = `${this.height}px`;
			if (this.parentAutoLayout === 'vertical') {
				this.style.flexGrow = '';
			}
		}
	}

	#updateWidthStyles(): void {
		if (this.width === 'fill') {
			if (this.parentAutoLayout === 'horizontal' || this.parentAutoLayout === 'wrap') {
				this.style.width = '';
				this.style.flexGrow = '1';
				if (this.#height !== 'fill') {
					this.style.alignSelf = '';
				}
			}
			else if (this.parentAutoLayout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = 'stretch';
				if (this.#height !== 'fill') {
					this.style.flexGrow = '';
				}
			}
		}
		else if (this.width === 'hug') {
			if (this.parentAutoLayout === 'horizontal' || this.parentAutoLayout === 'wrap') {
				this.style.width = '';
				this.style.flexGrow = '';
			}
			else if (this.parentAutoLayout === 'vertical') {
				this.style.width = '';
				this.style.alignSelf = '';
			}
		}
		else {
			this.style.width = `${this.width}px`;
			if (this.parentAutoLayout === 'horizontal' || this.parentAutoLayout === 'wrap') {
				this.style.flexGrow = '';
				this.style.flexShrink = '0';
			}
		}
	}

	/**
	 * connectedCallback() is invoked immediately by the browser,
	 * when the component is added as a child of parent component.
	 *
	 * connectedCallback() can be called multiple times, so we use
	 * the connected flag to prevent invalidation being invoked too many times.
	 */
	private connectedCallback(): void {
		if (!this.connected) {
			this.connected = true;
			this.commitProperties();
		}
	}

	/**
	 * disconnectedCallback() is invoked by the browser,
	 * when the component is removed from the parent component.
	 */
	private disconnectedCallback(): void {
		this.connected = false;
	}
}
customElements.define('fx-component', Component);

function assertIsFromZeroToOne(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 1) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 1`);
}

function assertIsNonNegative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assertIsValidAutoLayout(value: unknown): asserts value is 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap"`);
}

function assertIsValidCursor(value: unknown): asserts value is 'default' | 'pointer' {
	if (value === 'default' || value === 'pointer') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "default" or "pointer"`);
}

function assertIsValidEffects(value: unknown): asserts value is DropShadow[] | null {
	if (value === null || (Array.isArray(value) && value.every(entry => entry instanceof DropShadow))) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be Array with instances of DropShadow`);
}

function assertIsValidSize(value: unknown): asserts value is 'fill' | 'hug' | number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'fill' || value === 'hug') {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number, "fill" or "hug"`);
}

function assertIsValidVisible(value: unknown): asserts value is boolean | Observable<boolean> {
	if (typeof value === 'boolean' || value instanceof Observable) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be boolean or Observable<boolean>`);
}
