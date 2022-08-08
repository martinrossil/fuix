import Container from '../core/Container';
import IBaseButton from './IBaseButton';

export default class BaseButton extends Container implements IBaseButton {
    public constructor() {
        super();
    }

    public text: string = '';

    public color: string = '';

    public fontFamily: string = '';
}
customElements.define('fx-base-button', BaseButton);
