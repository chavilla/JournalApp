import React from 'react'
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
    return (
        <>
      <h3 className='auth__title'>Register</h3>
      <form>
        <div className='auth__container-input'>
        <input className='auth__input' 
        id='email'
        type="email" 
        name="email"
        autoComplete='off'
        placeholder='Email'
        />
        </div>

        <div className='auth__container-input'>
        <input 
        className='auth__input' 
        id='name'
        type="name" 
        name="name" 
        autoComplete='off'
        placeholder='Name'
        />
        </div>

        <div className='auth__container-input'>
        <input 
        className='auth__input' 
        id='password' 
        type="password" 
        name="password" 
        placeholder='Password'
        />
        </div>

        <div className='auth__container-input'>
        <input 
        className='auth__input' 
        id='password' 
        type="password" 
        name="confirm" 
        placeholder='Confirm Password'
        />
        </div>

        <button className='btn btn-primary btn-block mt-1' type="submit">Sig In</button>
        
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
        <Link to='/auth/login' className='link'>
            Already registered?
        </Link>
      </form>
    </>
    )
}

export default RegisterScreen;