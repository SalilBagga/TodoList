import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
  render() {
    let line = 'yo';

    return (
      <div className="todo">
        {/* <form >
          <label htmlFor="event"></label>
          <button>edit</button>
          <button>delete</button>
        </form> */}
        <p>{line}</p>
        <button>delete</button>
        <button>delete</button>
      </div>
    );
  }
}

export default Todo;
