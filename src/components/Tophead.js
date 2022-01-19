import React, { useContext } from 'react';

//context
import { ThemeContext } from '../context/ThemeContext';
export default function Tophead() {
  const context = useContext(ThemeContext);
  return (
    <div className="d-flex align-items-center justify-content-between pt-4">
      <h1>Todo List</h1>
      <h1>
        <span
          className="sun-icon"
          onClick={() => {
            context.setTheme(!context.theme);
          }}
        >
          &#9728;
        </span>
      </h1>
    </div>
  );
}
