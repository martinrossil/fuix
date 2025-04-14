import { describe, expect, it } from 'vitest';
import Hex from './hex';
import LinearGradient from './linear-gradient';
import StopColor from './stop-color';

describe('linear-gradient', () => {
	it('should be able to instantiate LinearGradient"', () => {
		const hex = new Hex('#123456');
		const stop_color = new StopColor(hex, 0);
		const linear_gradient = new LinearGradient([stop_color]);
		expect(linear_gradient).toBeInstanceOf(LinearGradient);
	});
	describe('when new LinearGradient([new StopColor(new Hex("#123456"))])', () => {
		it('toStyleString() should return "linear-gradient(0deg, #123456FF)"', () => {
			const linear_gradient = new LinearGradient([new StopColor(new Hex('#123456'), 0)]);
			expect(linear_gradient.toStyleString()).toBe('linear-gradient(0deg, #123456FF 0%)');
		});
	});
	describe('when new LinearGradient([new StopColor(new Hex("#123456")), new StopColor(new Hex("#654321"))])', () => {
		it('toStyleString() should return "linear-gradient(-180deg, #123456FF, #654321FF)"', () => {
			const linear_gradient = new LinearGradient([
				new StopColor(new Hex('#123456'), 0),
				new StopColor(new Hex('#654321'), 100),
			]);
			expect(linear_gradient.toStyleString()).toBe('linear-gradient(-180deg, #123456FF 0%, #654321FF 100%)');
		});
	});
	describe('when new LinearGradient([new StopColor(new Hex("#123456")), new StopColor(new Hex("#654321"))], 180)', () => {
		it('toStyleString() should return "linear-gradient(0deg, #123456FF, #654321FF)"', () => {
			const linear_gradient = new LinearGradient([
				new StopColor(new Hex('#123456'), 0),
				new StopColor(new Hex('#654321'), 100),
			], 180);
			expect(linear_gradient.toStyleString()).toBe('linear-gradient(0deg, #123456FF 0%, #654321FF 100%)');
		});
	});
	describe('when new LinearGradient([new StopColor(new Hex("#123456"), 0), new StopColor(new Hex("#654321"), 100)], -180)', () => {
		it('toStyleString() should return "linear-gradient(0deg, #123456FF, #654321FF)"', () => {
			const linear_gradient = new LinearGradient([
				new StopColor(new Hex('#123456'), 0),
				new StopColor(new Hex('#654321'), 100),
			], -180);
			expect(linear_gradient.toStyleString()).toBe('linear-gradient(0deg, #123456FF 0%, #654321FF 100%)');
		});
	});
	it('when invalid stops input, it should throw a TypeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new LinearGradient([]);
		}).toThrow(TypeError);
	});
	it('when invalid stop input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new LinearGradient([null]);
		}).toThrow(TypeError);
	});
	it('when invalid degree input, it should throw a RangeError', () => {
		expect(() => {
			const hex = new Hex('#123456');
			const stop_color = new StopColor(hex, 0);
			// eslint-disable-next-line no-new
			new LinearGradient([stop_color], -181);
		}).toThrow(RangeError);
	});
});
