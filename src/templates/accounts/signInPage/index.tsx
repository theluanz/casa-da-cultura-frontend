import React from 'react';
import LoginForm from './LoginForm';

const SignInPage: React.FC = () => {
  return (
    <div className="w-1/2 mx-auto h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-xl mb-4 text-center">Casa da Cultura Admin</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInPage;
