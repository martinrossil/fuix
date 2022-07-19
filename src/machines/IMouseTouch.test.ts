import { assert } from 'chai';
import IMachine from '../fsm/IMachine';
import IMouseTouch from './IMouseTouch';
import MouseTouch from './MouseTouch';
import MouseTouchMachine from './MouseTouchMachine';

describe('IMouseTouch', () => {
    describe('default values', () => {
        it('currentState.name should be "initial"', () => {
            const mouseTouch: IMouseTouch = new MouseTouch();
            const mouseTouchMachine: IMachine = new MouseTouchMachine(mouseTouch);
            assert.strictEqual(mouseTouchMachine.currentState.name, 'initial');
        });
    });
});
