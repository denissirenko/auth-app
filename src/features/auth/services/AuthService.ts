import { BehaviorSubject } from 'rxjs';
import { singleton } from 'tsyringe';

@singleton()
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<string | null>(
    localStorage.getItem('isAuthenticated') || null,
  );

  signIn() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticatedSubject.next('true');
  }

  signOut() {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticatedSubject.next(null);
  }

  isLogged() {
    return this.isAuthenticatedSubject.asObservable();
  }
}
