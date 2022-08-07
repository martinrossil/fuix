import Application from './core/Application';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.display = 'flex';
        this.alignItems = 'center';
        this.justifyContent = 'center';
    }
}
customElements.define('fuix-dev', FuixDev);
