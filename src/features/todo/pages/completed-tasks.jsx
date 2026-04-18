import { TodoList } from '../components/todo-list';
import { useTodoStore } from '../store/todoStore';

export function CompletedTasksPage() {
  const { todos } = useTodoStore();
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl text-center font-bold mb-7">
          Tareas Completadas
        </h1>
      </div>
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-7">Lista</h2>
        {completedTodos.length === 0 ? (
          <p>No hay tareas completadas.</p>
        ) : (
          <TodoList todos={completedTodos} showActions={false} />
        )}
      </div>
    </>
  );
}
