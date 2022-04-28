export default interface IState {
    name: string;
    entry: EventListener | null;
    on: EventListener | null;
    next: IState | null;
    exit: EventListener | null;
    addTransition(type: string, target: IState): void;
    getState(type: string): IState;
}
