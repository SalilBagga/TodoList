import React, { Component } from 'react';
import Todo from './Todo';
import './Todo.css';
import NewTodoForm from './NewTodoForm';
// import { isElement } from 'react-dom/test-utils';
//

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventlist: []
    };
  }
  rednderevent() {}

  edittextfield(evt) {
    evt.preventDefault();

    var x = document.getElementById('bla');
    console.log(x);
    console.log(x.disabled);
    if (x.contentEditable !== 'true') {
      x.contentEditable = 'true';
      console.log('is  working ');
    } else {
      x.contentEditable = 'false';
      console.log('is not working ');
    }
  }
  render() {
    // let isElement = 'disabled';
    return (
      <div className="todolist">
        <h1>yo</h1>
        <Todo />
        <NewTodoForm />
        <p id="bla" suppressContentEditableWarning="true">
          Try to change this text.
        </p>
        <button onClick={this.edittextfield}>click enable click disable</button>
      </div>
    );
  }
}

export default TodoList;
