import { useState } from 'react';
import { Modal } from '../../../common/components/modal/modal';
import { TodoInput } from './todo-input';

export const TodoCard = ({
  todo,
  onDelete,
  completeTodo,
  editTodo,
  showActions,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formEdited, setFormEdited] = useState({});

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormEdited((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <li className="bg-linear-to-br from-slate-800 to-slate-900 flex flex-col justify-between min-h-58 p-4 rounded-2xl border border-slate-700 shadow-md hover:scale-[1.02] transition-all">
        <div className="flex flex-col gap-3">
          <h3 className="mb-2 text-xl font-semibold">{todo.title}</h3>
          <p className="mb-2.5 pr-0.5 text-base h-18 overflow-y-auto">
            {todo.description}
          </p>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium
            ${todo.priority === 'alta' && 'bg-red-500/20 text-red-400'}
            ${todo.priority === 'media' && 'bg-yellow-500/20 text-yellow-400'}
            ${todo.priority === 'baja' && 'bg-green-500/20 text-green-400'}
          `}
            >
              {todo.priority}
            </span>
            <span className="text-sm">📅 {todo.dueDate}</span>
          </div>
        </div>

        {showActions && (
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              className="flex-1 bg-green-600/50 hover:bg-green-700 cursor-pointer text-sm py-2 px-1 rounded-2xl transition"
              onClick={() => completeTodo(todo.id)}
            >
              ✔ Completar
            </button>
            <button
              className="flex-1 bg-amber-600/50 hover:bg-amber-700 cursor-pointer text-sm py-2 px-1 rounded-2xl transition"
              onClick={() => {
                setIsEditing((prev) => !prev);
                setFormEdited(todo);
              }}
            >
              ✏️ Editar
            </button>
            <button
              className="flex-1 bg-red-600/50 hover:bg-red-700 cursor-pointer text-sm py-2 px-1 rounded-2xl transition"
              onClick={() => onDelete(todo.id)}
            >
              🗑️ Eliminar
            </button>
          </div>
        )}
      </li>
      {isEditing && (
        <Modal titulo="Editando Todo">
          <div className="mx-auto w-[80%] flex flex-col items-center">
            <div className="flex flex-col items-start gap-4 mb-5">
              <TodoInput
                inputValue={formEdited.title || ''}
                inputType="text"
                inputName="title"
                inputLabel="Título:"
                handleChange={handleChangeEdit}
              />
              <TodoInput
                inputValue={formEdited.dueDate || ''}
                inputType="date"
                inputName="dueDate"
                inputLabel="Fecha de realización:"
                handleChange={handleChangeEdit}
              />
              <TodoInput
                inputSelect
                inputValue={formEdited.priority}
                inputName="priority"
                inputLabel="Prioridad:"
                handleChange={handleChangeEdit}
              />
              <TodoInput
                textArea
                inputValue={formEdited.description}
                // inputType="text"
                inputName="description"
                inputLabel="Descripción:"
                handleChange={handleChangeEdit}
              />

              <button
                className="bg-black text-white p-3 rounded-2xl w-3xs cursor-pointer transform hover:bg-blue-700/60 hover:text-black hover:font-bold active:translate-y-0.5 active:translate-x-0.5"
                onClick={() => {
                  editTodo(todo.id, formEdited);
                  setIsEditing((prev) => !prev);
                }}
              >
                Actualizar Todo
              </button>
            </div>

            <button
              onClick={() => setIsEditing((prev) => !prev)}
              className="mt-4 bg-red-500/70 px-3 py-1.5 rounded-2xl cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
