import Component from '../core/Component';

export default class ColorSquare extends Component {
    public constructor(backgroundColor = 'red', width = 300, height = 300) {
        super();
        this.backgroundColor = backgroundColor;
        this.width = width;
        this.height = height;
    }
}
customElements.define('fx-color-square', ColorSquare);
