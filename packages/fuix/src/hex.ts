export default class Hex {
	#hex: `#${string}`;
	#opacity: number;

	/**
	 * The <hex-color> CSS data type is a notation for describing the hexadecimal color syntax of an sRGB color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color} for syntax
	 * @param hex a string in the format '#RRGGBB'
	 * @param opacity opacity represented as a number from 0 to 1
	 */
	public constructor(hex: `#${string}`, opacity = 1) {
		assertIsValidHex(hex);
		assertIsFromZeroToOne(opacity);
		this.#hex = hex;
		this.#opacity = opacity;
	}

	/**
	 *	Returns the Hex value as a '#RRGGBBAA' string
	 *
	 * @returns string
	 */
	public toStyleString(): string {
		// Scale the value to a range of 0 to 255 (hex "00" to "FF")
		const scaledValue = Math.round(this.#opacity * 255);
		// Convert to a two-digit hexadecimal string
		const opacityHex = scaledValue.toString(16).padStart(2, '0').toUpperCase();
		return `${this.#hex}${opacityHex}`;
	}
}

function assertIsFromZeroToOne(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= 0 && value <= 1) {
		return;
	}
	throw new RangeError(`[${String(value)}] is invalid, must be from 0 to 1`);
}

function assertIsValidHex(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		if (value.match(/^#[0-9A-F]{6}$/)) {
			return;
		}
	}
	throw new TypeError(`[${String(value)}] is invalid, must be #RRGGBB`);
}
