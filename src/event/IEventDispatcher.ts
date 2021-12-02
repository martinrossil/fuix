import IEventListener from './IEventListener';

export default interface IEventDispatcher {
    dispatchEvent(event: Event): boolean;
    addEventListener(type: string, listener: IEventListener, options?: { passive: boolean }): void;
    removeEventListener(type: string, listener: IEventListener): void;
}
