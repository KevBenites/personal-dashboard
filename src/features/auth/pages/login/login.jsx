import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/use-auth';
import { useState } from 'react';

export const LoginPage = () => {
  const { login } = useAuth();
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
    }
  };

  return (
    <form
      className="min-h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="h-105 w-fit p-4 flex flex-col justify-center items-center gap-6">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="username"
          className="w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="px-3 py-2 bg-slate-900 text-white rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
};
