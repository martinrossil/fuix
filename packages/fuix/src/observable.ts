type Listener<T> = (value: T) => void;

/**
 * TEsting
 */
export class Observable<T> {
	public get value(): T {
		return this.#value;
	}

	/**
	 * The value to be observed
	 */
	public set value(value: T) {
		if (typeof value === 'number') {
			if (Number.isNaN(this.#value) && Number.isNaN(value)) {
				return;
			}
		}
		if (this.#value !== value) {
			this.#value = value;
			for (const listener of this.listeners) {
				listener(value);
			}
		}
	}

	#value: T;

	private readonly listeners: Set<(value: T) => void>;

	/**
	 * The Observable is reactive primitive that can be observed when adding a listener function with the add() method.
	 *
	 * @param value a value of generic type T
	 */
	public constructor(value: T) {
		this.#value = value;
		this.listeners = new Set<Listener<T>>();
	}

	/**
	 * Add a listener function to be invoked when the value changes
	 *
	 * @param listener listener function
	 */
	public add(listener: Listener<T>): void {
		this.listeners.add(listener);
	}

	/**
	 * Removes the listener function and returns true if the function was registered, otherwise false
	 *
	 * @param listener the listener function to be removed
	 * @returns boolean
	 */
	public remove(listener: Listener<T>): boolean {
		return this.listeners.delete(listener);
	}
}

/**
 * Returns a new instance of Observable with value of type T
 *
 * @param value initial value of type T
 * @returns Observable<T>
 */
export function observable<T>(value: T): Observable<T> {
	return new Observable<T>(value);
}
