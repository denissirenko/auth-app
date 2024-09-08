import { Heading } from '@radix-ui/themes';
import SignUpForm from '../features/auth/components/signUpForm';

export default function LoginPage() {
  return (
    <>
      <Heading as="h1" align="center" data-testid="login-page">
        Login Page
      </Heading>
      <SignUpForm />
    </>
  );
}
