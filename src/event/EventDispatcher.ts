import IEventDispatcher from './IEventDispatcher';
import IEventListener from './IEventListener';
import ICustomEventListener from './ICustomEventListener';

export default class EventDispatcher implements IEventDispatcher {
    private listeners: Map<string, Array<IEventListener> | undefined> = new Map();
    private customListeners: Map<string, Array<ICustomEventListener> | undefined> = new Map();

    public dispatchEvent(event: Event): boolean {
        const typeListeners: Array<IEventListener> | undefined = this.listeners.get(event.type);
        if (typeListeners !== undefined) {
            for (const listener of typeListeners) {
                listener(event);
            }
        }
        return true;
    }

    public dispatchCustomEvent(event: CustomEvent): boolean {
        const typeListeners: Array<ICustomEventListener> | undefined = this.customListeners.get(event.type);
        if (typeListeners !== undefined) {
            for (const listener of typeListeners) {
                listener(event);
            }
        }
        return true;
    }

    public addEventListener(type: string, listener: IEventListener): void {
        let typeListeners: Array<IEventListener> | undefined = this.listeners.get(type);
        if (typeListeners === undefined) {
            typeListeners = [];
            this.listeners.set(type, typeListeners);
        }
        typeListeners.push(listener);
    }

    public addCustomEventListener(type: string, listener: ICustomEventListener): void {
        let typeListeners: Array<ICustomEventListener> | undefined = this.customListeners.get(type);
        if (typeListeners === undefined) {
            typeListeners = [];
            this.customListeners.set(type, typeListeners);
        }
        typeListeners.push(listener);
    }

    public removeEventListener(type: string, listener: IEventListener): void {
        const typeListeners: Array<IEventListener> | undefined = this.listeners.get(type);
        if (typeListeners !== undefined) {
            for (const method of typeListeners) {
                if (method === listener) {
                    const index = typeListeners.indexOf(listener);
                    typeListeners.splice(index, 1);
                    break;
                }
            }
        }
    }

    public removeCustomEventListener(type: string, listener: ICustomEventListener): void {
        const typeListeners: Array<ICustomEventListener> | undefined = this.customListeners.get(type);
        if (typeListeners !== undefined) {
            for (const method of typeListeners) {
                if (method === listener) {
                    const index = typeListeners.indexOf(listener);
                    typeListeners.splice(index, 1);
                    break;
                }
            }
        }
    }
}
