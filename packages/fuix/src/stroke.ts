import Hex from './hex';

export default class Stroke {
	#color: Hex;
	#position: 'center' | 'inside' | 'outside';
	#style: 'dash' | 'solid';
	#weight: number;

	/**
	 * The outline CSS shorthand property sets most of the outline properties in a single declaration.
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline} for syntax
	 * @param color an instance of the Hex class
	 * @param weight the thickness of the stroke in pixels
	 * @param position the position of the stroke relative to the bounding box
	 * @param style either solid or dashed
	 */
	public constructor(color: Hex, weight = 1, position: 'center' | 'inside' | 'outside' = 'outside', style: 'dash' | 'solid' = 'solid') {
		assertIsInstanceOfHex(color);
		this.#color = color;
		assertIsValidPosition(position);
		this.#position = position;
		assertIsValidStyle(style);
		this.#style = style;
		assertIsNonNegative(weight);
		this.#weight = weight;
	}

	/**
	 * Returns the outline offset as a 'Npx' string
	 *
	 * @returns string
	 */
	public toStyleOffsetString(): string {
		if (this.#position === 'center') {
			return `-${this.#weight * 0.5}px`;
		}
		if (this.#position === 'inside') {
			return `-${this.#weight}px`;
		}
		return '0px';
	}

	/**
	 * Return the Stroke value as a 'Npx style #RRGGBBAA' string
	 *
	 * @returns string
	 */
	public toStyleString(): string {
		if (this.#style === 'solid') {
			return `${this.#weight}px solid ${this.#color.toStyleString()}`;
		}
		return `${this.#weight}px dashed ${this.#color.toStyleString()}`;
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

function assertIsValidPosition(value: unknown): asserts value is 'center' | 'inside' | 'outside' {
	if (value === 'center' || value === 'inside' || value === 'outside') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "center", "inside" or "outside"`);
}

function assertIsValidStyle(value: unknown): asserts value is 'dash' | 'solid' {
	if (value === 'solid' || value === 'dash') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be "solid" or "dash"`);
}
