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
    it('given one eventListener, when IEventDispatcher.removeEventListener() and dispatchEvent(new Event("test")), listener should not be invoked.', () => {
        let hasListenerBeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        eventDispatcher.addEventListener('test', listener);
        function listener(): void {
            hasListenerBeenInvoked = true;
        }
        eventDispatcher.removeEventListener('test', listener);
        eventDispatcher.dispatchEvent(new Event('test'));
        assert.isFalse(hasListenerBeenInvoked);
    });
    it('given three eventListener, when IEventDispatcher.removeEventListener() and dispatchEvent(new Event("test")), only one listener should be invoked.', () => {
        let hasListener1BeenInvoked = false;
        let hasListener2BeenInvoked = false;
        let hasListener3BeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        eventDispatcher.addEventListener('test', testListener);
        eventDispatcher.addEventListener('test', test2Listener);
        eventDispatcher.addEventListener('notTest', notTestListener);
        function testListener(): void {
            hasListener1BeenInvoked = true;
        }
        function test2Listener(): void {
            hasListener2BeenInvoked = true;
        }
        function notTestListener(): void {
            hasListener3BeenInvoked = true;
        }
        eventDispatcher.removeEventListener('test', testListener);
        eventDispatcher.removeEventListener('notTest', testListener);
        eventDispatcher.dispatchEvent(new Event('test'));
        assert.isFalse(hasListener1BeenInvoked);
        assert.isTrue(hasListener2BeenInvoked);
        assert.isFalse(hasListener3BeenInvoked);
    });
    it('given no eventListener, when IEventDispatcher.removeEventListener(), we cover else statement.', () => {
        let hasListener1BeenInvoked = false;
        const eventDispatcher: IEventDispatcher = new EventDispatcher();
        function testListener(): void {
            hasListener1BeenInvoked = true;
        }
        eventDispatcher.removeEventListener('test', testListener);
        assert.isFalse(hasListener1BeenInvoked);
    });
});
