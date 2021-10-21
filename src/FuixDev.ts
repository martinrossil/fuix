import ApplicationElement from './core/ApplicationElement';

export default class FuixDev extends ApplicationElement {
    public constructor() {
        super();
        console.log('FuixDev');
    }
}
customElements.define('fuix-dev', FuixDev);
