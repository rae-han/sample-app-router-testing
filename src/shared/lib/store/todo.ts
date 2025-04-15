import { create } from 'zustand';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Todos {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<Todos>((set) => ({
  todos: [
    { id: 1, title: 'test', completed: false },
    { id: 2, title: 'test2', completed: true },
    { id: 3, title: 'test3', completed: false },
    { id: 4, title: 'test4', completed: true },
  ],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
