import { assert } from 'chai';
import IState from './IState';
import State from './State';

describe('IState', () => {
    describe('default values', () => {
        it('constructor name should equal name property.', () => {
            const name = 'someStateName';
            const state: IState = new State(name);
            assert.strictEqual(state.name, name);
        });
    });
});
