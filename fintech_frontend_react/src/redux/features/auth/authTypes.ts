export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: { name: string } | null;
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  