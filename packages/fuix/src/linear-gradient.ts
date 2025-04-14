import StopColor from './stop-color';

export default class LinearGradient {
	#angle: number;
	#stops: StopColor[];

	/**
	 * The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the <gradient> data type, which is a special kind of <image>.
	 *
	 * @param stops an Array of StopColor instances
	 * @param angle the angle of the linear gradient with a value from -180 to 180
	 */
	public constructor(stops: StopColor[], angle = 0) {
		assertIsFromMinus180To180(angle);
		assertIsArrayMinLengthOne(stops);
		for (const stop of stops) {
			assertIsInstanceOfStopColor(stop);
		}
		this.#angle = angle;
		this.#stops = stops;
	}

	/**
	 * Returns the LinearGradient value as 'linear-gradient(deg, #RRGGBBAA, #RRGGBBAA)
	 *
	 * @returns string
	 */
	public toStyleString(): string {
		if (this.#stops.length === 1 && this.#stops[0]) {
			return `linear-gradient(${this.#angle}deg, ${this.#stops[0].toStyleString()})`;
		}
		const stops = this.#stops.map(stop_color => stop_color.toStyleString());
		const angle = this.#angle >= 0 ? this.#angle - 180 : this.#angle + 180;
		return `linear-gradient(${angle}deg, ${stops.join(', ')})`;
	}
}

function assertIsArrayMinLengthOne(value: unknown): asserts value is Array<unknown> {
	if (Array.isArray(value) && value.length > 0) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be an Array with minimum one item`);
}

function assertIsFromMinus180To180(value: unknown): asserts value is number {
	if (typeof value === 'number' && value >= -180 && value <= 180) {
		return;
	}
	throw new RangeError(`[${value}] is invalid, must be from -180 to 180`);
}

function assertIsInstanceOfStopColor(value: unknown): asserts value is StopColor {
	if (value instanceof StopColor) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of StopColor`);
}
