import Application from './core/Application';
import IComponent from './core/IComponent';
import Component from './core/Component';

export default class FuixDev extends Application {
    public constructor() {
        super();
        console.log('FuixDev');
        this.bodyBackgroundColor = '#000d1a';
        this.bodyColor = '#a3b8cc';
        this.bodyFontFamily = 'Eurostile';
        const component: IComponent = new Component();
    }
}
customElements.define('fuix-dev', FuixDev);
