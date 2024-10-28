import Login from './Login';
import './LoginRegister.scss';
import Register from './Register';

const LoginRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-login">
          <Login />
        </div>
        <div className="auth-register">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
