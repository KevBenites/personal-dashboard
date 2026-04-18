import { useEffect, useState } from 'react';
import { initialTodos } from '../data/initial-todos';

export function useTodo() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (form) => {
    const newTodo = {
      id: Date.now(),
      ...form,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, formEdited) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, ...formEdited } // los campos que se quieran editar
          : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, eliminated: !todo.eliminated } : todo,
    );
    setTodos(updated);
  };

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updated);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };
}
