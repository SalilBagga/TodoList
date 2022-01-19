import React, { useState } from 'react';
import uuid from 'react-uuid';

export default function Addtodo({ setTodolist }) {
  const [work, setWork] = useState({ id: uuid(), work: '', isDone: false });
  const handlesubmit = (e) => {
    e.preventDefault();
    work.work = work.work.trim();
    if (work.work !== '') {
      setTodolist((prev) => [...prev, work]);
    }

    setWork({ work: '', isDone: false });
  };

  return (
    <div>
      <form className="d-flex mt-4" onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task.."
          value={work.work}
          onChange={(e) => setWork({ id: uuid(), work: e.target.value, isDone: false })}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
