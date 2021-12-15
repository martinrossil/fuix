import { assert } from 'chai';
import { describe, it } from 'mocha';
import { ArrayCollection, IArrayCollection } from '../../src';
import TestVo from '../../src/app/TestVo';

describe('IArrayCollection<Item>.source', () => {
    it('given a new ArrayCollection, the constructor array param should be === source', () => {
        const array: Array<TestVo> = [];
        const arrayCollection: IArrayCollection<TestVo> = new ArrayCollection(array);
        assert.strictEqual(array, arrayCollection.source);
    });
});
