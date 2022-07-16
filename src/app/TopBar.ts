import Container from '../core/Container';

export default class TopBar extends Container {
    public constructor() {
        super();
        this.position = 'fixed';
        this.backgroundColor = 'blue';
        this.height = 64;
        this.widthPercent = 100;
        this.top = 0;
    }
}
customElements.define('top-bar', TopBar);
