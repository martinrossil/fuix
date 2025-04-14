import Container from './container';
import Hex from './hex';
import LinearGradient from './linear-gradient';

export default class Application extends Container {
	override set fill(value: Hex | LinearGradient | null) {
		assertIsValidFill(value);
		this.#fill = value;
		this.#fillChanged = true;
		this.invalidateProperties();
	}

	override get fill(): Hex | LinearGradient | null {
		return this.#fill;
	}

	public set fontFamily(value: string) {
		assertIsString(value);
		this.#fontFamily = value;
		this.#fontFamilyChanged = true;
		this.invalidateProperties();
	}

	public get fontFamily(): string {
		return this.#fontFamily;
	}

	#fill: Hex | LinearGradient | null;

	#fillChanged: boolean;

	#fontFamily: string;

	#fontFamilyChanged: boolean;

	public constructor() {
		super();
		document.body.style.background = '';
		document.body.style.height = '100%';
		document.body.style.margin = '0px';
		document.body.style.minHeight = '100%';
		document.documentElement.style.height = '100%';
		document.documentElement.style.minHeight = '100%';
		this.style.display = 'flex';
		this.style.minHeight = '100%';
		this.#fill = null;
		this.#fillChanged = false;
		this.#fontFamily = '';
		this.#fontFamilyChanged = false;
		this.autoLayout = 'vertical';
	}

	override commitProperties(): void {
		super.commitProperties();
		if (this.#fillChanged) {
			this.#commitFill();
		}
		if (this.#fontFamilyChanged) {
			this.#commitFontFamily();
		}
	}

	#commitFill(): void {
		this.#fillChanged = false;
		if (this.fill === null) {
			document.body.style.background = '';
			return;
		}
		document.body.style.background = this.fill.toStyleString();
	}

	#commitFontFamily(): void {
		this.#fontFamilyChanged = false;
		document.body.style.fontFamily = this.fontFamily;
	}
}
customElements.define('fx-application', Application);

function assertIsString(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}

function assertIsValidFill(value: unknown): asserts value is Hex | LinearGradient | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex / LinearGradient or null`);
}
