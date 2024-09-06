import { Link } from "@tanstack/react-router";
import Container from "./container";
import { useAuth } from "../hooks/useAuth";
import { Avatar, Button } from "@radix-ui/themes";

const { isLogged, signOut } = useAuth();

const activeProps = {
  style: { textDecoration: "underline", color: "#3E63DD" },
};

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex gap-4 items-center">
          <Link
            to="/"
            activeProps={activeProps}
            className="hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            activeProps={activeProps}
            className="hover:text-blue-700"
          >
            About
          </Link>
          {isLogged() ? (
            <Link
              to="/profile"
              activeProps={activeProps}
              className="hover:text-blue-700"
            >
              Profile
            </Link>
          ) : (
            <Link
              className="ml-auto hover:text-blue-700"
              to="/login"
              activeProps={activeProps}
            >
              Login
            </Link>
          )}
          {isLogged() && (
            <div className="flex gap-4 items-center ml-auto">
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Button onClick={signOut}>Sign Out</Button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
