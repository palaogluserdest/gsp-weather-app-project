'use client';
import Image from 'next/image';
import Login from './Login';
import Register from './Register';
import Button from '../shared/Button';
import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import './LoginRegister.scss';
import 'react-toastify/dist/ReactToastify.css';

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

  const showToastify = (message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
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
        <div className="auth-login">{isAuth && <Login showToastify={showToastify} />}</div>
        <div className="auth-register">{!isAuth && <Register setIsAuth={setIsAuth} showToastify={showToastify} />}</div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        className="toastify-bar"
      />
    </div>
  );
};

export default LoginRegister;
