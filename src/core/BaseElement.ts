export default class BaseElement extends HTMLElement {
    public constructor() {
        super();
    }
}
customElements.define('base-element', BaseElement);