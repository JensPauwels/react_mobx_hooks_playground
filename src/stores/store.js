import { decorate, observable, action, configure } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  constructor() {
    this.value = 50;
  }

  setValue = value => {
    this.value = value;
  };
}

decorate(Store, {
  value: observable,
  setValue: action
});

export default new Store();
