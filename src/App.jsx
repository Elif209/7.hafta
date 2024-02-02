import React, { useState } from 'react';
import './App.css';

function App() {
  const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: newTodo }]);
        setNewTodo('');
      }
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
      <div className='container'>
        <div className='header'>
          <h2>Bugün Yapılacaklar Listesi</h2>
        </div>
        <div >
          <input id='girdi'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button id='buton1' onClick={addTodo}>Ekle</button>
        </div>
        <ul className='list-group'>
          {todos.map((todo, index) => (
            <li id='list1' key={todo.id}>
              {todo.text}
              <button id='complete' onClick={() => completeTodo(index)}>Tamamlandı</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return <TodoApp />;
}

export default App;
