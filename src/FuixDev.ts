import { ArrayCollection, DataContainer, Display, FlexWrap, IArrayCollection, Position, TestRenderer, TestVo } from '.';
import IDataContainer from './components/IDataContainer';
import { AlignItems } from './consts/AlignItems';
import { JustifyContent } from './consts/JustifyContent';
import Application from './core/Application';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#000d1a';
        this.bodyColor = '#a3b8cc';
        this.bodyFontFamily = 'Eurostile';
        this.padding = 16;
        this.addComponent(this.dataContainer);
    }

    private _dataContainer!: DataContainer<TestVo>;
    private get dataContainer(): DataContainer<TestVo> {
        if (!this._dataContainer) {
            this._dataContainer = new DataContainer();
            // this._dataContainer.justifyContent = JustifyContent.SPACE_BETWEEN;
            this._dataContainer.gap = 16;
            this._dataContainer.heightPercent = 100;
            this._dataContainer.display = Display.GRID;
            this._dataContainer.gridTemplateColumns = 'repeat(4, 1fr)'; // 'repeat(auto-fill, minmax(200px, 1fr))';
            // this._dataContainer.flexWrap = FlexWrap.WRAP;
            // this._dataContainer.alignItems = AlignItems.STRETCH;
            this._dataContainer.DataRendererClass = TestRenderer;
            this._dataContainer.dataProvider = this.testCollection;
        }
        return this._dataContainer;
    }

    private _testCollection!: IArrayCollection<TestVo>;
    private get testCollection(): IArrayCollection<TestVo> {
        if (!this._testCollection) {
            const items: Array<TestVo> = [];
            for (let i = 0; i < 70; i++) {
                items.push(new TestVo('name', i + 1));
            }
            this._testCollection = new ArrayCollection(items);
        }
        return this._testCollection;
    }
}
customElements.define('fuix-dev', FuixDev);
