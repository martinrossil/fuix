import Container from '../core/Container';
import IComponent from '../core/IComponent';
import IStackContainer from './IStackContainer';

export default class StackContainer extends Container implements IStackContainer {
    public constructor() {
        super();
    }

    public addComponent(component: IComponent): void {
        super.addComponent(component);
        this.updateVisibility();
    }

    public addComponents(components: Array<IComponent>): void {
        super.addComponents(components);
        this.updateVisibility();
    }

    public addComponentAt(component: IComponent, index: number): void {
        super.addComponentAt(component, index);
        this.updateVisibility();
    }

    public removeComponent(component: IComponent): void {
        super.removeComponent(component);
        this.updateVisibility();
    }

    private updateVisibility(): void {
        this.childNodes.forEach((node) => {
            const index = Array.from(this.childNodes).indexOf(node);
            const component: IComponent = node as unknown as IComponent;
            component.visible = index === this.selectedIndex;
        });
    }

    private _selectedIndex = NaN;

    public set selectedIndex(value: number) {
        if (Number.isNaN(this._selectedIndex || Number.isNaN(value))) {
            return;
        }
        if (this._selectedIndex === value) {
            return;
        }
        this._selectedIndex = value;
        this.updateVisibility();
    }

    public get selectedIndex(): number {
        return this._selectedIndex;
    }
}
customElements.define('fx-stack-container', StackContainer);
