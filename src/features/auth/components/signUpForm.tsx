import { useState } from 'react';
import * as Form from '@radix-ui/react-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../shared/hooks/useAuth';
import { useNavigate } from '@tanstack/react-router';
import FormField from '../../../shared/components/formField';
import ErrorMessage from '../../../shared/components/errorMessage';
import { LoginSchema } from '../../../core/utils/validations';

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { signIn } = useAuth();
  const navigate = useNavigate({ from: '/login' });

  const onSubmit = (data: { username: string; password: string }) => {
    const { username, password } = data;
    if (username === 'admin' && password === 'Test1234!') {
      setErrorMessage('');
      signIn();
      navigate({ to: '/profile' });
    } else {
      setErrorMessage('This user does not exist');
    }
  };

  return (
    <Form.Root
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

      <FormField
        dataTestid="username"
        name="username"
        label="Login"
        type="text"
        register={register}
        error={errors.username}
      />

      <FormField
        dataTestid="password"
        name="password"
        label="Password"
        type="password"
        register={register}
        error={errors.password}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <Form.Submit asChild>
        <button
          data-testid="sign-up-btn"
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Sign in
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignUpForm;
