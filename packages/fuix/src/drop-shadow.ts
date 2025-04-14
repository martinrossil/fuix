import Hex from './hex';

export default class DropShadow {
	#blur: number;
	#color: Hex;
	#x: number;
	#y: number;

	/**
	 * Applies the parameter <shadow> as a drop shadow, following the contours of the image. The shadow syntax is similar to <box-shadow> (defined in the CSS backgrounds and borders module), with the exception that the inset keyword and spread parameter are not allowed. As with all filter property values, any filters after the drop-shadow() are applied to the shadow.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow} for syntax
	 * @param x the x offset in pixels
	 * @param y the y offset in pixels
	 * @param blur the blur in pixels
	 * @param color an instance of the Hex class
	 */
	public constructor(x: number, y: number, blur: number, color: Hex) {
		assertIsNumber(x);
		this.#x = x;
		assertIsNumber(y);
		this.#y = y;
		assertIsNonNegative(blur);
		this.#blur = blur;
		assertIsInstanceOfHex(color);
		this.#color = color;
	}

	/**
	 * Return the DropShadow value as a 'drop-shadow(Npx, Npx, Npx, #RRGGBBAA )'
	 *
	 * @returns string
	 */
	public toStyleString(): string {
		return `drop-shadow(${this.#x}px ${this.#y}px ${this.#blur}px ${this.#color.toStyleString()})`;
	}
}

function assertIsInstanceOfHex(value: unknown): asserts value is Hex {
	if (value instanceof Hex) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an instance of Hex`);
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
	throw new TypeError(`[${value}] is invalid, must be of type number`);
}
