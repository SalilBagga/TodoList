import React, { Component } from 'react';
import Todo from './Todo';
import './Todo.css';
import NewTodoForm from './NewTodoForm';
//

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventlist: []
    };
  }
  rednderevent() {}
  render() {
    return (
      <div className="todolist">
        <h1>yo</h1>
        <Todo />
        <NewTodoForm />
      </div>
    );
  }
}

export default TodoList;
