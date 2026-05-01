import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/use-auth';
import { useState } from 'react';

export const LoginPage = () => {
  const { login, isLoading, setIsLoading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ username: form.username, password: form.password });
      navigate('/');
    } catch {
      alert('Username or password are incorrect');
      setIsLoading(false);
      setForm({
        username: '',
        password: '',
      });
    }
  };

  return (
    <form
      className="min-h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="h-105 w-fit py-4 px-6 flex flex-col justify-center items-center gap-6 border-2 border-gray-500 rounded-2xl">
        <h1 className="text-3xl font-bold">Login</h1>
        <h2 className="text-base text-black/70 font-semibold">
          Bienvenido a la TodoApp
        </h2>

        <input
          type="text"
          placeholder="username"
          value={form.username}
          className="w-2xs focus:outline-white/50 focus:outline-none px-4 py-1 border border-slate-700 rounded-lg"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={form.password}
          className="w-2xs focus:outline-white/50 focus:outline-none px-4 py-1 border border-slate-700 rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          className={`px-5 py-2 bg-slate-900 text-white rounded-lg cursor-pointer ${isLoading ? 'disabled:bg-red-500/80' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading' : 'Submit'}
        </button>
      </div>
    </form>
  );
};
