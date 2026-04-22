import { createBrowserRouter } from 'react-router';

import { Home } from '../app/home/home';
import { Todo } from '../app/todo/todo';
import { Aboutme } from '../app/about-me/about-me';
import { CompletedTasks } from '../app/todo/completed-tasks';
import { DashboardLayout } from '../common/layouts/dashboard-layout';
import { DeletedTasks } from '../app/todo/deleted-tasks';
import { Pokemones } from '../app/pokemon/pokemones';
import { PokemonDetails } from '../features/pokemon/components/pokemon-details';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about-me',
        Component: Aboutme,
      },
      {
        path: 'todo',
        Component: Todo,
      },
      {
        path: 'deleted-todos',
        Component: DeletedTasks,
      },
      {
        path: 'completed-todos',
        Component: CompletedTasks,
      },
      {
        path: '/pokemones',
        Component: Pokemones,
      },
      {
        path: '/pokemones/pokemon-details',
        Component: PokemonDetails,
      },
    ],
  },
]);
