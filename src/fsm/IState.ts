import IEventListener from '../event/IEventListener';

export default interface IState {
    name: string;
    entry: IEventListener | null;
    on: IEventListener | null;
    next: IState | null;
    exit: IEventListener | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
