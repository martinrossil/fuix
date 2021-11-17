import ApplicationElement from './core/ApplicationElement';

export default class FuixDev extends ApplicationElement {
    public constructor() {
        super();
        console.log('FuixDev');
        this.bodyBackgroundColor = '#000d1a';
        this.bodyColor = '#a3b8cc';
        this.bodyFontFamily = 'Eurostile';
    }
}
customElements.define('fuix-dev', FuixDev);