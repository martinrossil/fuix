import { Position } from '../consts/Position';
import Container from '../core/Container';

export default class TopBar extends Container {
    public constructor() {
        super();
        this.position = Position.FIXED;
        this.backgroundColor = 'blue';
        this.height = 64;
        this.widthPercent = 100;
        this.top = 0;
    }
}
customElements.define('top-bar', TopBar);
