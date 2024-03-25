import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteAll = () => {
    if (todos.length === 0) {
      alert('Список пуст');
    } else {
      setTodos([]);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите дело"
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <button onClick={handleDeleteAll}>Удалить все</button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  );
}

export default TodoList;

