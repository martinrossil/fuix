import BottomBar from './app/BottomBar';
import TestRenderer from './app/TestRenderer';
import TestVo from './app/TestVo';
import TopBar from './app/TopBar';
import DataContainer from './components/DataContainer';
import IDataContainer from './components/IDataContainer';
import { Display } from './consts/Display';
import Application from './core/Application';
import ArrayCollection from './data/ArrayCollection';
import IArrayCollection from './data/IArrayCollection';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.addComponent(this.dataContainer);
        this.addComponent(new TopBar());
        this.addComponent(new BottomBar());
    }

    private _dataContainer!: DataContainer<TestVo>;
    get dataContainer(): IDataContainer<TestVo> {
        if (!this._dataContainer) {
            this._dataContainer = new DataContainer();
            this._dataContainer.display = Display.GRID;
            this._dataContainer.style.minHeight = '100vh';
            this._dataContainer.gap = 16;
            this._dataContainer.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            this._dataContainer.DataRendererClass = TestRenderer;
            this._dataContainer.dataProvider = this.testVOs;
        }
        return this._dataContainer;
    }

    private _testVOs!: IArrayCollection<TestVo>;
    get testVOs(): IArrayCollection<TestVo> {
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
