import React from "react";
import FullpageFormLayout from "../components/layouts/fullpageFormLayout";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <FullpageFormLayout artUrl="https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80">
      <LoginForm />
    </FullpageFormLayout>
  );
};

export default Login;
