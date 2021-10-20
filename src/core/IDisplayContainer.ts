import IDisplayElement from './IDisplayElement';

export default interface IDisplayContainer extends IDisplayElement {
    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    padding: number;
}
