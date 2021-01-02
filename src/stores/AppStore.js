import { observable, action } from 'mobx';

export default class AppStore {
  @observable showDetailsModal = false;

  @observable selectedProduct = {};

  @observable activeTab = 0;

  @action toggleDetailsModal(state) {
    this.showDetailsModal = state;
  }

  @action setSelectedProduct(product) {
    this.selectedProduct = product;
  }

  @action setActiveTab(tab) {
    this.activeTab = tab;
  }
}