import { describe, expect, it } from 'vitest';
import Observable from './observable';

describe('observable', () => {
	it('should be able to instantiate Observable"', () => {
		const obs = new Observable(true);
		expect(obs).toBeInstanceOf(Observable);
	});
	it('when observable.value is changed, listener should be invoked"', () => {
		const obs = new Observable(true);
		let has_been_invoked = false;
		obs.add(() => {
			has_been_invoked = true;
		});
		obs.value = false;
		expect(has_been_invoked).toBe(true);
	});
	it('when a listener function is removed, listener should not invoked"', () => {
		const obs = new Observable(true);
		let has_been_invoked = false;
		const listener = () => {
			has_been_invoked = true;
		};
		obs.add(listener);
		obs.remove(listener);
		obs.value = false;
		expect(has_been_invoked).toBe(false);
	});
	it('when value is NaN and value = NaN, listener should not invoked"', () => {
		const obs = new Observable(Number.NaN);
		let has_been_invoked = false;
		const listener = () => {
			has_been_invoked = true;
		};
		obs.add(listener);
		obs.value = Number.NaN;
		expect(has_been_invoked).toBe(false);
	});
	it('when observable.value is changed, value should have been changed"', () => {
		const obs = new Observable(true);
		obs.value = false;
		expect(obs.value).toBe(false);
	});
});
