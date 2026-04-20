import { useState } from 'react';
import { TodoForm } from '../components/todo-form';
import { TodoList } from '../components/todo-list';
import { Modal } from '../../../common/components/modal/modal';
import { useTodoStore } from '../store/todoStore';

export function TodoPage() {
  const { todos, addTodo, completeTodo, deleteTodo, editTodo } = useTodoStore();
  const [modalOpen, setModalOpen] = useState(false);

  const todosShown = todos
    .filter((todo) => !todo.completed)
    .filter((todo) => !todo.eliminated);

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl text-center font-bold mb-7">Crea un Todo</h1>
        <button
          className="bg-black text-white p-3 rounded-2xl w-3xs cursor-pointer transform hover:bg-blue-700 hover:text-black hover:font-bold active:translate-y-0.5 active:translate-x-0.5"
          onClick={() => setModalOpen(true)}
        >
          Agregar Todo
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-7">Lista de tareas</h2>
        {todosShown.length === 0 ? (
          <p>No hay tareas registradas. Por favor, agregue una.</p>
        ) : (
          <TodoList
            todos={todosShown}
            completeTodo={completeTodo}
            editTodo={editTodo}
            onDelete={deleteTodo}
          />
        )}
      </div>
      {modalOpen && (
        <Modal titulo="Nuevo Todo" setModalOpen={setModalOpen}>
          <TodoForm
            onAdd={(todo) => {
              addTodo(todo);
              setModalOpen(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}
