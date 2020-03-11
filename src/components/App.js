import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { getStore, getStores } from '../stores';

const AddTodo = () => {
  const todoStore = getStore('todoStore');
  const { newTodo } = todoStore;

  const onChange = ev => {
    newTodo.content = ev.target.value;
  };

  const addTodo = () => {
    todoStore.addTodo();
  };

  return useObserver(() => (
    <>
      <input type="text" onChange={onChange} value={newTodo.content}/>
      <button onClick={addTodo}>Add todo</button>
    </>
  ))
}

const App = () => { 
  const { todos } = getStore('todoStore');

  // example to get multiple stores at once 
  // const { todoStore, appStore } = getStores(['todoStore', 'appStore'])

  return useObserver(() => (
    <>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index}>{ todo.content }</li>
          )) 
        }
      </ul>  
      <AddTodo />
    </>
  ))
};

export default App;

