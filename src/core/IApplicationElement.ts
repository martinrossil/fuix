import IDisplayContainer from './IDisplayContainer';

export default interface IApplicationElement extends IDisplayContainer {
    bodyBackgroundColor: string;
    bodyColor: string;
    bodyFontFamily: string;
}
