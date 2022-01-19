import React, { useState, useEffect } from 'react';

//CSS
import './Todo.css';

//Components
import Tophead from '../components/Tophead';
import Addtodo from '../components/Addtodo';
import Todolist from '../components/Todolist';

export default function Todo() {
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('todo-list'));
    if (savedList) {
      setTodolist(savedList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todolist));
  }, [todolist]);
  const donework = (index) => {
    let obj = todolist[index];
    obj.isDone = !obj.isDone;
    todolist[index] = obj;
    setTodolist([...todolist]);
  };
  return (
    <div>
      <Tophead />
      <Addtodo setTodolist={setTodolist} />
      {todolist.length > 0 &&
        todolist.map((data, index) => (
          <Todolist data={data} key={index} index={index} donework={donework} />
        ))}
    </div>
  );
}
