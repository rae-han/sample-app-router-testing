'use client';

import useTodoStore from '@/shared/lib/store/todo';
import { useState } from 'react';

const TodoPage = () => {
  const [text, setText] = useState('');
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleAddTodo = () => {
    if (text.length <= 0) {
      window.alert('Please enter a todo');
      return;
    }

    addTodo(text);
    setText('');
  };

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.title}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoPage;
