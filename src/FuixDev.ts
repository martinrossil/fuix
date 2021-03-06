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
import IPath from './svg/IPath';
import Path from './svg/Path';
import ITextBase from './text/ITextBase';
import TextBase from './text/TextBase';

export default class FuixDev extends Application {
    public constructor() {
        super();
        this.bodyBackgroundColor = '#F4F5F7';
        this.display = 'flex';
        this.alignItems = 'center';
        this.justifyContent = 'center';
        window.addEventListener('click', () => {
            // this.linkContainer.visible = !this.linkContainer.visible;
            // index -= 1;
            // this.stackContainer.selectedIndex = NaN;
        });
        // this.addComponent(this.stackContainer);
        // this.addComponent(this.linkContainer);
        // this.flexWrap = FlexWrap.NOWRAP;
        // this.addComponent(this.dataContainer);
        // this.addComponent(new TopBar());
        // this.addComponent(new BottomBar());
        // this.addComponent(this.paragraph);
        // this.addComponent(this.paragraph2);
        this.gap = 64;
        // this.addComponents([this.path, this.path2]);
        this.addComponent(this.textBase);
        console.log('[' + this.textBase.lineHeight + ']');
    }

    private _textBase!: ITextBase;

    private get textBase(): ITextBase {
        if (!this._textBase) {
            this._textBase = new TextBase();
            this._textBase.text = 'H Lorem ipsug and ?????? ?????? H';
            this._textBase.fontFamily = 'system-ui';
            this._textBase.fontSize = 64;
            this._textBase.overflow = 'hidden';
            this._textBase.textOverflow = 'ellipsis';
            this._textBase.whiteSpace = 'nowrap';
            // this._textBase.lineHeight = '1.4';
            this._textBase.color = 'purple';
            this._textBase.fontWeight = 700;
        }
        return this._textBase;
    }

    private _path!: IPath;

    private get path(): IPath {
        if (!this._path) {
            this._path = new Path();
            // this._path.backgroundColor = '#000';
            this._path.width = 100;
            this._path.height = 100;
            this._path.viewBox = '0 0 24 24';
            this._path.stroke = '#000';
            this._path.strokeWidth = 2;
            // this._path.d = Icons.FILM_02;
        }
        return this._path;
    }

    private _path2!: IPath;

    private get path2(): IPath {
        if (!this._path2) {
            this._path2 = new Path();
            // this._path2.backgroundColor = '#000';
            this._path2.width = 100;
            this._path2.height = 100;
            this._path2.viewBox = '0 0 24 24';
            this._path2.stroke = '#000';
            this._path2.strokeWidth = 2;
            // this._path2.d = Icons.FILM_02;
        }
        return this._path2;
    }

    private _stackContainer!: IStackContainer;

    protected get stackContainer(): IStackContainer {
        if (!this._stackContainer) {
            this._stackContainer = new StackContainer();
            this._stackContainer.selectedIndex = 0;
            this._stackContainer.inset = '0';
            this._stackContainer.addComponents([new ColorSquare('yellow'), new ColorSquare('blue'), new ColorSquare('orange')]);
        }
        return this._stackContainer;
    }

    private _linkContainer!: ILinkContainer;

    protected get linkContainer(): ILinkContainer {
        if (!this._linkContainer) {
            this._linkContainer = new LinkContainer();
            // this._linkContainer.widthPercent = 100;
            // this._linkContainer.width = 200;
            this._linkContainer.minWidth = 300;
            this._linkContainer.height = 200;
            this._linkContainer.backgroundColor = 'white';
            this._linkContainer.href = '/film';
        }
        return this._linkContainer;
    }

    private _paragraph!: IParagraph;

    private get paragraph(): IParagraph {
        if (!this._paragraph) {
            this._paragraph = new Paragraph();
            this._paragraph.display = 'inline-block';
            this._paragraph.text = 'test text here';
            this._paragraph.fontWeight = 500;
        }
        return this._paragraph;
    }

    private _paragraph2!: IParagraph;

    private get paragraph2(): IParagraph {
        if (!this._paragraph2) {
            this._paragraph2 = new Paragraph();
            this._paragraph2.display = 'inline-block';
            this._paragraph2.text = 'test text here';
            this._paragraph2.fontWeight = 500;
        }
        return this._paragraph2;
    }

    private _dataContainer!: DataContainer<TestVo>;

    private get dataContainer(): IDataContainer<TestVo> {
        if (!this._dataContainer) {
            this._dataContainer = new DataContainer();
            this._dataContainer.display = 'block';
            this._dataContainer.display = 'grid';
            this._dataContainer.style.minHeight = '100vh';
            this._dataContainer.gap = 16;
            this._dataContainer.inset = '23px';
            // this._dataContainer.alignItems = 'start';
            // this._dataContainer.justifyContent = 'start';
            // this._dataContainer.style.paddingTop = '72px';
            // this._dataContainer.style.paddingBottom = '8px';
            this._dataContainer.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
            this._dataContainer.DataRendererClass = TestRenderer;
            this._dataContainer.dataProvider = this.testVOs;
        }
        return this._dataContainer;
    }

    _testVOs!: IArrayCollection<TestVo>;

    private get testVOs(): IArrayCollection<TestVo> {
        if (!this._testVOs) {
            const vos: Array<TestVo> = [];
            for (let i = 0; i < 20; i += 1) {
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
