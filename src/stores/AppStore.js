import { observable, action } from 'mobx';

export default class AppStore {
  @observable test = "Test";

  @action tesFunc(param) {
    this.test = param;
  }
}