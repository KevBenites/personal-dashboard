import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialTodos } from '../data/initial-todos';

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: initialTodos,
      addTodo: (form) =>
        set((state) => {
          const newTodo = {
            id: Date.now(),
            ...form,
          };
          const updated = [...state.todos, newTodo];

          return { todos: updated };
        }),
      editTodo: (id, form) =>
        set((state) => {
          const updated = state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...form } : todo,
          );

          return { todos: updated };
        }),
      completeTodo: (id) =>
        set((state) => {
          const updated = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: true } : todo,
          );

          return { todos: updated };
        }),
      deleteTodo: (id) =>
        set((state) => {
          const updated = state.todos.map((todo) =>
            todo.id === id ? { ...todo, eliminated: true } : todo,
          );

          return { todos: updated };
        }),
    }),
    { name: 'todos-storage' },
  ),
);
