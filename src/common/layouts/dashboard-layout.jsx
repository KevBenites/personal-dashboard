import { Outlet } from 'react-router';
import { Sidebar } from '../components/sidebar/sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-linear-to-r from-blue-800 to-indigo-900 text-slate-100 font-grotesque-mono">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col p-4 lg:p-8">
            <section className="mt-6 flex-1 rounded-3xl border border-white/10 bg-slate-900/50 p-4 shadow-2xl shadow-slate-950/30 sm:p-6 lg:p-8">
              <Outlet />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
