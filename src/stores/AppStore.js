import { observable, action } from 'mobx';

export default class AppStore {
  @observable showDetailsModal = false;

  @action toggleDetailsModal(state) {
    this.showDetailsModal = state;
  }
}