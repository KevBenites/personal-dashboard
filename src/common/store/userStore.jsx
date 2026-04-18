import { create } from 'zustand';

export const userStore = create(() => ({
  user: {
    firstName: 'Kevin',
    lastName: 'Benites',
    role: 'administrador',
    avatar: '/img/foto_kevin.jpg',
  },
}));
