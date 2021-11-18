import IContainer from './IContainer';

export default interface IApplication extends IContainer {
    bodyBackgroundColor: string;
    bodyColor: string;
    bodyFontFamily: string;
}
