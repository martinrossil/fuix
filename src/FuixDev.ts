import BottomBar from './app/BottomBar';
import TestRenderer from './app/TestRenderer';
import TestVo from './app/TestVo';
import TopBar from './app/TopBar';
import DataContainer from './components/DataContainer';
import IDataContainer from './components/IDataContainer';
import { Display } from './consts/Display';
import FlexWrap from './consts/FlexWrap';
import { FontWeight } from './consts/FontWeight';
import Icons from './consts/Icons';
import Application from './core/Application';
import IParagraph from './core/IParagraph';
import Paragraph from './core/Paragraph';
import ArrayCollection from './data/ArrayCollection';
import IArrayCollection from './data/IArrayCollection';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.display = Display.BLOCK;
        // this.flexWrap = FlexWrap.NOWRAP;
        this.addComponent(this.dataContainer);
        this.addComponent(new TopBar());
        this.addComponent(new BottomBar());
        // this.addComponent(this.paragraph);
        // this.addComponent(this.paragraph2);
    }

    private _paragraph!: IParagraph;
    private get paragraph(): IParagraph {
        if (!this._paragraph) {
            this._paragraph = new Paragraph();
            this._paragraph.display = Display.INLINE_BLOCK;
            this._paragraph.text = Icons.TEST;
            this.paragraph.fontWeight = FontWeight.MEDIUM_500;
        }
        return this._paragraph;
    }

    private _paragraph2!: IParagraph;
    private get paragraph2(): IParagraph {
        if (!this._paragraph2) {
            this._paragraph2 = new Paragraph();
            this._paragraph.display = Display.INLINE_BLOCK;
            this._paragraph2.text = Icons.TEST;
            this.paragraph2.fontWeight = FontWeight.MEDIUM_500;
        }
        return this._paragraph;
    }

    private _dataContainer!: DataContainer<TestVo>;
    private get dataContainer(): IDataContainer<TestVo> {
        if (!this._dataContainer) {
            this._dataContainer = new DataContainer();
            // this._dataContainer.flexWrap = FlexWrap.WRAP_REVERSE;
            this._dataContainer.display = Display.GRID;
            this._dataContainer.style.minHeight = '100vh';
            this._dataContainer.gap = 16;
            this._dataContainer.style.paddingTop = '72px';
            this._dataContainer.style.paddingBottom = '8px';
            this._dataContainer.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            this._dataContainer.DataRendererClass = TestRenderer;
            this._dataContainer.dataProvider = this.testVOs;
        }
        return this._dataContainer;
    }

    private _testVOs!: IArrayCollection<TestVo>;
    private get testVOs(): IArrayCollection<TestVo> {
        if (!this._testVOs) {
            const vos: Array<TestVo> = [];
            for (let i = 0; i < 20; i++) {
                const name = Math.random().toString();
                const age = Math.round(Math.random() * 50 + 10);
                vos.push(new TestVo(name, age));
            }
            this._testVOs = new ArrayCollection(vos);
        }
        return this._testVOs;
    }
}
customElements.define('fuix-dev', FuixDev);
