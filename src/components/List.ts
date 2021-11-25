import Container from '../core/Container';
import IList from './IList';

export default class List extends Container implements IList {

}
customElements.define('fx-list', List);
