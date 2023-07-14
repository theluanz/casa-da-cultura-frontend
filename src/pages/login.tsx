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
    if (auth.token) {
      router.push('/dashboard');
    }

  }, [auth]);
  const router = useRouter();


  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <SignInPage />
    </div>
  );
};

export default App;
