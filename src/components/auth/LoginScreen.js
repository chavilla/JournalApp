import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoginEmailPassword, startLoginGoogle } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";
import useForm from "../../hooks/useForm";
import { loginValidation } from "../../validation/loginValidation";

const LoginScreen = () => {
  const dispatch = useDispatch();

  //get the state
  const {
    ui: { msgError, loading },
  } = useSelector((state) => state);

  

  //custom hook
  const [value, handleChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleLogin = (e) => {
    e.preventDefault();

    const { isValid, error } = loginValidation(value);

    if (isValid) {
      dispatch(removeError());
      dispatch(startLoginEmailPassword(email, password));
    } else {
      dispatch(setError(error));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startLoginGoogle());
  };

  return (
    <>
      <h3 className="auth__title">Iniciar Sesión</h3>
      <form onSubmit={handleLogin}
        className='animate__animated animate__fadeIn'
      >
        <div className="auth__container-input">
          <input
            className="auth__input"
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          {msgError && (
            <div className="auth__alert-error">{msgError.email}</div>
          )}
        </div>

        <div className="auth__container-input">
          <input
            className="auth__input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          {msgError && (
            <div className="auth__alert-error">{msgError.password}</div>
          )}
        </div>

        <button
          disabled={loading ? true : false}
          className="btn btn-primary btn-block mt-1"
          type="submit"
        >
          Login
        </button>

        {msgError && msgError.message ? (
          <div className="auth__messageNotExist">{msgError.message}</div>
        ) : null}

        <div className="auth__social-network">
          <p>Login with Social Networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
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
        <Link to="/auth/register" className="link">
          Create an account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
