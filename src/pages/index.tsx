import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Button } from 'antd';
import SignInPage from '../templates/accounts/signInPage';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useRouter } from 'next/router';
import { AuthResponse } from '../services/AuthenticateService';

const App: FC = () => {

  const [auth, setAuth] = useLocalStorage<AuthResponse>('auth', {
    token: '',
    userId: '',
  });
  useEffect(() => {
    setAuth({ token: '', userId: '' });
  }, []);
  const router = useRouter();
  useEffect(() => {
    if (auth.token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <p>Carregando</p>
    </div>
  );
};

export default App;
