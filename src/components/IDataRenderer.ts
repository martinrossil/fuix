import IContainer from '../core/IComponent';

export default interface IDataRenderer<Item> extends IContainer {
    data: Item | null;
}
