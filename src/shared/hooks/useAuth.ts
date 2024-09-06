import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { AuthService } from "../../core/services/AuthService";

export const useAuth = () => {
  const authService = container.resolve(AuthService);
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null);

  useEffect(() => {
    const subscription = authService.isLogged().subscribe(setIsAuthenticated);
    return () => subscription.unsubscribe();
  }, [authService]);

  return {
    signIn: () => authService.signIn(),
    signOut: () => authService.signOut(),
    isAuthenticated,
  };
};

export type AuthContext = ReturnType<typeof useAuth>;
