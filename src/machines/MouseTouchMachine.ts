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

    private _hoverState!: IState;
    protected get hoverState(): IState {
        if (!this._hoverState) {
            this._hoverState = new State('Hover');
            this._hoverState.on = this.hover;
            this._hoverState.addTransition('mouseleave', this.initial);
            this._hoverState.addTransition('mousedown', this.pressedState);
            this._hoverState.addTransition('click', this.clickedState);
            this._hoverState.addTransition('DELAY_COMPLETE', this.initial);
        }
        return this._hoverState;
    }

    private _pressedState!: IState;
    protected get pressedState(): IState {
        if (!this._pressedState) {
            this._pressedState = new State('Pressed');
            this._pressedState.on = this.pressed;
            this._pressedState.addTransition('mouseup', this.hoverState);
            this._pressedState.addTransition('mouseleave', this.initial);
            this._pressedState.addTransition('touchend', this.delayState);
        }
        return this._pressedState;
    }

    private _clickedState!: IState;
    protected get clickedState(): IState {
        if (!this._clickedState) {
            this._clickedState = new State('Clicked');
            this._clickedState.on = this.clicked;
            this._clickedState.next = this.hoverState;
        }
        return this._clickedState;
    }

    private _delayState!: IState;
    protected get delayState(): IState {
        if (!this._delayState) {
            this._delayState = new State('Delay');
            this._delayState.on = this.delay;
            this._delayState.addTransition('DELAY_COMPLETE', this.initial);
            this._delayState.addTransition('click', this.clickedState);
        }
        return this._delayState;
    }

    private delay(): void {
        setTimeout(() => {
            this.host.dispatchCustomEvent(new CustomEvent('DELAY_COMPLETE'));
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
