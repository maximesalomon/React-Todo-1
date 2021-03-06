import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: '',
          id: null,
          completed: false,
        }
      ],
      todo: '',
    };
  }
 
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else return todo;
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container">
        <div>
          <TodoForm
            value={this.state.todo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            handleClearTodos={this.clearCompletedTodos}
          />
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;