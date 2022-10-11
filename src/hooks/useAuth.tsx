import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

// @ts-ignore
const authContext = createContext();

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = (): IAuth => {
  return useContext(authContext) as IAuth;
};

interface IAuth {
  user: {
    username: string;
    betaUser: boolean;
    accountType: string;
  } | null;
  signIn: Function;
  signOut: Function;
  register: Function;
  error: string;
}

const useProvideAuth = (): IAuth => {
  const [user, setUser] = useLocalStorage("auth", null);
  const [error, setError] = useState("");

  const signIn = (username: string, password: string) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        username,
        password,
      })
      .then((r) => {
        setError("");
        if (r.data.username) {
          setUser(r.data);
        }
        if (r.data.error) {
          setError(r.data.error);
        }
      });
  };

  const register = (username: string, password: string, betaUser: boolean) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        username,
        password,
        betaUser,
      })
      .then((r) => {
        setError("");
        if (r.data.username) {
          setUser(r.data);
        }
        if (r.data.error) {
          setError(r.data.error);
        }
      });
  };

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    signIn,
    signOut,
    register,
    error,
  };
};
