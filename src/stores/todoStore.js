import { decorate, observable } from 'mobx';

class Todo {
  constructor() {
    this.content = '';
  }
};

decorate(Todo, {
  content: observable
});

class todoStore {
  constructor() {
    this.todos = [];
    this.newTodo = new Todo();
  }

  addTodo = () => {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }
}

decorate(todoStore, {
  todos: observable,
});

export default new todoStore();

