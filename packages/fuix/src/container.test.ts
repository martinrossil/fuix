import { describe, expect, it } from 'vitest';
import Container from './container';
import Hex from './hex';
import LinearGradient from './linear-gradient';
import { observable } from './observable';
import StopColor from './stop-color';
import Stroke from './stroke';

describe('container', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-flex"', () => {
			const container = new Container();
			expect(container.style.display).toBe('inline-flex');
		});
		it('default style.flexDirection should be "row"', () => {
			const container = new Container();
			expect(container.style.flexDirection).toBe('row');
		});
		it('default style.justifyContent should be "flex-start"', () => {
			const container = new Container();
			expect(container.style.justifyContent).toBe('flex-start');
		});
		it('default style.alignItems should be "flex-start"', () => {
			const container = new Container();
			expect(container.style.alignItems).toBe('flex-start');
		});
		it('default style.columnGap should be ""', () => {
			const container = new Container();
			expect(container.style.columnGap).toBe('');
		});
		it('default style.rowGap should be ""', () => {
			const container = new Container();
			expect(container.style.rowGap).toBe('');
		});
		it('default style.padding should be ""', () => {
			const container = new Container();
			expect(container.style.padding).toBe('');
		});
		it('default style.outline should be ""', () => {
			const container = new Container();
			expect(container.style.outline).toBe('');
		});
		it('default style.outlineOffset should be ""', () => {
			const container = new Container();
			expect(container.style.outlineOffset).toBe('');
		});
	});
	describe('properties', () => {
		describe('padding', () => {
			it('default paddingHorizontal should be 0', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.paddingHorizontal).toBe(0);
				container.remove();
			});
			it('default paddingVertical should be 0', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.paddingVertical).toBe(0);
				container.remove();
			});
			it('when paddingHorizontal = 32, paddingHorizontal should be 32', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.paddingHorizontal = 32;
				expect(container.paddingHorizontal).toBe(32);
				container.remove();
			});
			it('when paddingHorizontal = 32, style.paddingLeft and style.paddingRight should be 32px', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.paddingHorizontal = 32;
				expect(container.style.paddingLeft).toBe('32px');
				expect(container.style.paddingRight).toBe('32px');
				container.remove();
			});
			it('when paddingVertical = 32, paddingVertical should be 32', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.paddingVertical = 32;
				expect(container.paddingVertical).toBe(32);
				container.remove();
			});
			it('when paddingVertical = 32, style.paddingTop and style.paddingBottom should be 32px', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.paddingVertical = 32;
				expect(container.style.paddingTop).toBe('32px');
				expect(container.style.paddingBottom).toBe('32px');
				container.remove();
			});
			it('when paddingHorizontal = -1 it should throw a RangeError', () => {
				expect(() => {
					const container = new Container();
					container.paddingHorizontal = -1;
				}).toThrow(RangeError);
			});
			it('when paddingVertical = -1 it should throw a RangeError', () => {
				expect(() => {
					const container = new Container();
					container.paddingVertical = -1;
				}).toThrow(RangeError);
			});
		});
		describe('autoLayout', () => {
			it('default autoLayout should be "horizontal"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.autoLayout).toBe('horizontal');
				container.remove();
			});
			it('when autoLayout = "horizontal", autoLayout should be "horizontal"', (): void => {
				const container = new Container();
				container.autoLayout = 'horizontal';
				document.body.appendChild(container);
				expect(container.autoLayout).toBe('horizontal');
				container.remove();
			});
			it('when autoLayout = "horizontal", style.flexDirection should be "row" and style.flexWrap should be ""', (): void => {
				const container = new Container();
				container.autoLayout = 'horizontal';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('row');
				expect(container.style.flexWrap).toBe('');
				container.remove();
			});
			it('when autoLayout = "vertical", autoLayout should be "vertical"', (): void => {
				const container = new Container();
				container.autoLayout = 'vertical';
				document.body.appendChild(container);
				expect(container.autoLayout).toBe('vertical');
				container.remove();
			});
			it('when autoLayout = "vertical", style.flexDirection should be "column" and style.flexWrap should be ""', (): void => {
				const container = new Container();
				container.autoLayout = 'vertical';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('column');
				expect(container.style.flexWrap).toBe('');
				container.remove();
			});
			it('when autoLayout = "wrap", autoLayout should be "wrap"', (): void => {
				const container = new Container();
				container.autoLayout = 'wrap';
				document.body.appendChild(container);
				expect(container.autoLayout).toBe('wrap');
				container.remove();
			});
			it('when autoLayout = "wrap", style.flexDirection should be "row", style.flexWrap should be "wrap" and style.alignContent should be "flex-start"', (): void => {
				const container = new Container();
				container.autoLayout = 'wrap';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('row');
				expect(container.style.flexWrap).toBe('wrap');
				container.remove();
			});
			it('when autoLayout = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.autoLayout = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('alignment', () => {
			it('default alignment should be "top_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.alignment).toBe('top_left');
				container.remove();
			});
			it('when alignment = "top_left", alignment should be "top_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_left';
				expect(container.alignment).toBe('top_left');
				container.remove();
			});
			it('when alignment = "top_center", alignment should be "top_center"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_center';
				expect(container.alignment).toBe('top_center');
				container.remove();
			});
			it('when alignment = "top_right", alignment should be "top_right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_right';
				expect(container.alignment).toBe('top_right');
				container.remove();
			});
			it('when alignment = "left", alignment should be "left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'left';
				expect(container.alignment).toBe('left');
				container.remove();
			});
			it('when alignment = "right", alignment should be "right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'right';
				expect(container.alignment).toBe('right');
				container.remove();
			});
			it('when alignment = "bottom_left", alignment should be "bottom_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_left';
				expect(container.alignment).toBe('bottom_left');
				container.remove();
			});
			it('when alignment = "bottom_center", alignment should be "bottom_center"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_center';
				expect(container.alignment).toBe('bottom_center');
				container.remove();
			});
			it('when alignment = "bottom_right", alignment should be "bottom_right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_right';
				expect(container.alignment).toBe('bottom_right');
				container.remove();
			});
			it('when alignment = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.alignment = 'Hello';
				}).toThrow(TypeError);
			});
			describe('alignment styles', () => {
				describe('given autoLayout = "horizontal"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'horizontal';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					describe('given gapHorizontal = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'top_left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'top_center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'top_right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'bottom_left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'bottom_center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'horizontal';
							container.alignment = 'bottom_right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
				});
				describe('given autoLayout = "wrap"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'wrap';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					describe('given gapHorizontal = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_left';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_center';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_right';
							container.gapHorizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
					describe('given gapVertical = "auto", style.alignContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'top_right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'wrap';
							container.alignment = 'bottom_right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
					});
				});
				describe('given autoLayout = "vertical"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.autoLayout = 'vertical';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					describe('given gapVertical = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'top_left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'top_center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'top_right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'bottom_left';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'bottom_center';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.autoLayout = 'vertical';
							container.alignment = 'bottom_right';
							container.gapVertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
				});
			});
		});
		describe('gapVertical', () => {
			it('default gapVertical should be 0', () => {
				const container = new Container();
				expect(container.gapVertical).toBe(0);
			});
			it('when gapVertical = 123, gapVertical should be 123', () => {
				const container = new Container();
				container.gapVertical = 123;
				expect(container.gapVertical).toBe(123);
			});
			it('when gapVertical = "auto", gapVertical should be "auto"', () => {
				const container = new Container();
				container.gapVertical = 'auto';
				expect(container.gapVertical).toBe('auto');
			});
			it('when gapVertical = 123, style.rowGap should be 123px', () => {
				const container = new Container();
				container.autoLayout = 'vertical';
				container.gapVertical = 123;
				document.body.appendChild(container);
				expect(container.style.rowGap).toBe('123px');
				container.remove();
			});
			it('when gapVertical = "auto", style.rowGap should be ""', () => {
				const container = new Container();
				container.gapVertical = 'auto';
				document.body.appendChild(container);
				expect(container.style.rowGap).toBe('');
				container.remove();
			});
			describe('given autoLayout = "vertical"', () => {
				it('when gapVertical = "auto", style.justifyContent should be "space-between"', () => {
					const container = new Container();
					container.autoLayout = 'vertical';
					container.gapVertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.justifyContent).toBe('space-between');
					container.remove();
				});
			});
			describe('given autoLayout = "horizontal"', () => {
				it('when gapVertical !== "auto", style.rowGap should be ""', () => {
					const container = new Container();
					container.gapVertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('');
					container.remove();
				});
			});
			describe('given autoLayout = "wrap"', () => {
				it('when gapVertical !== "auto", style.rowGap should be ""', () => {
					const container = new Container();
					container.autoLayout = 'wrap';
					container.gapVertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('');
					container.remove();
				});
				it('when gapVertical = "auto", style.alignContent should be "space-between"', () => {
					const container = new Container();
					container.autoLayout = 'wrap';
					container.gapVertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.alignContent).toBe('space-between');
					container.remove();
				});
				it('when gapVertical = 32, style.rowGap should be "32px"', () => {
					const container = new Container();
					container.autoLayout = 'wrap';
					container.gapVertical = 32;
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('32px');
					container.remove();
				});
			});
			it('when gapVertical = -1 it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					container.gapVertical = -1;
				}).toThrow(TypeError);
			});
		});
		describe('gapHorizontal', () => {
			it('default gapHorizontal should be 0', () => {
				const container = new Container();
				expect(container.gapHorizontal).toBe(0);
			});
			it('when gapHorizontal = 123, gapHorizontal should be 123', () => {
				const container = new Container();
				container.gapHorizontal = 123;
				expect(container.gapHorizontal).toBe(123);
			});
			it('when gapHorizontal = "auto", gapHorizontal should be "auto"', () => {
				const container = new Container();
				container.gapHorizontal = 'auto';
				expect(container.gapHorizontal).toBe('auto');
			});
			it('when gapHorizontal = 123, style.columnGap should be 123px', () => {
				const container = new Container();
				container.gapHorizontal = 123;
				document.body.appendChild(container);
				expect(container.style.columnGap).toBe('123px');
				container.remove();
			});
			it('when gapHorizontal = "auto", style.columnGap should be ""', () => {
				const container = new Container();
				container.gapHorizontal = 'auto';
				document.body.appendChild(container);
				expect(container.style.columnGap).toBe('');
				container.remove();
			});
			describe('given autoLayout = "horizontal"', () => {
				it('when gapHorizontal = "auto", style.justifyContent should be "space-between"', () => {
					const container = new Container();
					container.gapHorizontal = 'auto';
					document.body.appendChild(container);
					expect(container.style.justifyContent).toBe('space-between');
					container.remove();
				});
			});
			describe('given autoLayout = "vertical"', () => {
				it('when gapHorizontal !== "auto", style.columnGap should be ""', () => {
					const container = new Container();
					container.autoLayout = 'vertical';
					container.gapHorizontal = 123;
					document.body.appendChild(container);
					expect(container.style.columnGap).toBe('');
					container.remove();
				});
			});
			it('when gapHorizontal = -1 it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					container.gapHorizontal = -1;
				}).toThrow(TypeError);
			});
		});
		describe('fill', () => {
			it('default style.background should be ""', () => {
				const container = new Container();
				expect(container.style.background).toBe('');
			});
			it('default fill should be null', () => {
				const container = new Container();
				expect(container.fill).toBe(null);
			});
			it('when fill = new Hex("#123456"), fill should be instance of Hex', () => {
				const container = new Container();
				container.fill = new Hex('#123456');
				expect(container.fill).toBeInstanceOf(Hex);
			});
			it('when fill = null, style.background should be ""', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.fill = null;
				expect(container.style.background).toBe('');
				container.remove();
			});
			it('when fill = new Hex("#123456"), style.background should be "rgb(18, 52, 86)"', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.fill = new Hex('#123456');
				expect(container.style.background).toBe('rgb(18, 52, 86)');
				container.remove();
			});
			describe('when fill = new LinearGradient([new StopColor(new Hex("#123456"))], 0)', () => {
				it('fill should be instance of LinearGradient', () => {
					const container = new Container();
					container.fill = new LinearGradient([new StopColor(new Hex('#123456'), 0)]);
					expect(container.fill).toBeInstanceOf(LinearGradient);
				});
			});
			it('when fill = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.fill = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('cornerRadius', () => {
			it('default cornerRadius should be 0', () => {
				const container = new Container();
				expect(container.cornerRadius).toBe(0);
			});
			it('when cornerRadius = 16, cornerRadius should be 16', () => {
				const container = new Container();
				container.cornerRadius = 16;
				expect(container.cornerRadius).toBe(16);
			});
			it('when cornerRadius = 16, style.borderRadius should be "16px"', () => {
				const container = new Container();
				container.cornerRadius = 16;
				document.body.appendChild(container);
				expect(container.style.borderRadius).toBe('16px');
				container.remove();
			});
		});
		describe('stroke', () => {
			it('default stroke should be null', () => {
				const container = new Container();
				expect(container.stroke).toBe(null);
			});
			it('when stroke = new Stroke(new Hex("#123456"), stroke should be instance of Stroke)', () => {
				const container = new Container();
				container.stroke = new Stroke(new Hex('#123456'));
				expect(container.stroke).toBeInstanceOf(Stroke);
			});
			it('when stroke = new Stroke(new Hex("#123456"), style.outline should be "rgb(18, 52, 86) solid 1px")', () => {
				const container = new Container();
				container.stroke = new Stroke(new Hex('#123456'));
				document.body.appendChild(container);
				expect(container.style.outline).toBe('rgb(18, 52, 86) solid 1px');
				container.remove();
			});
			it('when stroke = new Stroke(new Hex("#123456"), style.outlineOffset should be "-0px")', () => {
				const container = new Container();
				container.stroke = new Stroke(new Hex('#123456'));
				document.body.appendChild(container);
				expect(container.style.outlineOffset).toBe('0px');
				container.remove();
			});
			describe('when stroke = new Stroke(new Hex("#123456") and then stroke = null', () => {
				it('style.outline should be "")', () => {
					const container = new Container();
					container.stroke = new Stroke(new Hex('#123456'));
					document.body.appendChild(container);
					container.stroke = null;
					expect(container.style.outline).toBe('');
					container.remove();
				});
				it('style.outlineOffset should be "")', () => {
					const container = new Container();
					container.stroke = new Stroke(new Hex('#123456'));
					document.body.appendChild(container);
					container.stroke = null;
					expect(container.style.outlineOffset).toBe('');
					container.remove();
				});
			});
			it('when invalid stroke input, it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.stroke = true;
				}).toThrow(TypeError);
			});
		});
		describe('visible', () => {
			it('default visible should be true', () => {
				const container = new Container();
				expect(container.visible).toBe(true);
			});
			it('when visible === true, style.display should be "inline-flex"', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.visible = false;
				container.visible = true;
				expect(container.style.display).toBe('inline-flex');
				container.remove();
			});
			it('when visible === false, style.display should be "none"', () => {
				const container = new Container();
				container.visible = false;
				document.body.appendChild(container);
				expect(container.style.display).toBe('none');
				container.remove();
			});
			it('when visible is set to an Observable, and value is set to false, style.display should be "none"', () => {
				const container = new Container();
				const obs = observable(true);
				container.visible = obs;
				document.body.appendChild(container);
				obs.value = false;
				expect(container.style.display).toBe('none');
				container.remove();
			});
			it('when invalid visible input, it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.visible = 'invalid';
				}).toThrow(TypeError);
			});
		});
		describe('clipContent', () => {
			it('default style.overflow should be ""', () => {
				const container = new Container();
				expect(container.style.overflow).toBe('');
			});
			it('default clipContent should be false', () => {
				const container = new Container();
				expect(container.clipContent).toBe(false);
			});
			it('when clipContent === true, clipContent should be true', () => {
				const container = new Container();
				container.clipContent = true;
				expect(container.clipContent).toBe(true);
			});
			it('when clipContent = true, then clipContent = false, clipContent should be false', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.clipContent = true;
				container.clipContent = false;
				expect(container.clipContent).toBe(false);
				container.remove();
			});
			it('when clipContent === false, clipContent should be false', () => {
				const container = new Container();
				container.clipContent = true;
				container.clipContent = false;
				expect(container.clipContent).toBe(false);
			});
			it('when clipContent === true, style.overflow should be "hidden"', () => {
				const container = new Container();
				container.clipContent = true;
				document.body.appendChild(container);
				expect(container.style.overflow).toBe('hidden');
				container.remove();
			});
			it('when clipContent = "Hello", it should throw a TypeError', () => {
				const container = new Container();
				expect(() => {
					// @ts-expect-error we are testing invalid value
					container.clipContent = 'Hello';
				}).toThrowError(TypeError);
			});
			it('when an instance of a non Component, it should throw a TypeError', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(() => {
					const div = document.createElement('div');
					// @ts-expect-error we are testing invalid value
					container.addComponent(div);
				}).toThrowError(TypeError);
				container.remove();
			});
		});
	});
	describe('methods', () => {
		describe('addComponent()', () => {
			it('when an instance of a non Component, it should throw a TypeError', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(() => {
					const div = document.createElement('div');
					// @ts-expect-error we are testing invalid value
					container.addComponent(div);
				}).toThrowError(TypeError);
				container.remove();
			});
			it('when a container is added, it should contain this container', () => {
				const parent = new Container();
				const child = new Container();
				document.body.appendChild(parent);
				parent.addComponent(child);
				expect(parent.contains(child)).toBe(true);
				child.remove();
				parent.remove();
			});
			it('when an existing child is added, it should throw a TypeError', () => {
				expect(() => {
					const parent = new Container();
					const child = new Container();
					parent.addComponent(child);
					parent.addComponent(child);
				}).toThrow(TypeError);
			});
		});
	});
});
