import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
  // transforma o método em async ele está obrigariamente retornando uma promise
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// componente para ser importado como contexto
const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Henrique', signIn }}>
      {/* tudo o que o context provider recebe como filho irá estar repassando */}
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
