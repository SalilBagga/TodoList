import { useContext } from 'react';

//CSS
import './App.css';

//pages
import Todo from './pages/Todo';
//context
import { ThemeContext } from './context/ThemeContext';
function App() {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.theme === true ? 'dark-mode' : 'default-mode'}`}>
      <div className="main-cointainer">
        <Todo />
      </div>
    </div>
  );
}

export default App;
