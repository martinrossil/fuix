import ColorSquare from './app/ColorSquare';
import TestRenderer from './app/TestRenderer';
import TestVo from './app/TestVo';
import DataContainer from './components/DataContainer';
import IDataContainer from './components/IDataContainer';
import ILinkContainer from './components/ILinkContainer';
import IStackContainer from './components/IStackContainer';
import LinkContainer from './components/LinkContainer';
import StackContainer from './components/StackContainer';
import Application from './core/Application';
import IParagraph from './core/IParagraph';
import Paragraph from './core/Paragraph';
import ArrayCollection from './data/ArrayCollection';
import IArrayCollection from './data/IArrayCollection';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.display = 'block';
        window.addEventListener('click', () => {
            // this.linkContainer.visible = !this.linkContainer.visible;
            // index -= 1;
            // this.stackContainer.selectedIndex = NaN;
        });
        // this.addComponent(this.stackContainer);
        // this.addComponent(this.linkContainer);
        // this.flexWrap = FlexWrap.NOWRAP;
        this.addComponent(this.dataContainer);
        // this.addComponent(new TopBar());
        // this.addComponent(new BottomBar());
        // this.addComponent(this.paragraph);
        // this.addComponent(this.paragraph2);
    }

    #stackContainer!: IStackContainer;

    protected get stackContainer(): IStackContainer {
        if (!this.#stackContainer) {
            this.#stackContainer = new StackContainer();
            this.#stackContainer.selectedIndex = 0;
            this.#stackContainer.inset = '0';
            this.#stackContainer.addComponents([new ColorSquare('yellow'), new ColorSquare('blue'), new ColorSquare('orange')]);
        }
        return this.#stackContainer;
    }

    #linkContainer!: ILinkContainer;

    protected get linkContainer(): ILinkContainer {
        if (!this.#linkContainer) {
            this.#linkContainer = new LinkContainer();
            // this.#linkContainer.widthPercent = 100;
            // this.#linkContainer.width = 200;
            this.#linkContainer.minWidth = 300;
            this.#linkContainer.height = 200;
            this.#linkContainer.backgroundColor = 'white';
            this.#linkContainer.href = '/film';
        }
        return this.#linkContainer;
    }

    #paragraph!: IParagraph;

    private get paragraph(): IParagraph {
        if (!this.#paragraph) {
            this.#paragraph = new Paragraph();
            this.#paragraph.display = 'inline-block';
            this.#paragraph.text = 'test text here';
            this.#paragraph.fontWeight = 500;
        }
        return this.#paragraph;
    }

    #paragraph2!: IParagraph;

    private get paragraph2(): IParagraph {
        if (!this.#paragraph2) {
            this.#paragraph2 = new Paragraph();
            this.#paragraph2.display = 'inline-block';
            this.#paragraph2.text = 'test text here';
            this.#paragraph2.fontWeight = 500;
        }
        return this.#paragraph2;
    }

    #dataContainer!: DataContainer<TestVo>;

    private get dataContainer(): IDataContainer<TestVo> {
        if (!this.#dataContainer) {
            this.#dataContainer = new DataContainer();
            this.#dataContainer.display = 'block';
            this.#dataContainer.display = 'grid';
            this.#dataContainer.style.minHeight = '100vh';
            this.#dataContainer.gap = 16;
            // this.#dataContainer.alignItems = 'start';
            // this.#dataContainer.justifyContent = 'start';
            // this.#dataContainer.style.paddingTop = '72px';
            // this.#dataContainer.style.paddingBottom = '8px';
            this.#dataContainer.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            this.#dataContainer.DataRendererClass = TestRenderer;
            this.#dataContainer.dataProvider = this.testVOs;
        }
        return this.#dataContainer;
    }

    #testVOs!: IArrayCollection<TestVo>;

    private get testVOs(): IArrayCollection<TestVo> {
        if (!this.#testVOs) {
            const vos: Array<TestVo> = [];
            for (let i = 0; i < 20; i += 1) {
                const name = Math.random().toString();
                const age = Math.round(Math.random() * 50 + 10);
                vos.push(new TestVo(name, age));
            }
            this.#testVOs = new ArrayCollection(vos);
        }
        return this.#testVOs;
    }
}
customElements.define('fuix-dev', FuixDev);
