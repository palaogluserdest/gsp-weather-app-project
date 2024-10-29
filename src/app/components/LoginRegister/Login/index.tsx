'use client';
import { loginValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import './Login.scss';
import InputGroup from '../../shared/InputGroup';

type FormikValues = {
  userLoginEmail: string;
  userLoginPassword: string;
  rememberMe: boolean;
};

const Login = () => {
  const formikInitialValues: FormikValues = {
    userLoginEmail: '',
    userLoginPassword: '',
    rememberMe: false,
  };

  const handleSubmitForm = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="login-title">LOGIN</h1>
      <Formik initialValues={formikInitialValues} onSubmit={handleSubmitForm} validationSchema={loginValidationSchema}>
        <Form className="login-form-group">
          <InputGroup type="email" label="Email" value="userLoginEmail" />
          <InputGroup type="password" label="Password" value="userLoginPassword" />

          <div className="login-check-group">
            <Field type="checkbox" id="acceptBox" name="rememberMe" className="login-check-box" />
            <label htmlFor="acceptBox" className="login-check-box-label">
              Remember me
            </label>
            <ErrorMessage name="isAccept" component="span" className="login-accept-error-message" />
          </div>
          <Button type="submit" className="login-btn">
            LOGIN
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
