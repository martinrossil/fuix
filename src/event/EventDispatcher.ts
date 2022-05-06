/* eslint-disable no-undef */
export default class EventDispatcher implements EventTarget {
    private listeners: Map<string, Array<EventListener> | undefined> = new Map();

    public dispatchEvent(event: Event): boolean {
        const typeListeners: Array<EventListener> | undefined = this.listeners.get(event.type);
        if (typeListeners !== undefined) {
            for (const listener of typeListeners) {
                listener(event);
            }
        }
        return true;
    }

    public addEventListener(type: string, listener: EventListener): void {
        let typeListeners: Array<EventListener> | undefined = this.listeners.get(type);
        if (typeListeners === undefined) {
            typeListeners = [];
            this.listeners.set(type, typeListeners);
        }
        typeListeners.push(listener);
    }

    public removeEventListener(type: string, listener: EventListener): void {
        const typeListeners: Array<EventListener> | undefined = this.listeners.get(type);
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
