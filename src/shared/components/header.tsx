import Container from "./container";
import { useAuth } from "../hooks/useAuth";
import NavLink from "./navLink";
import AuthLinks from "./authLinks";
import UserProfile from "./userProfile";

const menuItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <header>
      <Container>
        <nav className="flex gap-4 items-center">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <AuthLinks isAuthenticated={isAuthenticated} />
          {isAuthenticated && <UserProfile signOut={signOut} />}
        </nav>
      </Container>
    </header>
  );
}
