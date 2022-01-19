import React from 'react';

export default function Todolist({ data, index, donework }) {
  return (
    <div className="mt-4">
      {data.isDone === false ? (
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="isDone"
            name="isDone"
            id={data.id}
            onClick={(e) => {
              donework(index);
              console.log(e.target.id, index, data.isDone);
            }}
          />
          <h4 className="ms-4 ">{data.work}</h4>
        </div>
      ) : (
        <div>
          <h4 className="text-decoration-line-through">{data.work}</h4>
        </div>
      )}
    </div>
  );
}
