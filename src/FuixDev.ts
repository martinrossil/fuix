import Application from './core/Application';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
    }
}
customElements.define('fuix-dev', FuixDev);
