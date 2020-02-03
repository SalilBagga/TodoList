import React, { Component } from 'react';
import Todo from './Todo';
import './Todo.css';
import NewTodoForm from './NewTodoForm';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventlist: []
    };
    this.addeventlist = this.addeventlist.bind(this);
  }
  addeventlist(list) {
    this.setState(lst => ({
      eventlist: [...lst.eventlist, list]
    }));
  }
  renderevet(event) {
    return (
      <div>
        {this.state.eventlist.map(item => (
          <Todo key={item.id} id={item.id} line={item.work} />
        ))}
      </div>
    );
  }

  // edittextfield(evt) {
  //   evt.preventDefault();
  //   var x = document.getElementById('bla');
  //   if (x.disabled === true) {
  //     x.disabled = false;
  //   } else if (x.disabled === false) {
  //     x.disabled = true;
  //   }
  // }
  render() {
    console.log(this.state.eventlist);

    return (
      <div className="todolist">
        <h1>Todo List</h1>
        {this.renderevet()}
        <NewTodoForm addevent={this.addeventlist} />
        {/* <input id="bla" type="text" disabled={true} /> */}
        {/* <button onClick={this.edittextfield}>click enable click disable</button> */}
      </div>
    );
  }
}

export default TodoList;
