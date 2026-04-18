import { useTodo } from '../hooks/use-todo';
import { TodoContext } from './todo-context';

export function TodoProvider({ children }) {
  const todoState = useTodo();

  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  );
}
