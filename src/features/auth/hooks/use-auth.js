import { useState } from 'react';
import { loginService } from '../services/auth-service';
import { useAuthStore } from '../store/auth-store';

export const useAuth = () => {
  const { token, setToken, logout } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ username, password }) => {
    setIsLoading(true);
    const token = await loginService({ username, password });
    setToken(token);
    setIsLoading(false);
  };

  return {
    token,
    login,
    logout,
    isLoading,
    setIsLoading,
    isAuthenticated: !!token,
  };
};
