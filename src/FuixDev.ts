import BottomBar from './app/BottomBar';
import TestRenderer from './app/TestRenderer';
import TestVo from './app/TestVo';
import TopBar from './app/TopBar';
import DataContainer from './components/DataContainer';
import IDataContainer from './components/IDataContainer';
import Application from './core/Application';
import IParagraph from './core/IParagraph';
import Paragraph from './core/Paragraph';
import ArrayCollection from './data/ArrayCollection';
import IArrayCollection from './data/IArrayCollection';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.display = 'block';
        // this.flexWrap = FlexWrap.NOWRAP;
        this.addComponent(this.dataContainer);
        this.addComponent(new TopBar());
        this.addComponent(new BottomBar());
        // this.addComponent(this.paragraph);
        // this.addComponent(this.paragraph2);
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
            this.#dataContainer.display = 'grid';
            this.#dataContainer.style.minHeight = '100vh';
            this.#dataContainer.gap = 16;
            this.#dataContainer.style.paddingTop = '72px';
            this.#dataContainer.style.paddingBottom = '8px';
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
