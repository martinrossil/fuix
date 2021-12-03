import { assert } from 'chai';
import { describe, it } from 'mocha';
import { EventDispatcher, IEventDispatcher } from '../../src';

describe('IEventDispatcher.dispatchEvent(event: Event)', () => {
    it('given IEventDispatcher.addEventListener("test"), when IEventDispatcher.dispatchEvent(new Event("test")), listener should be invoked.', () => {
        let hasListenerBeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        eventDispatcher.addEventListener('test', (event: Event) => {
            hasListenerBeenInvoked = true;
        });
        eventDispatcher.dispatchEvent(new Event('test'));
        assert.isTrue(hasListenerBeenInvoked);
    });
    it('given IEventDispatcher.addEventListener("notTest"), when IEventDispatcher.dispatchEvent(new Event("test")), listener should not be invoked.', () => {
        let hasListenerBeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        eventDispatcher.addEventListener('notTest', (event: Event) => {
            hasListenerBeenInvoked = true;
        });
        eventDispatcher.dispatchEvent(new Event('test'));
        assert.isFalse(hasListenerBeenInvoked);
    });
    it('given two eventListeners, when IEventDispatcher.dispatchEvent(new Event("test")), both listener should not be invoked.', () => {
        let hasListener1BeenInvoked = false;
        let hasListener2BeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        eventDispatcher.addEventListener('test', (event: Event) => {
            hasListener1BeenInvoked = true;
        });
        eventDispatcher.addEventListener('test', (event: Event) => {
            hasListener2BeenInvoked = true;
        })
        eventDispatcher.dispatchEvent(new Event('test'));
        assert.isTrue(hasListener1BeenInvoked);
        assert.isTrue(hasListener2BeenInvoked);
    });
});
