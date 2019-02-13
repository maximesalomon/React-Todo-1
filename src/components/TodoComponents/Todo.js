import React from 'react';

import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  render() {
    return (
      <div>
          <TodoForm />
          <TodoList />
      </div>
    );
  }
}

export default Todo;