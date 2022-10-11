import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginError = () => {
  const auth = useAuth();
  if (auth.error) {
    return (
      <div className="bg-red-100 rounded-md p-2 border border-red-200 text-red-900">
        {auth.error}
      </div>
    );
  }
  return null;
};

export default LoginError;
