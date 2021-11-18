import IComponent from './IComponent';

export default interface IDisplayContainer extends IComponent {
    /**
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding} for syntax
     */
    padding: number;
}
