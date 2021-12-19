import IEventListener from './IEventListener';
import ICustomEventListener from './ICustomEventListener';

export default interface IEventDispatcher {
    dispatchEvent(event: Event): boolean;
    addEventListener(type: string, listener: IEventListener): void;
    removeEventListener(type: string, listener: IEventListener): void;
    dispatchCustomEvent(event: CustomEvent): boolean;
    addCustomEventListener(type: string, customListener: ICustomEventListener): void;
    removeCustomEventListener(type: string, customListener: ICustomEventListener): void;
}
