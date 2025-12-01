import './App.css'
import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
function App() {

    const [todos, setTodos] = useState([]);

    const createTodo = (text) => {
        setTodos((prev) => [...prev, { id: Date.now() + Math.random(), text }]);
      };

  return (
    <div>
      <h1>To do</h1>
 <CreateTodo onCreate={createTodo}/>
 <TodoList todos={todos}/>
    </div>
  )
}

export default App