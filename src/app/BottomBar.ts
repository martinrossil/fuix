import { Display } from '../consts/Display';
import { Position } from '../consts/Position';
import Container from '../core/Container';

export default class BottomBar extends Container {
    public constructor() {
        super();
        this.display = Display.FLEX;
        this.position = Position.FIXED;
        this.backgroundColor = 'blue';
        this.height = 64;
        this.widthPercent = 100;
        this.bottom = 0;
    }
}
customElements.define('bottom-bar', BottomBar);
