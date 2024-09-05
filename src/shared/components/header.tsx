import { Link } from "@tanstack/react-router";
import Container from "./container";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </Container>
    </header>
  );
}
