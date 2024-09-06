import NavLink from "./navLink";

interface AuthLinksProps {
  isAuthenticated: string | null;
}

export default function AuthLinks({ isAuthenticated }: AuthLinksProps) {
  return isAuthenticated ? (
    <NavLink to="/profile">Profile</NavLink>
  ) : (
    <NavLink to="/login" className="ml-auto">
      Login
    </NavLink>
  );
}
