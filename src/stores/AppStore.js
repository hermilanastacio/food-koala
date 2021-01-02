import { observable, action } from 'mobx';

export default class AppStore {
  @observable showDetailsModal = false;

  @observable selectedProduct = {};

  @action toggleDetailsModal(state) {
    this.showDetailsModal = state;
  }

  @action setSelectedProduct(product) {
    this.selectedProduct = product;
  }
}