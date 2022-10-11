import React from "react"
import OldRegistrationForm from "../components/forms/registration/OldRegistrationForm"
import NewRegistrationForm from "../components/forms/registration/NewRegistrationForm"
import { flags } from "../lib/flags"

const Login = () => {
  return (
    <div>
      {flags.newQuotePage.isEnabled() ? (
        <NewRegistrationForm />
      ) : (
        <OldRegistrationForm />
      )}
    </div>
  )
}

export default Login
