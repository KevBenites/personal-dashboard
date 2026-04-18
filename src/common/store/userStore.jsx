import { create } from 'zustand';

export const userStore = create(() => ({
  user: {
    firstName: 'Kevin',
    lastName: 'Benites',
    role: 'administrador',
    avatar: 'src/assets/img/foto_kevin.jpg',
  },
}));
