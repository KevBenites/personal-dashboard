import { useForm } from '../hooks/use-form';
import { TodoInput } from './todo-input';

export const TodoForm = ({ onAdd }) => {
  const { formValues, handleClick, handleChange } = useForm(onAdd);

  return (
    <div className="mx-auto w-[80%] flex flex-col items-center">
      <div className="flex flex-col items-start gap-4 mb-5">
        <TodoInput
          inputValue={formValues.title}
          inputType="text"
          inputName="title"
          inputLabel="Título:"
          handleChange={handleChange}
        />
        <TodoInput
          inputValue={formValues.dueDate}
          inputType="date"
          inputName="dueDate"
          inputLabel="Fecha de realización:"
          handleChange={handleChange}
        />
        <TodoInput
          inputSelect
          inputValue={formValues.priority}
          inputName="priority"
          inputLabel="Prioridad:"
          handleChange={handleChange}
        />
        <TodoInput
          textArea
          inputValue={formValues.description}
          // inputType="text"
          inputName="description"
          inputLabel="Descripción:"
          handleChange={handleChange}
        />
      </div>
      <button
        className="bg-black text-white p-3 rounded-2xl w-3xs cursor-pointer transform hover:bg-blue-700/60 hover:text-black hover:font-bold active:translate-y-0.5 active:translate-x-0.5"
        onClick={handleClick}
      >
        Registrar Todo
      </button>
    </div>
  );
};
