import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
//import { registerValidation } from "../../validation/registerValidation";

const RegisterScreen = () => {
  const [values, handlechange] = useForm({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    //const isValid = registerValidation(values);
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Error</div>
        <div className="auth__container-input">
          <input
            className="auth__input"
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={handlechange}
          />
        </div>

        <div className="auth__container-input">
          <input
            className="auth__input"
            id="name"
            type="text"
            name="displayName"
            autoComplete="off"
            placeholder="Name"
            value={displayName}
            onChange={handlechange}
          />
        </div>

        <div className="auth__container-input">
          <input
            className="auth__input"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlechange}
          />
        </div>

        <div className="auth__container-input">
          <input
            className="auth__input"
            id="password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handlechange}
          />
        </div>

        <button className="btn btn-primary btn-block mt-1" type="submit">
          Sig In
        </button>

        <div className="auth__social-network">
          <p>Login with Social Networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
