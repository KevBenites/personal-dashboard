import { useState } from 'react';
import { todayModified } from '../../../common/utils/date-format';

const initialForm = {
  title: '',
  description: '',
  completed: false,
  priority: 'baja',
  createdAt: todayModified,
  dueDate: '',
};

export function useForm(onAdd) {
  const [formValues, setFormValues] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (formValues.title.trim() === '') {
      alert('Ingrese un titulo');
      return;
    }
    onAdd(formValues);
    setFormValues(initialForm);
  };

  return {
    formValues,
    handleClick,
    handleChange,
  };
}
