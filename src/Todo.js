
import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  // This is the list of todos
  const [todos, setTodos] = useState([]);

  // This is the current todo being typed in the input
  const [currentTodo, setCurrentTodo] = useState('');

  /**
   * Set the currentTodo as it's being typed
   * @param {Object} event
   */
  const handleChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  /**
   * If todo exists and isn't empty
   * create a new object with a randomized "id" key and
   * push it in the "todos" array.
   * Then reset the input value back to "empty string"
   */
  const handleAddTodo = () => {
    if (currentTodo && currentTodo.length > 0) {
      setTodos(
        [
          ...todos,
          {
            id: Math.random(),
            label: currentTodo,
          },
        ],
      );
      setCurrentTodo('');
    }
  };

  /**
   * User pressed the enter key
   * trigger handleAddTodo() and add that todo in the array
   * @param {Object} event
   */
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  /**
   * User clicked on a todo's delete button.
   * Filter the todos array to remove the one he deleted.
   * @param {number} id
   */
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * Turn the todo array into a displayable list of items.
   * Key the list with the "id" property on a todo element.
   */
  const todoList = todos.map((todo) => (
    <li key={todo.id}>
      {todo.label}
      <button
        type="button"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        &times;
      </button>
    </li>
  ));

  return (
    <div className="TodoWrapper">
      <h1>Stuff I need to do</h1>
      <div className="NewTodo">
        <input
          type="text"
          value={currentTodo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          onClick={handleAddTodo}
        >
          add
        </button>
      </div>
      <ul className="Todos">
        {todoList}
      </ul>
    </div>
  );
};

export default Todo;