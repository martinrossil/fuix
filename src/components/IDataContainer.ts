import IContainer from '../core/IContainer';
import IArrayCollection from '../data/IArrayCollection';
import IDataRenderer from './IDataRenderer';

export default interface IDataContainer<Item> extends IContainer {
    dataProvider: IArrayCollection<Item> | null;
    DataRendererClass: new () => IDataRenderer<Item>;
}
