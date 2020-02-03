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
  removeevent(id) {
    this.setState({
      eventlist: this.state.eventlist.filter(box => box.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.eventlist.map(todo => {
      if (todo.id === id) {
        return { ...todo, work: updatedTask };
      }
      return todo;
    });
    this.setState({ work: updatedTodos });
  }
  addeventlist(list) {
    this.setState(lst => ({
      eventlist: [...lst.eventlist, list]
    }));
  }
  renderevet(event) {
    return (
      <div>
        {''}

        {this.state.eventlist.map(item => (
          <Todo
            key={item.id}
            id={item.id}
            line={item.work}
            removeEvent={() => this.removeevent(item.id)}
            editing={item.isEditing}
            updateTodo={() => this.update(item.id, item.work)}
            // edittextfield={() => this.edittextfield(item.id)}
          />
        ))}
      </div>
    );
  }
  updateevent() {}

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
