import { describe, expect, it } from 'vitest';
import Component from './component';

describe('component', () => {
	describe('default style properties', () => {
		describe('various styles', () => {
			it('default style.display should be "inline-block"', () => {
				const component = new Component();
				expect(component.style.display).toBe('inline-block');
			});
			it('default style.opacity should be ""', () => {
				const component = new Component();
				expect(component.style.opacity).toBe('');
			});
			it('default style.borderRadius should be ""', () => {
				const component = new Component();
				expect(component.style.borderRadius).toBe('');
			});
			it('default style.boxSizing should be "border-box"', () => {
				const component = new Component();
				expect(component.style.boxSizing).toBe('border-box');
			});
		});
		describe('width and height', () => {
			it('default style.minWidth should be "0px"', () => {
				const component = new Component();
				expect(component.style.minWidth).toBe('0px');
			});
			it('default style.minHeight should be "0px"', () => {
				const component = new Component();
				expect(component.style.minHeight).toBe('0px');
			});
			it('default style.maxHeight should be ""', () => {
				const component = new Component();
				expect(component.style.maxHeight).toBe('');
			});
			it('default style.maxWidth should be ""', () => {
				const component = new Component();
				expect(component.style.maxWidth).toBe('');
			});
		});
	});
});
