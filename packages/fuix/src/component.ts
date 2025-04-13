export default class Component extends HTMLElement {
	public constructor() {
		super();
		this.style.borderRadius = '';
		this.style.boxSizing = 'border-box';
		this.style.display = 'inline-block';
		this.style.maxHeight = '';
		this.style.maxWidth = '';
		this.style.minHeight = '0px';
		this.style.minWidth = '0px';
		this.style.opacity = '';
	}
}
customElements.define('figui-component', Component);
