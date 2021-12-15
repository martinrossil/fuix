import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ArrayCollection, IArrayCollection } from '../../src';
import TestVo from '../../src/app/TestVo';
import IEventListener from '../../src/event/IEventListener';

describe('IArrayCollection<Item>.addItem(item: Item)', () => {
    it('given an empty ArrayCollection, when addItem(new TestVo), length should be 1', () => {
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        const testVo: TestVo = new TestVo('name', 42);
        arrayCollection.addItem(testVo);
        assert.strictEqual(arrayCollection.length, 1);
    });
    it('given an empty ArrayCollection, when addItem(new TestVo), itemAdded should be dispatched', () => {
        let handlerCalled = false;
        const handler: IEventListener = () => {
            handlerCalled = true;
        }
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        arrayCollection.addEventListener('itemAdded', handler);
        const testVo: TestVo = new TestVo('name', 42);
        arrayCollection.addItem(testVo);
        assert.isTrue(handlerCalled);
    });
});
