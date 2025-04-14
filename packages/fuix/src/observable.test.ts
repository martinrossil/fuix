import { describe, expect, it } from 'vitest';
import { Observable, observable } from './observable';

describe('observable', () => {
	it('should be able to instantiate Observable"', () => {
		const obs = observable(true);
		expect(obs).toBeInstanceOf(Observable);
	});
	it('when observable.value is changed, listener should be invoked"', () => {
		const obs = observable(true);
		let has_been_invoked = false;
		obs.add(() => {
			has_been_invoked = true;
		});
		obs.value = false;
		expect(has_been_invoked).toBe(true);
	});
	it('when a listener function is removed, listener should not invoked"', () => {
		const obs = observable(true);
		let has_been_invoked = false;
		const listener = () => {
			has_been_invoked = true;
		};
		obs.add(listener);
		obs.remove(listener);
		obs.value = false;
		expect(has_been_invoked).toBe(false);
	});
	it('when observable.value is changed, value should have been changed"', () => {
		const obs = observable(true);
		obs.value = false;
		expect(obs.value).toBe(false);
	});
});
