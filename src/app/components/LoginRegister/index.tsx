'use client';
import Image from 'next/image';
import Login from './Login';
import './LoginRegister.scss';
import Register from './Register';
import Button from '../shared/Button';
import { useState } from 'react';

const LoginRegister = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  const registerStyles = {
    top: '0',
    left: '0',
  };

  const loginStyles = {
    top: '0',
    left: '510px',
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-cover" style={isAuth ? loginStyles : registerStyles}>
          <Image src="/assets/images/auth-picture.jpg" alt="auth cover" fill />
          {isAuth && (
            <div className={`${isAuth ? 'slide-up-to-down-in-auth' : 'slide-down-to-up-out-auth'} register-message`}>
              <h2 className="register-message-widget-title">Don{"'"}t have an account?</h2>
              <Button className="register-message-btn" onClick={() => setIsAuth(false)}>
                Create an Account
              </Button>
            </div>
          )}
          {!isAuth && (
            <div className={`${!isAuth ? 'slide-up-to-down-in-auth' : 'slide-down-to-up-out-auth'} register-message`}>
              <h2 className="register-message-widget-title">Do you have an account?</h2>
              <Button className="register-message-btn" onClick={() => setIsAuth(true)}>
                Log-In
              </Button>
            </div>
          )}
        </div>
        <div className="auth-login">{isAuth && <Login />}</div>
        <div className="auth-register">{!isAuth && <Register />}</div>
      </div>
    </div>
  );
};

export default LoginRegister;
