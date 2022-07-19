import { assert } from 'chai';
import IMachine from '../../src/fsm/IMachine';
import IMouseTouch from '../../src/machines/IMouseTouch';
import MouseTouch from '../../src/machines/MouseTouch';
import MouseTouchMachine from '../../src/machines/MouseTouchMachine';

describe('IMouseTouch', () => {
    describe('default values', () => {
        it('currentState.name should be "initial"', () => {
            const mouseTouch: IMouseTouch = new MouseTouch();
            const mouseTouchMachine: IMachine = new MouseTouchMachine(mouseTouch);
            assert.strictEqual(mouseTouchMachine.currentState.name, 'initial');
        });
    });
});
