import { assert } from 'chai';
import TestVo from '../app/TestVo';
import ArrayCollection from './ArrayCollection';
import IArrayCollection from './IArrayCollection';

describe('IArrayCollection<Item>.addItem(item: Item)', () => {
    it('given an empty ArrayCollection, when addItem(new TestVo), length should be 1', () => {
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        const testVo: TestVo = new TestVo('name', 42);
        arrayCollection.addItem(testVo);
        assert.strictEqual(arrayCollection.length, 1);
    });
    it('given an empty ArrayCollection, when addItem(new TestVo), itemAdded should be dispatched', () => {
        let handlerCalled = false;
        const handler: EventListener = () => {
            handlerCalled = true;
        }
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        arrayCollection.addEventListener('itemAdded', handler);
        const testVo: TestVo = new TestVo('name', 42);
        arrayCollection.addItem(testVo);
        assert.isTrue(handlerCalled);
    });
});

describe('IArrayCollection<Item>.addItems(items: Array<Item>)', () => {
    it('given an empty ArrayCollection, when addItems(two items), length should be 2', () => {
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        const items: Array<TestVo> = [new TestVo('foo', 42), new TestVo('bar', 1337)];
        arrayCollection.addItems(items);
        assert.strictEqual(arrayCollection.length, 2);
    });
    it('given an empty ArrayCollection, when addItems(two iems), itemsAdded should be dispatched', () => {
        let handlerCalled = false;
        const handler: EventListener = () => {
            handlerCalled = true;
        }
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection();
        arrayCollection.addEventListener('itemsAdded', handler);
        const items: Array<TestVo> = [new TestVo('foo', 42), new TestVo('bar', 1337)];
        arrayCollection.addItems(items);
        assert.isTrue(handlerCalled);
    });
});

describe('IArrayCollection<Item>.source', () => {
    it('given a new ArrayCollection, the constructor array param should be === source', () => {
        const array: Array<TestVo> = [];
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection(array);
        assert.strictEqual(array, arrayCollection.source);
    });
});
