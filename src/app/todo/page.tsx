'use client';

import useTodoStore from '@/shared/lib/store/todo';

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

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
      <input type="text" />
      <button onClick={() => addTodo('test')}>Add</button>
    </div>
  );
};

export default TodoPage;
