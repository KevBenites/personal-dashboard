import { Link } from 'react-router';
import { UserSection } from './user-section';

export function Sidebar() {
  return (
    <aside className="lg:w-80 lg:min-h-screen bg-slate-950/65 border-b lg:border-r border-white/10">
      <UserSection />
      <div className="flex flex-col px-5 py-6 lg:px-6">
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
      </div>
    </aside>
  );
}
