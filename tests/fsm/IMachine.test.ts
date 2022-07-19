import { assert } from 'chai';
import IMachine from '../../src/fsm/IMachine';
import Machine from '../../src/fsm/Machine';

describe('IMachine', () => {
    describe('default values', () => {
        it('currentState.name should be "initial"', () => {
            const machine: IMachine = new Machine(document);
            assert.strictEqual(machine.currentState.name, 'initial');
        });
    });
});
