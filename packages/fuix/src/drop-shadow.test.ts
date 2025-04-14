import { describe, expect, it } from 'vitest';
import DropShadow from './drop-shadow';
import Hex from './hex';

describe('drop-shadow', () => {
	it('should be able to instantiate DropShadow', () => {
		const dropShadow = new DropShadow(0, 0, 0, new Hex('#123456'));
		expect(dropShadow).toBeInstanceOf(DropShadow);
	});
	describe('given new DropShadow(0, 0, 0, new Hex("#123456"))', () => {
		it('toStyleString() should return "drop-shadow(0px 0px 0px #123456FF)"', () => {
			const dropShadow = new DropShadow(0, 0, 0, new Hex('#123456'));
			expect(dropShadow.toStyleString()).toBe('drop-shadow(0px 0px 0px #123456FF)');
		});
	});
	describe('given new DropShadow(10, 10, 10, new Hex("#123456"))', () => {
		it('toStyleString() should return "drop-shadow(10px 10px 10px #123456FF)"', () => {
			const dropShadow = new DropShadow(10, 10, 10, new Hex('#123456'));
			expect(dropShadow.toStyleString()).toBe('drop-shadow(10px 10px 10px #123456FF)');
		});
	});
	describe('given new DropShadow(-10, -10, 10, new Hex("#123456"))', () => {
		it('toStyleString() should return "drop-shadow(-10px -10px 10px #123456FF)"', () => {
			const dropShadow = new DropShadow(-10, -10, 10, new Hex('#123456'));
			expect(dropShadow.toStyleString()).toBe('drop-shadow(-10px -10px 10px #123456FF)');
		});
	});
	it('when invalid x input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new DropShadow('invalid');
		}).toThrow(TypeError);
	});
	it('when invalid y input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new DropShadow(0, 'invalid');
		}).toThrow(TypeError);
	});
	it('when invalid blur input, it should throw a RangeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new DropShadow(0, 0, -1);
		}).toThrow(RangeError);
	});
	it('when invalid color input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new DropShadow(0, 0, 0, 'invalid');
		}).toThrow(TypeError);
	});
});
