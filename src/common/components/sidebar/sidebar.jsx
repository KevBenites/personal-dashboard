import { Link } from 'react-router';
import { UserSection } from './user-section';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../../../features/auth/store/auth-store';

export function Sidebar() {
  const { logout } = useAuthStore();

  return (
    <aside className="lg:w-80 lg:min-h-screen bg-slate-950/65 border-b lg:border-r border-white/10">
      <div className="h-130 lg:h-220 flex flex-col justify-between px-5 py-6 lg:px-6">
        <div>
          <UserSection />

          <div className="mt-10">
            <div className="mt-3">
              <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
                Navigation
              </h2>

              <nav className="mt-4 space-y-2 gap-8 flex lg:flex-col lg:gap-4">
                <Link to="/">Home</Link>
                <Link to="/about-me">About Me</Link>
              </nav>
            </div>
            <div className="mt-8">
              <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
                todo - module
              </h2>

              <nav className="mt-4 space-y-2 gap-8 flex lg:flex-col lg:gap-4">
                <Link to="/todo">TODO</Link>
                <Link to="/completed-todos">Completed Tasks</Link>
                <Link to="/deleted-todos">Deleted Tasks</Link>
              </nav>
            </div>
            <div className="mt-8">
              <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
                pokemon - module
              </h2>

              <nav className="mt-4 space-y-2 gap-8 flex lg:flex-col lg:gap-4">
                <Link to="/pokemones">Pokemones</Link>
              </nav>
            </div>
          </div>
        </div>

        <button
          className="border border-red-500/50 rounded-lg p-2 text-red-500/50 flex gap-2 cursor-pointer"
          onClick={logout}
        >
          <LogOut /> <p>Logout</p>
        </button>
      </div>
    </aside>
  );
}
