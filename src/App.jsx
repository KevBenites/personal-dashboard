import { RouterProvider } from 'react-router/dom';
import { router } from './router/router';
import { TodoProvider } from './features/todo/context/todo-provider';

export function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
}
