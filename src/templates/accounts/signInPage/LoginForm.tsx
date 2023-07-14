import React from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { Form } from '../../shared/Form';
import type { FC } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthResponse, authenticateService } from '../../../services/AuthenticateService';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { Router, useRouter } from 'next/router';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const LoginForm: FC = () => {
  const LoginUserForm = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const { handleSubmit } = LoginUserForm;
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    try {
      const authInfo = await authenticateService(data.email, data.password);
      const [auth, setAuth] = useLocalStorage<AuthResponse>('auth', {
        token: authInfo.token,
        userId: authInfo.userId,
      });
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...LoginUserForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-xs">
        <Form.Field>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Input type="text" name="email" />
          <Form.ErrorMessage field="email" />
        </Form.Field>

        <Form.Field>
          <Form.Label htmlFor="password">Senha</Form.Label>
          <Form.Input type="password" name="password" />
          <Form.ErrorMessage field="password" />
        </Form.Field>

        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Entrar
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
