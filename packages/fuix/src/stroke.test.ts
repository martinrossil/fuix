import { describe, expect, it } from 'vitest';
import Hex from './hex';
import Stroke from './stroke';

describe('stroke', () => {
	it('should be able to instantiate Stroke', () => {
		const stroke = new Stroke(new Hex('#123456'));
		expect(stroke).toBeInstanceOf(Stroke);
	});
	describe('when new Stroke(new Hex("#123456"))', () => {
		it('toStyleString() should return "1px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'));
			expect(stroke.toStyleString()).toBe('1px solid #123456FF');
		});
		it('toStyleOffsetString() should return "0px"', () => {
			const stroke = new Stroke(new Hex('#123456'));
			expect(stroke.toStyleOffsetString()).toBe('0px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 1, "center", "dash")', () => {
		it('toStyleString() should return "1px dashed #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 1, 'center', 'dash');
			expect(stroke.toStyleString()).toBe('1px dashed #123456FF');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2)', () => {
		it('toStyleString() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2);
			expect(stroke.toStyleString()).toBe('2px solid #123456FF');
		});
		it('toStyleOffsetString() should return "0px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2);
			expect(stroke.toStyleOffsetString()).toBe('0px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2, "inside")', () => {
		it('toStyleString() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'inside');
			expect(stroke.toStyleString()).toBe('2px solid #123456FF');
		});
		it('toStyleOffsetString() should return "-2px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'inside');
			expect(stroke.toStyleOffsetString()).toBe('-2px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2, "outside")', () => {
		it('toStyleString() should return "2px solid #123456FF"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'outside');
			expect(stroke.toStyleString()).toBe('2px solid #123456FF');
		});
		it('toStyleOffsetString() should return "0px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'outside');
			expect(stroke.toStyleOffsetString()).toBe('0px');
		});
	});
	describe('when new Stroke(new Hex("#123456"), 2, "center")', () => {
		it('toStyleOffsetString() should return "-1px"', () => {
			const stroke = new Stroke(new Hex('#123456'), 2, 'center');
			expect(stroke.toStyleOffsetString()).toBe('-1px');
		});
	});
	it('when invalid color input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke('invalid');
		}).toThrow(TypeError);
	});
	it('when invalid weight input, it should throw a RangeError', () => {
		expect(() => {
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), -1);
		}).toThrow(RangeError);
	});
	it('when invalid position input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), 1, 'invalid');
		}).toThrow(TypeError);
	});
	it('when invalid style input, it should throw a TypeError', () => {
		expect(() => {
			// @ts-expect-error we are testing invalid value
			// eslint-disable-next-line no-new
			new Stroke(new Hex('#123456'), 1, 'center', 'invalid');
		}).toThrow(TypeError);
	});
});
