import { describe, expect, it } from 'vitest';
import Hex from './hex';
import LinearGradient from './linear-gradient';
import StopColor from './stop-color';
import Text from './text';

describe('text', () => {
	describe('properties', () => {
		describe('default style properties', () => {
			it('default style.display should be "inline-block"', () => {
				const text = new Text();
				expect(text.style.display).toBe('inline-flex');
			});
			it('default style.userSelect should be "none"', () => {
				const text = new Text();
				expect(text.style.userSelect).toBe('none');
			});
			it('default style.letterSpacing should be ""', () => {
				const text = new Text();
				expect(text.style.letterSpacing).toBe('');
			});
		});
		describe('selectable', () => {
			it('default selectable should be false', (): void => {
				const text = new Text();
				expect(text.selectable).toBe(false);
			});
			it('when selectable = true, selectable should be true', (): void => {
				const text = new Text();
				text.selectable = true;
				expect(text.selectable).toBe(true);
			});
			it('when selectable = true, style.userSelect should be ""', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.selectable = true;
				expect(text.style.userSelect).toBe('');
				text.remove();
			});
			it('when selectable = true, then selectable = false, style.userSelect should be "none"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.selectable = true;
				text.selectable = false;
				expect(text.style.userSelect).toBe('none');
				text.remove();
			});
		});
		describe('characters', () => {
			it('default characters should be ""', (): void => {
				const text = new Text();
				expect(text.characters).toBe('');
			});
			it('default textContent should be ""', (): void => {
				const text = new Text();
				expect(text.textContent).toBe('');
			});
			it('given characters is "", when characters = "Hello", characters should be "Hello"', (): void => {
				const text = new Text();
				text.characters = 'Hello';
				expect(text.characters).toBe('Hello');
			});
			it('when characters = "Hello", textContent should be "Hello"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.characters = 'Hello';
				expect(text.textContent).toBe('Hello');
				text.remove();
			});
			it('when haracters = null, it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.characters = null;
				}).toThrow(TypeError);
			});
		});
		describe('fill', () => {
			it('default fill should be null', (): void => {
				const text = new Text();
				expect(text.fill).toBe(null);
			});
			it('default style.color should be ""', (): void => {
				const text = new Text();
				expect(text.style.color).toBe('');
			});
			it('when text.fill = new Hex("#123456"), text.fill should be instance of Hex', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456');
				expect(text.fill).toBeInstanceOf(Hex);
			});
			it('when text.fill = new Hex("#123456"), text.style.color should be "rgb(18, 52, 86)"', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456');
				document.body.appendChild(text);
				expect(text.style.color).toBe('rgb(18, 52, 86)');
				text.remove();
			});
			it('when text.fill = new Hex("#123456", 0.5), text.style.color should be "rgba(18, 52, 86, 0.5)"', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456', 0.5);
				document.body.appendChild(text);
				expect(text.style.color).toBe('rgba(18, 52, 86, 0.5)');
				text.remove();
			});
			it('given text.fill = new Hex("#123456"), when text.fill = null, text.fill should be null', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fill = new Hex('#123456');
				text.fill = null;
				expect(text.fill).toBe(null);
				text.remove();
			});
			it('when text.fill = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.fill = 'Hello';
				}).toThrow(TypeError);
			});
			describe('when fill = new LinearGradient([new StopColor(new Hex("#123456"))], 0)', () => {
				it('fill should be instance of LinearGradient', () => {
					const text = new Text();
					document.body.appendChild(text);
					text.fill = new LinearGradient([new StopColor(new Hex('#123456'), 0)]);
					expect(text.fill).toBeInstanceOf(LinearGradient);
					text.remove();
				});
			});
		});
		describe('fontFamily', () => {
			it('default style.fontFamily should be ""', (): void => {
				const text = new Text();
				expect(text.style.fontFamily).toBe('');
			});
			describe('fontFamily', () => {
				it('default fontFamily should be ""', (): void => {
					const text = new Text();
					expect(text.fontFamily).toBe('');
				});
			});
			it('when fontFamily = "Inter", fontFamily should be "Inter"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fontFamily = 'Inter';
				expect(text.fontFamily).toBe('Inter');
				text.remove();
			});
			it('when fontFamily = "Inter", style.fontFamily should be "Inter"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fontFamily = 'Inter';
				expect(text.style.fontFamily).toBe('Inter');
				text.remove();
			});
			it('when text.fontFamily = null, it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.fontFamily = null;
				}).toThrow(TypeError);
			});
		});
		describe('fontWeight', () => {
			it('default style.fontWeight should be "400"', (): void => {
				const text = new Text();
				expect(text.style.fontWeight).toBe('400');
			});
			it('default fontWeight should be 400', (): void => {
				const text = new Text();
				expect(text.fontWeight).toBe(400);
			});
			it('when fontWeight = 600, fontWeight should be 600', (): void => {
				const text = new Text();
				text.fontWeight = 600;
				expect(text.fontWeight).toBe(600);
			});
			it('when fontWeight = 600, style.fontWeight should be "600"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fontWeight = 600;
				expect(text.style.fontWeight).toBe('600');
				text.remove();
			});
			it('when fontWeight = 0, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.fontWeight = 0;
				}).toThrow(RangeError);
			});
		});
		describe('fontSize', () => {
			it('default style.fontSize should be "16px"', (): void => {
				const text = new Text();
				expect(text.style.fontSize).toBe('16px');
			});
			it('default fontSize should be 16', (): void => {
				const text = new Text();
				expect(text.fontSize).toBe(16);
			});
			it('when fontSize = 32, fontSize should be 32', (): void => {
				const text = new Text();
				text.fontSize = 32;
				expect(text.fontSize).toBe(32);
			});
			it('when fontSize = 32, style.fontSize should be "32px"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fontSize = 32;
				expect(text.style.fontSize).toBe('32px');
				text.remove();
			});
			it('when fontSize = -1, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.fontSize = -1;
				}).toThrow(RangeError);
			});
		});
		describe('lineHeight', () => {
			it('default style.lineHeight should be "1.2"', (): void => {
				const text = new Text();
				expect(text.style.lineHeight).toBe('1.2');
			});
			it('default lineHeight should be "auto"', (): void => {
				const text = new Text();
				expect(text.lineHeight).toBe('auto');
			});
			it('when lineHeight = 32, lineHeight should be 32', (): void => {
				const text = new Text();
				text.lineHeight = 32;
				expect(text.lineHeight).toBe(32);
			});
			it('when lineHeight = 32, style.lineHeight should be "32px"', (): void => {
				const text = new Text();
				text.lineHeight = 32;
				document.body.appendChild(text);
				expect(text.style.lineHeight).toBe('32px');
				text.remove();
			});
			it('given lineHeight = 32, when lineHeight = "auto", lineHeight should be "auto"', (): void => {
				const text = new Text();
				text.lineHeight = 32;
				text.lineHeight = 'auto';
				expect(text.lineHeight).toBe('auto');
			});
			it('given lineHeight = 32, when lineHeight = "auto", style.lineHeight should be "1.2"', (): void => {
				const text = new Text();
				text.lineHeight = 32;
				text.lineHeight = 'auto';
				document.body.appendChild(text);
				expect(text.style.lineHeight).toBe('1.2');
				text.remove();
			});
			it('when lineHeight = "Hello", it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.lineHeight = 'Hello';
				}).toThrow(RangeError);
			});
		});
		describe('textAlignVertical', () => {
			it('default style.alignItems should be "flex-start"', (): void => {
				const text = new Text();
				expect(text.style.alignItems).toBe('flex-start');
			});
			it('default textAlignVertical should be "top"', (): void => {
				const text = new Text();
				expect(text.textAlignVertical).toBe('top');
			});
			it('given textAlignVertical = "middle", when textAlignVertical = "top", style.alignItems should be "flex-start"', (): void => {
				const text = new Text();
				text.textAlignVertical = 'middle';
				text.textAlignVertical = 'top';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('flex-start');
				text.remove();
			});
			it('when textAlignVertical = "middle", textAlignVertical should be "middle"', (): void => {
				const text = new Text();
				text.textAlignVertical = 'middle';
				expect(text.textAlignVertical).toBe('middle');
			});
			it('when textAlignVertical = "middle", style.alignItems should be "center"', (): void => {
				const text = new Text();
				text.textAlignVertical = 'middle';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('center');
				text.remove();
			});
			it('when textAlignVertical = "bottom", textAlignVertical should be "bottom"', (): void => {
				const text = new Text();
				text.textAlignVertical = 'bottom';
				expect(text.textAlignVertical).toBe('bottom');
			});
			it('when textAlignVertical = "bottom", style.alignItems should be "flex-end"', (): void => {
				const text = new Text();
				text.textAlignVertical = 'bottom';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('flex-end');
				text.remove();
			});
			it('when textAlignVertical = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.textAlignVertical = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('textAlignHorizontal', () => {
			it('default style.textAlign should be "start"', (): void => {
				const text = new Text();
				expect(text.style.textAlign).toBe('start');
			});
			it('default textAlignHorizontal should be "left"', (): void => {
				const text = new Text();
				expect(text.textAlignHorizontal).toBe('left');
			});
			it('when textAlignHorizontal = "center", textAlignHorizontal should be "center"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'center';
				expect(text.textAlignHorizontal).toBe('center');
			});
			it('when textAlignHorizontal = "center", style.textAlign should be "center"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'center';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('center');
				text.remove();
			});
			it('when textAlignHorizontal = "left", textAlignHorizontal should be "left"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'center';
				text.textAlignHorizontal = 'left';
				expect(text.textAlignHorizontal).toBe('left');
			});
			it('when textAlignHorizontal = "left", style.textAlign should be "start"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'center';
				text.textAlignHorizontal = 'left';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('start');
				text.remove();
			});
			it('when textAlignHorizontal = "right", textAlignHorizontal should be "right"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'right';
				expect(text.textAlignHorizontal).toBe('right');
			});
			it('when textAlignHorizontal = "right", style.textAlign should be "end"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'right';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('end');
				text.remove();
			});
			it('when textAlignHorizontal = "justified", textAlignHorizontal should be "justified"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'justified';
				expect(text.textAlignHorizontal).toBe('justified');
			});
			it('when textAlignHorizontal = "justified", style.textAlign should be "justify"', (): void => {
				const text = new Text();
				text.textAlignHorizontal = 'justified';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('justify');
				text.remove();
			});
			it('when textAlignHorizontal = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.textAlignHorizontal = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('truncateText', () => {
			it('default #text_content.style.overflow should be "visible"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.overflow).toBe('visible');
				}
			});
			it('default #text_content.style.display should be "inline-block"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.display).toBe('inline-block');
				}
			});
			it('default #text_content.style.webkitBoxOrient should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitBoxOrient).toBe('');
				}
			});
			it('default truncateText should be false', (): void => {
				const text = new Text();
				expect(text.truncateText).toBe(false);
			});
			it('when truncateText = true, truncateText should be true', (): void => {
				const text = new Text();
				text.truncateText = true;
				expect(text.truncateText).toBe(true);
			});
			it('when truncateText = true and then false, truncateText should be false', (): void => {
				const text = new Text();
				text.truncateText = true;
				text.truncateText = false;
				expect(text.truncateText).toBe(false);
			});
			describe('given truncateText = true', (): void => {
				it('#text_content.style.overflow should be "hidden"', (): void => {
					const text = new Text();
					text.truncateText = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.overflow).toBe('hidden');
					}
					text.remove();
				});
				it('#text_content.style.display should be "-webkit-box"', (): void => {
					const text = new Text();
					text.truncateText = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.display).toBe('-webkit-box');
					}
					text.remove();
				});
				it('#text_content.style.webkitBoxOrient should be "vertical"', (): void => {
					const text = new Text();
					text.truncateText = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitBoxOrient).toBe('vertical');
					}
					text.remove();
				});
				it('#text_content.style.webkitLineClamp should be "1"', (): void => {
					const text = new Text();
					text.truncateText = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitLineClamp).toBe('1');
					}
					text.remove();
				});
			});
			describe('given truncateText = true and truncateText = false', (): void => {
				it('#text_content.style.overflow should be "visible"', (): void => {
					const text = new Text();
					text.truncateText = true;
					text.truncateText = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.overflow).toBe('visible');
					}
					text.remove();
				});
				it('#text_content.style.display should be "inline-block"', (): void => {
					const text = new Text();
					text.truncateText = true;
					text.truncateText = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.display).toBe('inline-block');
					}
					text.remove();
				});
				it('#text_content.style.webkitBoxOrient should be ""', (): void => {
					const text = new Text();
					text.truncateText = true;
					text.truncateText = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitBoxOrient).toBe('');
					}
					text.remove();
				});
			});
			it('when truncateText = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.truncateText = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('maxLines', () => {
			it('default maxLines should be 1', (): void => {
				const text = new Text();
				expect(text.maxLines).toBe(1);
			});
			it('default #text_content.style.webkitLineClamp should be "1"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitLineClamp).toBe('1');
				}
			});
			it('when maxLines = 2, maxLines should be 2', (): void => {
				const text = new Text();
				text.maxLines = 2;
				expect(text.maxLines).toBe(2);
			});
			it('when maxLines = 2, #text_content.style.webkitLineClamp should be "2"', (): void => {
				const text = new Text();
				text.maxLines = 2;
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitLineClamp).toBe('2');
				}
				text.remove();
			});
			it('when maxLines = 0, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.maxLines = 0;
				}).toThrow(RangeError);
			});
		});

		describe('letterSpacing', () => {
			it('default letterSpacing should be 0', (): void => {
				const text = new Text();
				expect(text.letterSpacing).toBe(0);
			});
			it('when letterSpacing = 1, letterSpacing should be 1', (): void => {
				const text = new Text();
				text.letterSpacing = 1;
				expect(text.letterSpacing).toBe(1);
			});
			it('when letterSpacing = -1, letterSpacing should be -1', (): void => {
				const text = new Text();
				text.letterSpacing = -1;
				expect(text.letterSpacing).toBe(-1);
			});
			it('when letterSpacing = 1, style.letterSpacing should be "1px"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.letterSpacing = 1;
				expect(text.style.letterSpacing).toBe('1px');
				text.remove();
			});
			it('when letterSpacing = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.letterSpacing = 'Hello';
				}).toThrow(TypeError);
			});
		});

		describe('verticalTrim', () => {
			it('default verticalTrim should be "standard"', (): void => {
				const text = new Text();
				expect(text.verticalTrim).toBe('standard');
			});
			it('default #text_content.style.textBoxTrim should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxTrim).toBe('');
				}
			});
			it('default style.textBoxEdge should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxEdge).toBe('');
				}
			});
			it('when verticalTrim = "cap", verticalTrim should be "cap"', (): void => {
				const text = new Text();
				text.verticalTrim = 'cap';
				expect(text.verticalTrim).toBe('cap');
			});
			it('when verticalTrim = "cap", #text_content.style.textBoxTrim should be "trim-both"', (): void => {
				const text = new Text();
				text.verticalTrim = 'cap';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxTrim).toBe('trim-both');
				}
				text.remove();
			});
			it('when verticalTrim = "cap", #text_content.style.textBoxEdge should be "cap alphabetic"', (): void => {
				const text = new Text();
				text.verticalTrim = 'cap';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxEdge).toBe('cap alphabetic');
				}
				text.remove();
			});
			it('when verticalTrim = "standard", verticalTrim should be "standard"', (): void => {
				const text = new Text();
				text.verticalTrim = 'cap';
				text.verticalTrim = 'standard';
				expect(text.verticalTrim).toBe('standard');
			});
			it('when verticalTrim = "standard", #text_content.style.textBoxTrim should be ""', (): void => {
				const text = new Text();
				text.verticalTrim = 'standard';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxTrim).toBe('');
				}
				text.remove();
			});
			it('when verticalTrim = "standard", #text_content.style.textBoxEdge should be ""', (): void => {
				const text = new Text();
				text.verticalTrim = 'cap';
				text.verticalTrim = 'standard';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.textBoxEdge).toBe('');
				}
				text.remove();
			});
			it('when verticalTrim = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.verticalTrim = 'Hello';
				}).toThrow(TypeError);
			});
		});
	});
});
