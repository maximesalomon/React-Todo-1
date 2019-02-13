import React from 'react';

import Todo from './components/TodoComponents/Todo.js'
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: [{message: 'Task 1', id:'123', completed: false}, {message: 'Task 1', id:'123', completed: false}, {message: 'Task 1', id:'123', completed: false}],
    }
}

addTask = taskName => {
  this.setState(st => ({ tasks: st.tasks.concat({ message: taskName }) }));
}

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;