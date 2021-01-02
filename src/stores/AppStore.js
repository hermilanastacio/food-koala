import { observable, action } from 'mobx';

export default class AppStore {
  @observable showDetailsModal = false;

  @observable showSideNav = { left: false };

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

  @action setShowSideNav(state) {
    this.showSideNav = state;
  }

  @action toggleSideNav = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    this.setShowSideNav({ ...this.showSideNav, [anchor]: open });
  }
}