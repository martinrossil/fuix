import IState from './IState';

export default interface IMachine {
    currentState: IState;
    send(e: Event): void
}
