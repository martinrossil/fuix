import IState from '../fsm/IState';
import State from '../fsm/State';
import Machine from '../fsm/Machine';
import IMouseTouch from './IMouseTouch';

export default class MouseTouchMachine extends Machine<IMouseTouch> {
    public constructor(host: IMouseTouch) {
        super(host);
        this.initial.on = host.initial.bind(host);
        this.initial.addTransition('mouseover', this.hoverState);
        this.initial.addTransition('touchstart', this.pressedState);
        host.addEventListener('DELAY_COMPLETE', this.send);
        host.addEventListener('mouseover', this.send);
        host.addEventListener('mousedown', this.send);
        host.addEventListener('mouseleave', this.send);
        host.addEventListener('mouseup', this.send);
        host.addEventListener('touchstart', this.send, { passive: true });
        host.addEventListener('touchend', this.send, { passive: true });
        host.addEventListener('click', this.send);
    }

    #hoverState!: IState;

    protected get hoverState(): IState {
        if (!this.#hoverState) {
            this.#hoverState = new State('Hover');
            this.#hoverState.on = this.hover;
            this.#hoverState.addTransition('mouseleave', this.initial);
            this.#hoverState.addTransition('mousedown', this.pressedState);
            this.#hoverState.addTransition('click', this.clickedState);
            this.#hoverState.addTransition('DELAY_COMPLETE', this.initial);
        }
        return this.#hoverState;
    }

    #pressedState!: IState;

    protected get pressedState(): IState {
        if (!this.#pressedState) {
            this.#pressedState = new State('Pressed');
            this.#pressedState.on = this.pressed;
            this.#pressedState.addTransition('mouseup', this.hoverState);
            this.#pressedState.addTransition('mouseleave', this.initial);
            this.#pressedState.addTransition('touchend', this.delayState);
        }
        return this.#pressedState;
    }

    #clickedState!: IState;

    protected get clickedState(): IState {
        if (!this.#clickedState) {
            this.#clickedState = new State('Clicked');
            this.#clickedState.on = this.clicked;
            this.#clickedState.next = this.hoverState;
        }
        return this.#clickedState;
    }

    #delayState!: IState;

    protected get delayState(): IState {
        if (!this.#delayState) {
            this.#delayState = new State('Delay');
            this.#delayState.on = this.delay;
            this.#delayState.addTransition('DELAY_COMPLETE', this.initial);
            this.#delayState.addTransition('click', this.clickedState);
        }
        return this.#delayState;
    }

    private delay(): void {
        setTimeout(() => {
            this.host.dispatchEvent(new CustomEvent('DELAY_COMPLETE'));
        }, 0);
    }

    private hover(): void {
        this.host.hover();
    }

    private pressed(e: Event) {
        const [x, y] = this.getTouchPoint(e);
        this.host.pressed(x, y);
    }

    private clicked(): void {
        this.host.clicked();
    }

    private getTouchPoint(e: Event): [number, number] {
        if (e instanceof MouseEvent) {
            return [e.offsetX, e.offsetY];
        }
        if (!TouchEvent) {
            return [0, 0];
        }
        if (e instanceof TouchEvent) {
            if (e.changedTouches && e.changedTouches.length > 0) {
                const touch: Touch = e.changedTouches[0];
                const rect: DOMRect = this.host.getBoundingClientRect();
                return [Math.ceil(touch.pageX - rect.x), Math.ceil(touch.pageY - rect.y)];
            }
        }
        return [0, 0];
    }
}
