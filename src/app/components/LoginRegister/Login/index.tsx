'use client';
import { loginValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import './Login.scss';
import InputGroup from '../../shared/InputGroup';

type FormikValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const formikInitialValues: FormikValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmitForm = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="register-title">LOGIN</h1>
      <Formik initialValues={formikInitialValues} onSubmit={handleSubmitForm} validationSchema={loginValidationSchema}>
        <Form className="register-form-group">
          <InputGroup type="email" label="Email" value="email" />
          <InputGroup type="password" label="Password" value="password" />

          <div className="register-check-group">
            <Field type="checkbox" id="acceptBox" name="isAccept" className="register-check-box" />
            <label htmlFor="acceptBox" className="register-check-box-label">
              Remember me
            </label>
            <ErrorMessage name="isAccept" component="span" className="register-accept-error-message" />
          </div>
          <Button type="submit">LOGIN</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
