import Application from './core/Application';
import DataContainer from './components/DataContainer';
import TestVo from './app/TestVo';
import { Display } from './consts/Display';
import TestRenderer from './app/TestRenderer';
import IArrayCollection from './data/IArrayCollection';
import ArrayCollection from './data/ArrayCollection';
import { FlexWrap } from './consts/FlexWrap';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.bodyColor = '#a3b8cc';
        this.bodyFontFamily = 'Eurostile';
        this.backgroundColor = 'blue';
        this.display = Display.FLEX;
        this.padding = 24;
        this.style.minHeight = '100vh';
        const dataContainer: DataContainer<TestVo> = new DataContainer();
        dataContainer.display = Display.FLEX;
        dataContainer.flexGrow = 1;
        dataContainer.flexWrap = FlexWrap.WRAP;
        dataContainer.gap = 24;
        dataContainer.DataRendererClass = TestRenderer;
        const testCollection: IArrayCollection<TestVo> = new ArrayCollection();
        for (let i = 0; i < 1000; i++) {
            const testVo: TestVo = new TestVo(Math.random().toString(), Math.round(Math.random() * 100));
            testCollection.addItem(testVo);
        }
        dataContainer.dataProvider = testCollection;
        this.addComponent(dataContainer);
    }
}
customElements.define('fuix-dev', FuixDev);
