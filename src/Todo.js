import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.line
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // edittextfield(evt, id) {
  //   // evt.preventDefault();
  //   var x = document.getElementById(this.props.id);
  //   // x.iscontentEditable;
  //   if (x.iscontentEditable === true) {
  //     x.contentEditable = false;
  //     console.log('cant edit');
  //   } else if (x.contentEditable === false) {
  //     x.contentEditable = true;
  //     console.log('can edit');
  //   }
  // }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  rendercheckbutton() {
    let result;
    if (this.state.isEditing === false) {
      result = (
        <div>
          <p>{this.state.task}</p>

          <button onClick={this.toggleForm}>edit</button>
          <button onClick={this.props.removeEvent}>delete</button>
        </div>
      );
    } else {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" name="task" onChange={this.handleChange} value={this.state.task} />
            <button>apply</button>
          </form>
        </div>
      );
    }
    return result;
  }
  render() {
    // let line = 'yo';
    // console.log(this.props.editing);

    return (
      <div className="todo">
        {/* <form >
          <label htmlFor="event"></label>
          <button>edit</button>
          <button>delete</button>
        </form> */}
        {this.rendercheckbutton()}
        {/* <button>edit</button>
        <button onClick={this.props.removeEvent}>delete</button> */}
      </div>
    );
  }
}

export default Todo;
