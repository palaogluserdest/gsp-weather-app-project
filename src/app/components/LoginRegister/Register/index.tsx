'use client';
import { registerValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import './Register.scss';
import InputGroup from '../../shared/InputGroup';

type FormikValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  isAccept: boolean;
};

const Register = () => {
  const formikInitialValues: FormikValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
    isAccept: false,
  };

  const handleSubmitForm = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <>
      <h1 className="register-title">REGISTER</h1>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmitForm}
        validationSchema={registerValidationSchema}
      >
        <Form className="register-form-group">
          <InputGroup type="text" label="First Name" value="firstName" />
          <InputGroup type="text" label="Last Name" value="lastName" />
          <InputGroup type="email" label="Email" value="email" />
          <InputGroup type="password" label="Password" value="password" />
          <InputGroup type="password" label="Repeat Password" value="rePassword" />

          <div className="register-check-group">
            <Field type="checkbox" id="acceptBox" name="isAccept" className="register-check-box" />
            <label htmlFor="acceptBox" className="register-check-box-label">
              I have read and accept the terms
            </label>
            <ErrorMessage name="isAccept" component="span" className="register-accept-error-message" />
          </div>
          <Button type="submit">REGISTER</Button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
