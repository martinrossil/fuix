import IEventListener from '../event/IEventListener';
import IState from './IState';

export default class State implements IState {
    public name: string;
    public entry: IEventListener | null = null;
    public on: IEventListener | null = null;
    public next: IState | null = null;
    public exit: IEventListener | null = null;
    protected targets: Map<string, IState> = new Map();
    public constructor(name: string) {
        this.name = name;
    }

    public addTransition(type: string, target: IState): IState {
        this.targets.set(type, target)
        return this;
    }

    public getState(type: string): IState {
        return this.targets.get(type) || this;
    }
}
