import Container from '../core/Container';

export default class BottomBar extends Container {
    public constructor() {
        super();
        this.display = 'flex';
        this.position = 'fixed';
        this.backgroundColor = 'blue';
        this.height = 64;
        this.widthPercent = 100;
        this.bottom = 0;
    }
}
customElements.define('bottom-bar', BottomBar);
