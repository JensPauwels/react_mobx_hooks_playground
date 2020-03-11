import { observable, action } from 'mobx';

class AppStore {
  constructor() {
    this.app = 'App'
  }
}

export default new AppStore();

