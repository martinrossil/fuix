import Application from './core/Application';
import IComponent from './core/IComponent';
import Component from './core/Component';
import Text from './core/Text';
import { FontWeight } from '.';

export default class FuixDev extends Application {
    public constructor() {
        super();
        console.log('FuixDev');
        this.bodyBackgroundColor = '#000d1a';
        this.bodyColor = '#a3b8cc';
        this.bodyFontFamily = 'Eurostile';
        this.padding = 32;
        this.heightPercent = 100;

        const component: IComponent = new Component();
        component.minWidth = 300;
        component.minHeight = 500;
        component.backgroundColor = 'red';
        // this.addComponent(component);

        const text: Text = new Text();
        text.fontSize = 48;
        text.text = 'SPACE INVADERS';
        // text.letterSpacing = NaN;
        text.fontWeight = FontWeight.BOLD_700;
        // text.fontFamily = 'Source Sans Pro';
        text.lineHeight = 0.7;
        this.addComponent(text);
    }
}
customElements.define('fuix-dev', FuixDev);
