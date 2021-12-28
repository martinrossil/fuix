import IDataRenderer from '../components/IDataRenderer';
import Container from '../core/Container';
import TestVo from './TestVo';

export default class TestRenderer extends Container implements IDataRenderer<TestVo | null> {
    public constructor() {
        super();
        this.width = 120;
        // this.minWidth = 100;
        this.height = 180;
        // this.flexGrow = 1;
        this.backgroundColor = 'lightblue';
    }

    private _data: TestVo | null = null;

    public set data(value: TestVo | null) {
        this._data = value;
    }

    public get data(): TestVo | null {
        return this._data;
    }
}
customElements.define('test-renderer', TestRenderer);
