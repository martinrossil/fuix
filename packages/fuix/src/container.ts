import Component from './component';
import Hex from './hex';
import LinearGradient from './linear-gradient';
import Observable from './observable';
import Stroke from './stroke';

export default class Container extends Component {
	public set alignment(value: 'bottom_center' | 'bottom_left' | 'bottom_right' | 'center' | 'left' | 'right' | 'top_center' | 'top_left' | 'top_right') {
		assertIsValidAlignment(value);
		this.#alignment = value;
		this.#alignmentChanged = true;
		this.invalidateProperties();
	}

	public get alignment(): 'bottom_center' | 'bottom_left' | 'bottom_right' | 'center' | 'left' | 'right' | 'top_center' | 'top_left' | 'top_right' {
		return this.#alignment;
	}

	public set autoLayout(value: 'horizontal' | 'vertical' | 'wrap') {
		assertIsValidAutoLayout(value);
		this.#autoLayout = value;
		this.#autoLayoutChanged = true;
		this.invalidateProperties();
	}

	public get autoLayout(): 'horizontal' | 'vertical' | 'wrap' {
		return this.#autoLayout;
	}

	public set clipContent(value: boolean) {
		assertIsBoolean(value);
		this.#clipContent = value;
		this.#clipContentChanged = true;
		this.invalidateProperties();
	}

	public get clipContent(): boolean {
		return this.#clipContent;
	}

	public set cornerRadius(value: number) {
		assertIsNonNegative(value);
		this.#cornerRadius = value;
		this.#cornerRadiusChanged = true;
		this.invalidateProperties();
	}

	public get cornerRadius(): number {
		return this.#cornerRadius;
	}

	public set fill(value: Hex | LinearGradient | null) {
		assertIsValidFill(value);
		this.#fill = value;
		this.#fillChanged = true;
		this.invalidateProperties();
	}

	public get fill(): Hex | LinearGradient | null {
		return this.#fill;
	}

	public set gapHorizontal(value: 'auto' | number) {
		assertIsNonNegativeOrAuto(value);
		this.#gapHorizontal = value;
		this.#gapHorizontalChanged = true;
		this.invalidateProperties();
	}

	public get gapHorizontal(): 'auto' | number {
		return this.#gapHorizontal;
	}

	public set gapVertical(value: 'auto' | number) {
		assertIsNonNegativeOrAuto(value);
		this.#gapVertical = value;
		this.#gapVerticalChanged = true;
		this.invalidateProperties();
	}

	public get gapVertical(): 'auto' | number {
		return this.#gapVertical;
	}

	public set paddingHorizontal(value: number) {
		assertIsNonNegative(value);
		this.#paddingHorizontal = value;
		this.#paddingHorizontalChanged = true;
		this.invalidateProperties();
	}

	public get paddingHorizontal(): number {
		return this.#paddingHorizontal;
	}

	public set paddingVertical(value: number) {
		assertIsNonNegative(value);
		this.#paddingVertical = value;
		this.#paddingVerticalChanged = true;
		this.invalidateProperties();
	}

	public get paddingVertical(): number {
		return this.#paddingVertical;
	}

	public set stroke(value: null | Stroke) {
		assert_is_valid_stroke(value);
		this.#stroke = value;
		this.#stroke_changed = true;
		this.invalidateProperties();
	}

	public get stroke(): null | Stroke {
		return this.#stroke;
	}

	override set visible(value: boolean | Observable<boolean>) {
		assert_is_valid_visible(value);
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

	override get visible(): boolean | Observable<boolean> {
		return this.#visible;
	}

	#alignment: 'bottom_center' | 'bottom_left' | 'bottom_right' | 'center' | 'left' | 'right' | 'top_center' | 'top_left' | 'top_right';

	#alignmentChanged: boolean;

	#autoLayout: 'horizontal' | 'vertical' | 'wrap';

	#autoLayoutChanged: boolean;

	#clipContent: boolean;

	#clipContentChanged: boolean;

	#cornerRadius: number;

	#cornerRadiusChanged: boolean;

	#fill: Hex | LinearGradient | null;

	#fillChanged: boolean;

	#gapHorizontal: 'auto' | number;

	#gapHorizontalChanged: boolean;

	#gapVertical: 'auto' | number;

	#gapVerticalChanged: boolean;

	#paddingHorizontal: number;

	#paddingHorizontalChanged: boolean;

	#paddingVertical: number;

	#paddingVerticalChanged: boolean;

	#stroke: null | Stroke;

	#stroke_changed: boolean;

	#visible: boolean | Observable<boolean>;

	#visibleChanged: boolean;

	public constructor() {
		super();
		this.style.alignItems = 'flex-start';
		this.style.columnGap = '';
		this.style.display = 'inline-flex';
		this.style.flexDirection = 'row';
		this.style.justifyContent = 'flex-start';
		this.style.outline = '';
		this.style.outlineOffset = '';
		this.style.overflow = '';
		this.style.padding = '';
		this.style.rowGap = '';
		this.#alignment = 'top_left';
		this.#alignmentChanged = false;
		this.#autoLayout = 'horizontal';
		this.#autoLayoutChanged = false;
		this.#clipContent = false;
		this.#clipContentChanged = false;
		this.#cornerRadius = 0;
		this.#cornerRadiusChanged = false;
		this.#fill = null;
		this.#fillChanged = false;
		this.#gapHorizontal = 0;
		this.#gapHorizontalChanged = false;
		this.#gapVertical = 0;
		this.#gapVerticalChanged = false;
		this.#paddingHorizontal = 0;
		this.#paddingHorizontalChanged = false;
		this.#paddingVertical = 0;
		this.#paddingVerticalChanged = false;
		this.#stroke = null;
		this.#stroke_changed = false;
		this.#visible = true;
		this.#visibleChanged = false;
	}

	public addComponent(value: Component): void {
		assertIsComponent(value);
		assertIsNotChild(value, this);
		value.parentAutoLayout = this.autoLayout;
		this.appendChild(value);
	}

	override commitProperties(): void {
		super.commitProperties();
		if (this.#clipContentChanged) {
			this.#commitClipContent();
		}
		if (this.#cornerRadiusChanged) {
			this.#commitCornerRadius();
		}
		if (this.#autoLayoutChanged || this.#alignmentChanged || this.#gapHorizontalChanged || this.#gapVerticalChanged) {
			this.#commitAutoLayout();
			this.#commitGapHorizontal();
			this.#commitGapVertical();
			this.#commitAlignment();
		}
		if (this.#fillChanged) {
			this.#commitFill();
		}
		if (this.#paddingHorizontalChanged) {
			this.#commitPaddingHorizontal();
		}
		if (this.#paddingVerticalChanged) {
			this.#commitPaddingVertical();
		}
		if (this.#stroke_changed) {
			this.#commitStroke();
		}
		if (this.#visibleChanged) {
			this.#commitVisible();
		}
	}

	#autoLayoutHorizontalAlignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
		}
	}

	#autoLayoutVerticalAlignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = 'flex-end';
			this.#updateChildrenParentAutoLayout();
		}
	}

	#autoLayoutWrapAlignment(): void {
		if (this.alignment === 'top_left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'top_right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-start';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'center';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_left') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-start';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_center') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'center';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.alignment === 'bottom_right') {
			this.style.justifyContent = this.#gapHorizontal === 'auto' ? 'space-between' : 'flex-end';
			this.style.alignItems = '';
			this.style.alignContent = this.#gapVertical === 'auto' ? 'space-between' : 'flex-end';
			this.#updateChildrenParentAutoLayout();
		}
	}

	#commitAlignment(): void {
		this.#alignmentChanged = false;
		if (this.autoLayout === 'vertical') {
			this.#autoLayoutVerticalAlignment();
			return;
		}
		if (this.autoLayout === 'horizontal') {
			this.#autoLayoutHorizontalAlignment();
			return;
		}
		if (this.autoLayout === 'wrap') {
			this.#autoLayoutWrapAlignment();
		}
	}

	#commitAutoLayout(): void {
		this.#autoLayoutChanged = false;
		if (this.autoLayout === 'horizontal') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = '';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.autoLayout === 'vertical') {
			this.style.flexDirection = 'column';
			this.style.flexWrap = '';
			this.#updateChildrenParentAutoLayout();
			return;
		}
		if (this.autoLayout === 'wrap') {
			this.style.flexDirection = 'row';
			this.style.flexWrap = 'wrap';
			this.#updateChildrenParentAutoLayout();
		}
	}

	#commitClipContent(): void {
		this.#clipContentChanged = false;
		if (this.clipContent) {
			this.style.overflow = 'hidden';
		}
		else {
			this.style.overflow = '';
		}
	}

	#commitCornerRadius(): void {
		this.#cornerRadiusChanged = false;
		this.style.borderRadius = `${this.cornerRadius}px`;
	}

	#commitFill(): void {
		this.#fillChanged = false;
		if (this.fill === null) {
			this.style.background = '';
			return;
		}
		this.style.background = this.fill.toStyleString();
	}

	#commitGapHorizontal(): void {
		this.#gapHorizontalChanged = false;
		if (this.#autoLayout === 'horizontal' || this.#autoLayout === 'wrap') {
			if (this.#gapHorizontal === 'auto') {
				this.style.justifyContent = 'space-between';
				this.style.columnGap = '';
			}
			else {
				this.style.columnGap = `${this.#gapHorizontal}px`;
			}
		}
		else if (this.#autoLayout === 'vertical') {
			if (this.#gapHorizontal !== 'auto') {
				this.style.columnGap = '';
			}
		}
	}

	#commitGapVertical(): void {
		this.#gapVerticalChanged = false;
		if (this.#autoLayout === 'vertical') {
			if (this.#gapVertical === 'auto') {
				this.style.justifyContent = 'space-between';
				this.style.rowGap = '';
			}
			else {
				this.style.rowGap = `${this.#gapVertical}px`;
			}
		}
		else if (this.#autoLayout === 'horizontal') {
			if (this.#gapVertical !== 'auto') {
				this.style.rowGap = '';
			}
		}
		else if (this.#autoLayout === 'wrap') {
			if (this.#gapVertical === 'auto') {
				this.style.alignContent = 'space-between';
				this.style.rowGap = '';
			}
			else {
				this.style.rowGap = `${this.#gapVertical}px`;
			}
		}
	}

	#commitPaddingHorizontal(): void {
		this.#paddingHorizontalChanged = false;
		this.style.paddingLeft = `${this.paddingHorizontal}px`;
		this.style.paddingRight = `${this.paddingHorizontal}px`;
	}

	#commitPaddingVertical(): void {
		this.#paddingVerticalChanged = false;
		this.style.paddingTop = `${this.paddingVertical}px`;
		this.style.paddingBottom = `${this.paddingVertical}px`;
	}

	#commitStroke(): void {
		this.#stroke_changed = false;
		if (this.stroke) {
			this.style.outline = this.stroke.toStyleString();
			this.style.outlineOffset = this.stroke.toStyleOffsetString();
		}
		else {
			this.style.outline = '';
			this.style.outlineOffset = '';
		}
	}

	#commitVisible(): void {
		this.#visibleChanged = false;
		if (this.#visible === true || this.#visible instanceof Observable) {
			this.style.display = 'inline-flex';
		}
		else {
			this.style.display = 'none';
		}
	}

	#updateChildrenParentAutoLayout(): void {
		for (const child of this.children) {
			assertIsComponent(child);
			child.parentAutoLayout = this.autoLayout;
		}
	}
}
customElements.define('fx-container', Container);

function assert_is_valid_stroke(value: unknown): asserts value is null | Stroke {
	if (value instanceof Stroke || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Stroke or null`);
}

function assert_is_valid_visible(value: unknown): asserts value is boolean | Observable<boolean> {
	if (typeof value === 'boolean' || value instanceof Observable) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be boolean or Observable<boolean>`);
}

function assertIsBoolean(value: unknown): asserts value is boolean {
	if (typeof value === 'boolean') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be true or false`);
}

function assertIsComponent(value: unknown): asserts value is Component {
	if (value instanceof Component) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Component`);
}

function assertIsNonNegative(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be a non negative number`);
}

function assertIsNonNegativeOrAuto(value: unknown): asserts value is 'auto' | number {
	if (typeof value === 'number' && value >= 0) {
		return;
	}
	if (value === 'auto') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be a non negative number or "auto"`);
}

function assertIsNotChild(child: unknown, parent: unknown): void {
	if (parent instanceof Node && child instanceof Node && parent.contains(child) === false) {
		return;
	}
	throw new TypeError(`[${child}] is already a child of ${parent}`);
}

function assertIsValidAlignment(value: unknown): asserts value is 'bottom_center' | 'bottom_left' | 'bottom_right' | 'center' | 'left' | 'right' | 'top_center' | 'top_left' | 'top_right' {
	if (value === 'top_left' || value === 'top_center' || value === 'top_right' || value === 'left' || value === 'center' || value === 'right' || value === 'bottom_left' || value === 'bottom_center' || value === 'bottom_right') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "top_left", "top_center", "top_right", "left", "center", "right", "bottom_left", "bottom_center" or "bottom_right"`);
}

function assertIsValidAutoLayout(value: unknown): asserts value is 'horizontal' | 'vertical' | 'wrap' {
	if (value === 'horizontal' || value === 'vertical' || value === 'wrap') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "horizontal", "vertical" or "wrap"`);
}

function assertIsValidFill(value: unknown): asserts value is Hex | LinearGradient | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex / LinearGradient or null`);
}
