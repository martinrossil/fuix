import IDataRenderer from '../components/IDataRenderer';
import Container from '../core/Container';
import TestVo from './TestVo';

export default class TestRenderer extends Container implements IDataRenderer<TestVo | null> {
    public constructor() {
        super();
        this.display = 'inline';
        // this.width = 120;
        this.minWidth = 100;
        this.minHeight = 100;
        // this.maxWidth = 200;
        this.aspectRatio = 1;
        // this.flexGrow = 1;
        this.backgroundColor = '#003366';
    }

    #data: TestVo | null = null;

    public set data(value: TestVo | null) {
        this.#data = value;
    }

    public get data(): TestVo | null {
        return this.#data;
    }
}
customElements.define('test-renderer', TestRenderer);
