import NavLink from './navLink';

interface AuthLinksProps {
  isAuthenticated: string | null;
}

export default function AuthLinks({ isAuthenticated }: AuthLinksProps) {
  return isAuthenticated ? (
    <NavLink to="/profile" dataTestid="profile-page-btn">
      Profile
    </NavLink>
  ) : (
    <NavLink to="/login" className="ml-auto" dataTestid="login-page-btn">
      Login
    </NavLink>
  );
}
