import { assert } from 'chai';
import IState from '../../src/fsm/IState';
import State from '../../src/fsm/State';

describe('IState', () => {
    describe('default values', () => {
        it('constructor name should equal name property.', () => {
            const name = 'someStateName';
            const state: IState = new State(name);
            assert.strictEqual(state.name, name);
        });
    });
});
