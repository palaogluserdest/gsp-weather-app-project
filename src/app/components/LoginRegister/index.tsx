'use client';
import Image from 'next/image';
import Login from './Login';
import Register from './Register';
import Button from '../shared/Button';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './LoginRegister.scss';

const LoginRegister = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [windowSize, setWindowSize] = useState<number>(0);

  const registerStyles = {
    top: '0',
    right: '510px',
  };

  const loginStyles = {
    top: '0',
    right: '0',
  };

  const showToastify = (message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

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
        <div className="auth-login" style={{ display: windowSize <= 864 && !isAuth ? 'none' : '' }}>
          {isAuth && <Login setIsAuth={setIsAuth} showToastify={showToastify} />}
        </div>
        <div className="auth-register" style={{ display: windowSize <= 864 && isAuth ? 'none' : '' }}>
          {!isAuth && <Register setIsAuth={setIsAuth} showToastify={showToastify} />}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
