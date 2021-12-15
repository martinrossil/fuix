import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ArrayCollection, IArrayCollection } from '../../src';
import TestVo from '../../src/app/TestVo';
import IEventListener from '../../src/event/IEventListener';

describe('IArrayCollection<Item>.addItems(items: Array<Item>)', () => {
    it('given an empty ArrayCollection, when addItems(two items), length should be 2', () => {
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        const items: Array<TestVo> = [new TestVo('foo', 42), new TestVo('bar', 1337)];
        arrayCollection.addItems(items);
        assert.strictEqual(arrayCollection.length, 2);
    });
    it('given an empty ArrayCollection, when addItems(two iems), itemsAdded should be dispatched', () => {
        let handlerCalled = false;
        const handler: IEventListener = () => {
            handlerCalled = true;
        }
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        arrayCollection.addEventListener('itemsAdded', handler);
        const items: Array<TestVo> = [new TestVo('foo', 42), new TestVo('bar', 1337)];
        arrayCollection.addItems(items);
        assert.isTrue(handlerCalled);
    });
});
