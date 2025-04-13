import Hex from './hex';

export default class StopColor {
	#color: Hex;
	#offset: number;

	/**
	 * The stop-color CSS property defines the color to use for an SVG <stop> element within a gradient. If present, it overrides the element's stop-color attribute.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color} for syntax
	 * @param color an instance of the Hex class
	 * @param offset a number from 0 to 100
	 */
	public constructor(color: Hex, offset: number) {
		assertIsInstanceOfHex(color);
		assertIsFromZeroToHundred(offset);
		this.#color = color;
		this.#offset = offset;
	}

	/**
	 *	Returns the StopColor value as a '#RRGGBBAA number%' string
	 *
	 * @returns string
	 */
	public toStyleString(): string {
		return `${this.#color.toStyleString()} ${this.#offset}%`;
	}
}

function assertIsFromZeroToHundred(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 100) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from 0 to 100`);
}

function assertIsInstanceOfHex(value: unknown): asserts value is Hex {
	if (value instanceof Hex) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex`);
}
