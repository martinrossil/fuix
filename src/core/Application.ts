import Container from './Container';
import IApplication from './IApplication';

export default class Application extends Container implements IApplication {
    public constructor() {
        super();
        this.injectGlobalStyles();
    }

    private injectGlobalStyles(): void {
        document.body.style.setProperty('min-height', '100vh');
        let innerHTMLString = '*{';
        innerHTMLString += '-webkit-overflow-scrolling: touch;';
        innerHTMLString += '-webkit-tap-highlight-color: transparent;';
        innerHTMLString += '-webkit-font-smoothing: antialiased;';
        innerHTMLString += '-moz-osx-font-smoothing: grayscale;';
        innerHTMLString += 'margin: 0; line-height: 1.2;';
        innerHTMLString += 'position: relative; box-sizing:border-box;';
        innerHTMLString += 'border:none; outline:none;';
        innerHTMLString += '}';
        const style: HTMLStyleElement = document.createElement('style');
        style.innerHTML = innerHTMLString;
        document.head.appendChild(style);
    }

    public set bodyBackgroundColor(value: string) {
        document.body.style.backgroundColor = value;
    }

    public get bodyBackgroundColor(): string {
        return document.body.style.backgroundColor;
    }

    public set bodyColor(value: string) {
        document.body.style.color = value;
    }

    public get bodyColor(): string {
        return document.body.style.color;
    }

    public set bodyFontFamily(value: string) {
        document.body.style.fontFamily = value;
    }

    public get bodyFontFamily(): string {
        return document.body.style.fontFamily;
    }
}
customElements.define('fx-application', Application);
