const firstTodos = [
  {
    id: 1,
    title: 'Estudiar React',
    description: 'Repasar las clases de useState y Custom hooks',
    completed: false,
    eliminated: false,
    priority: 'media',
    dueDate: '2026-04-20',
    createdAt: '2026-04-15',
  },
  {
    id: 2,
    title: 'Ir a la piscina',
    description:
      'La proxima semana ir a la piscina con mi familia por el cumpleaños de mi primo Carlos que vive en Chorrillos. Primero, tomaremos un bus desde el paradero 1. Luego, bajamos en el paradero tres postes. Por ultimo, caminaremos hasta la piscina que se encuentra a 3 cuadras.',
    completed: false,
    eliminated: false,
    priority: 'baja',
    dueDate: '2026-04-23',
    createdAt: '2026-04-15',
  },
];

if (!localStorage.getItem('todos')) {
  localStorage.setItem('todos', JSON.stringify(firstTodos));
}

export const initialTodos = JSON.parse(localStorage.getItem('todos'));
