import { Heading } from "@radix-ui/themes";
import SignUpForm from "../features/auth/componets/signUpForm";

export default function LoginPage() {
  return (
    <>
      <Heading as="h1" align="center">
        Login Page
      </Heading>
      <SignUpForm />
    </>
  );
}
