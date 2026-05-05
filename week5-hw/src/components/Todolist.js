import React, { useState } from 'react';
import addbtn from '../assets/img/add.png';
import deletebtn from '../assets/img/delete.png';

const Todolist = () => {
  const [inputTodo, setInputTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = inputTodo.trim();

    if (newTodo === '') {
      alert('내용을 입력해 주세요');
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        checked: false,
      },
    ]);
    setInputTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id="wrap">
      <header>
        <h1>TO-DO LIST</h1>
        <form className="add" onSubmit={addTodo}>
          <input
            type="text"
            placeholder="오늘 할 일을 입력해 주세요!"
            className="addvalue"
            id="Input_Todo"
            value={inputTodo}
            onChange={(event) => setInputTodo(event.target.value)}
          />
          <button type="submit" id="addbtn">
            <img src={addbtn} alt="add" />
          </button>
        </form>
      </header>
      <main id="main">
        {todos.map((todo) => (
          <div className="list" key={todo.id}>
            <div className="leftBox">
              <input
                type="checkbox"
                id={`check${todo.id}`}
                className="checkBox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
              />
              <p className={`todoText ${todo.checked ? 'checked' : ''}`}>
                {todo.text}
              </p>
            </div>
            <button
              type="button"
              className="removeBtn"
              onClick={() => removeTodo(todo.id)}
            >
              <img src={deletebtn} alt="delete" />
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Todolist;
