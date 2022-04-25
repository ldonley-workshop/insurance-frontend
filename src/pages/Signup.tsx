import React from "react";
import FullpageFormLayout from "../components/layouts/fullpageFormLayout";
import SignupForm from "../components/forms/SignupForm";

const Login = () => {
  return (
    <FullpageFormLayout artUrl="https://images.unsplash.com/photo-1632355244320-02b377f2db19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80">
      <SignupForm />
    </FullpageFormLayout>
  );
};

export default Login;
