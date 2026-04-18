import { TodoList } from '../components/todo-list';
import { useTodoContext } from '../context/todo-context';

export function DeletedTasksPage() {
  const { todos } = useTodoContext();
  const eliminatedTodos = todos.filter((todo) => todo.eliminated);
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl text-center font-bold mb-7">
          Tareas Eliminadas
        </h1>
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-7">Historial</h2>
        {eliminatedTodos.length === 0 ? (
          <p>No hay tareas eliminadas.</p>
        ) : (
          <TodoList todos={eliminatedTodos} showActions={false} />
        )}
      </div>
    </>
  );
}
