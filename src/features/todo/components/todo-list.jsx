import { TodoCard } from './todo-card';

export const TodoList = ({
  todos,
  toggleTodo,
  onDelete,
  editTodo,
  showActions = true,
}) => {
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 max-h-130 pr-2.5 py-1 pl-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          showActions={showActions}
        />
      ))}
    </ul>
  );
};
