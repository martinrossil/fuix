import IEventListener from './IEventListener';
import ICustomEventListener from './ICustomEventListener';

export default interface IEventDispatcher {
    dispatchEvent(event: Event): boolean;
    addEventListener(type: string, listener: IEventListener, options?: { passive: boolean }): void;
    removeEventListener(type: string, listener: IEventListener): void;
    dispatchCustomEvent(event: CustomEvent): boolean;
    addCustomEventListener(type: string, customListener: ICustomEventListener, options?: { passive: boolean }): void;
    removeCustomEventListener(type: string, customListener: ICustomEventListener): void;
}
