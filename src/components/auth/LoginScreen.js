import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = ({ history }) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    history.push('/journal');
  }

  return (
    <>
      <h3 className='auth__title'>Iniciar Sesión</h3>
      <form
      onSubmit={ handleSubmit }
      >
        <div className='auth__container-input'>
        <input className='auth__input' 
        type="email" name="email" autoComplete='off' placeholder='Email' />
        </div>

        <div className='auth__container-input'>
        <input className='auth__input' type="password" name="password" placeholder='Password' />
       
        </div>

        <button className='btn btn-primary btn-block mt-1' type="submit">Login</button>
        
        <div className='auth__social-network'>
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
        <Link to='/auth/register' className='link'>
            Create an account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
