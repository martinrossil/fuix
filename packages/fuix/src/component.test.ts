import { describe, expect, it } from 'vitest';
import Application from './application';
import Component from './component';
import Container from './container';
import DropShadow from './drop-shadow';
import Hex from './hex';
import Observable from './observable';

describe('component', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-block"', () => {
			const component = new Component();
			expect(component.style.display).toBe('inline-block');
		});
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
		it('default style.cursor should be ""', () => {
			const component = new Component();
			expect(component.style.cursor).toBe('');
		});
	});
	describe('lifecycle', () => {
		describe('connectedCallback()', (): void => {
			it('given component is added to parent, parent should contain component', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(document.body.contains(component)).toBe(true);
				component.remove();
			});
		});
	});
	describe('properties', () => {
		describe('cursor', () => {
			it('default cursor should be ""', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.cursor).toBe('');
				component.remove();
			});
			it('when cursor = "pointer", cursor should be "pointer"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.cursor = 'pointer';
				expect(component.cursor).toBe('pointer');
				component.remove();
			});
			it('when cursor is set to a invalid value, a TypeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					// @ts-expect-error we are testing an invalid value
					component.cursor = 'invalid';
				}).toThrowError(TypeError);
				component.remove();
			});
		});
		describe('width', () => {
			it('default width should be "hug"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.width).toBe('hug');
				component.remove();
			});
			it('when width is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.width = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when width = 123, width should be 123', (): void => {
				const component = new Component();
				component.width = 123;
				expect(component.width).toBe(123);
			});
			it('when width = 123, style.width should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.width = 123;
				expect(component.style.width).toBe('123px');
				component.remove();
			});
		});
		describe('minHeight', () => {
			it('default minHeight should be 0', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.minHeight).toBe(0);
				component.remove();
			});
			it('when minHeight is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.minHeight = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when minHeight = 123, minHeight should be 123', (): void => {
				const component = new Component();
				component.minHeight = 123;
				expect(component.minHeight).toBe(123);
			});
			it('when minHeight = 123, style.minHeight should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.minHeight = 123;
				expect(component.style.minHeight).toBe('123px');
				component.remove();
			});
		});
		describe('maxHeight', () => {
			it('default maxHeight should be Infinity', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.maxHeight).toBe(Infinity);
				component.remove();
			});
			it('when maxHeight is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.maxHeight = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when maxHeight = 123, maxHeight should be 123', (): void => {
				const component = new Component();
				component.maxHeight = 123;
				expect(component.maxHeight).toBe(123);
			});
			it('when maxHeight = 123, style.maxHeight should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.maxHeight = 123;
				expect(component.style.maxHeight).toBe('123px');
				component.remove();
			});
		});
		describe('maxWidth', () => {
			it('default maxWidth should be Infinity', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.maxWidth).toBe(Infinity);
				component.remove();
			});
			it('when maxWidth is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.maxWidth = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when maxWidth = 123, maxWidth should be 123', (): void => {
				const component = new Component();
				component.maxWidth = 123;
				expect(component.maxWidth).toBe(123);
			});
			it('when maxWidth = 123, style.maxWidth should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.maxWidth = 123;
				expect(component.style.maxWidth).toBe('123px');
				component.remove();
			});
		});
		describe('minWidth', () => {
			it('default minWidth should be 0', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.minWidth).toBe(0);
				component.remove();
			});
			it('when minWidth is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.minWidth = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when minWidth = 123, minWidth should be 123', (): void => {
				const component = new Component();
				component.minWidth = 123;
				expect(component.minWidth).toBe(123);
			});
			it('when minWidth = 123, style.minWidth should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.minWidth = 123;
				expect(component.style.minWidth).toBe('123px');
				component.remove();
			});
		});
		describe('height', () => {
			it('default height should be "hug"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.height).toBe('hug');
				component.remove();
			});
			it('when height is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				expect(() => {
					component.height = -1;
				}).toThrowError(RangeError);
			});
			it('when height = 123, height should be 123', (): void => {
				const component = new Component();
				component.height = 123;
				expect(component.height).toBe(123);
			});
			it('when height = 123, style.height should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.height = 123;
				expect(component.style.height).toBe('123px');
				component.remove();
			});
		});
		describe('parentAutoLayout', () => {
			it('default parentAutoLayout should be "horizontal"', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.parentAutoLayout).toBe('horizontal');
				component.remove();
			});
			it('when parentAutoLayout = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.parentAutoLayout = 'Hello';
				}).toThrow(TypeError);
			});
			describe('given parent autoLayout is "horizontal"', () => {
				describe('when parent autoLayout = "vertical"', () => {
					it('children parentAutoLayout should be "vertical"', () => {
						const parent = new Container();
						const child = new Component();
						parent.addComponent(child);
						document.body.appendChild(parent);
						parent.autoLayout = 'horizontal';
						parent.autoLayout = 'vertical';
						expect(child.parentAutoLayout).toBe('vertical');
						parent.remove();
						child.remove();
					});
				});
			});
		});
		describe('opacity', () => {
			it('default opacity should be 1', () => {
				const component = new Component();
				expect(component.opacity).toBe(1);
			});
			it('when opacity = 0.5, opacity should be 0.5', () => {
				const component = new Component();
				component.opacity = 0.5;
				expect(component.opacity).toBe(0.5);
			});
			it('when opacity = 0.5, style.opacity should be "0.5"', () => {
				const component = new Component();
				component.opacity = 0.5;
				document.body.appendChild(component);
				expect(component.style.opacity).toBe('0.5');
				component.remove();
			});
			it('when opacity = -1 it should throw a RangeError', () => {
				expect(() => {
					const component = new Component();
					component.opacity = -1;
				}).toThrow(RangeError);
			});
		});
		describe('visible', () => {
			it('default visible should be true', () => {
				const component = new Component();
				expect(component.visible).toBe(true);
			});
			it('when visible === true, style.display should be "inline-block"', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.visible = false;
				component.visible = true;
				expect(component.style.display).toBe('inline-block');
				component.remove();
			});
			it('when visible === false, style.display should be "none"', () => {
				const component = new Component();
				component.visible = false;
				document.body.appendChild(component);
				expect(component.style.display).toBe('none');
				component.remove();
			});
			it('when visible is set to an Observable, and value is set to false, style.display should be "none"', () => {
				const component = new Component();
				const obs = new Observable(true);
				component.visible = obs;
				document.body.appendChild(component);
				obs.value = false;
				expect(component.style.display).toBe('none');
				component.remove();
			});
			it('when invalid visible input, it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.visible = 'invalid';
				}).toThrow(TypeError);
			});
		});
		describe('effects', () => {
			it('default effects should be an null', () => {
				const component = new Component();
				expect(component.effects).toBe(null);
			});
			it('default style.filter should be ""', () => {
				const component = new Component();
				expect(component.style.filter).toBe('');
			});
			describe('when effects = [dropShadow]', () => {
				it('effects should be [dropShadow]', () => {
					const component = new Component();
					const effects = [new DropShadow(0, 0, 0, new Hex('#123456'))];
					component.effects = effects;
					expect(component.effects).toBe(effects);
				});
			});
			describe('when effects = [dropShadow] and then null', () => {
				it('effects should be null', () => {
					const component = new Component();
					document.body.appendChild(component);
					component.effects = [new DropShadow(0, 0, 0, new Hex('#123456'))];
					component.effects = null;
					expect(component.effects).toBe(null);
					component.remove();
				});
			});
			describe('when effects = [new DropShadow(1, 2, 3, new Hex("#123456"))]', () => {
				it('style.filter should be "drop-shadow(1px 2px 3px #123456FF)"', () => {
					const component = new Component();
					component.effects = [new DropShadow(1, 2, 3, new Hex('#123456'))];
					document.body.appendChild(component);
					expect(component.style.filter).toBe('drop-shadow(rgb(18, 52, 86) 1px 2px 3px)');
					component.remove();
				});
			});
			describe('when effects = [new DropShadow(1, 2, 3, new Hex("#123456")), new DropShadow(1, 2, 3, new Hex("#123456"))]', () => {
				it('style.filter should be "drop-shadow(rgb(18, 52, 86) 1px 2px 3px) drop-shadow(rgb(18, 52, 86) 1px 2px 3px)"', () => {
					const component = new Component();
					component.effects = [
						new DropShadow(1, 2, 3, new Hex('#123456')),
						new DropShadow(1, 2, 3, new Hex('#123456')),
					];
					document.body.appendChild(component);
					expect(component.style.filter).toBe('drop-shadow(rgb(18, 52, 86) 1px 2px 3px) drop-shadow(rgb(18, 52, 86) 1px 2px 3px)');
					component.remove();
				});
			});
			it('when invalid effects input, it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.effects = 'invalid';
				}).toThrow(TypeError);
			});
		});
	});
	describe('size', () => {
		describe('given component is child of Application', () => {
			describe('given Application autoLayout = "horizontal"', () => {
				it('given width = 123, styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.width = 123;
					expect(component.style.width).toBe('123px');
					expect(component.style.flexGrow).toBe('');
					expect(component.style.flexShrink).toBe('0');
					application.remove();
				});
				it('given width = "fill", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.width = 'fill';
					application.addComponent(component);
					expect(component.style.width).toBe('');
					expect(component.style.flexGrow).toBe('1');
					application.remove();
				});
				it('given width = "hug", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.width = 'hug';
					application.addComponent(component);
					expect(component.style.width).toBe('');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
				it('given height = 123, styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 123;
					application.addComponent(component);
					expect(component.style.height).toBe('123px');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given height = "fill", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 'fill';
					application.addComponent(component);
					expect(component.style.height).toBe('');
					expect(component.style.alignSelf).toBe('stretch');
					application.remove();
				});
				it('given height = "hug", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 'hug';
					application.addComponent(component);
					expect(component.style.height).toBe('');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
			});
			describe('given Application autoLayout = "vertical"', () => {
				it('given width = 123, styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.width = 123;
					expect(component.style.width).toBe('123px');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given width = "fill", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.width = 'fill';
					expect(component.style.width).toBe('');
					expect(component.style.alignSelf).toBe('stretch');
					application.remove();
				});
				it('given width = "hug", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.width = 'hug';
					expect(component.style.width).toBe('');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given height = 123, styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.height = 123;
					expect(component.style.height).toBe('123px');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
				it('given height = "fill", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.height = 'fill';
					expect(component.style.height).toBe('');
					expect(component.style.flexGrow).toBe('1');
					application.remove();
				});
				it('given height = "hug", styles should be correct', () => {
					const application = new Application();
					application.autoLayout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.addComponent(component);
					component.height = 'hug';
					expect(component.style.height).toBe('');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
			});
		});
	});
});
