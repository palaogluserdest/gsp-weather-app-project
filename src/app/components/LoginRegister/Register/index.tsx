'use client';
import { registerValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import './Register.scss';
import InputGroup from '../../shared/InputGroup';
import { FormikRegisterValues } from '@/app/types/types';

const Register = () => {
  const formikInitialValues: FormikRegisterValues = {
    firstName: '',
    lastName: '',
    userRegisterEmail: '',
    userRegisterPassword: '',
    rePassword: '',
    isAccept: false,
  };

  const handleSubmitForm = (values: FormikRegisterValues) => {
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
          <InputGroup type="text" label="First Name" id="firstName" name="firstName" />
          <InputGroup type="text" label="Last Name" id="lastName" name="lastName" />
          <InputGroup type="email" label="Email" id="userRegisterEmail" name="userRegisterEmail" />
          <InputGroup type="password" label="Password" id="userRegisterPassword" name="userRegisterPassword" />
          <InputGroup type="password" label="Repeat Password" id="rePassword" name="rePassword" />

          <div className="register-check-group">
            <Field type="checkbox" id="acceptBox" name="isAccept" className="register-check-box" />
            <label htmlFor="acceptBox" className="register-check-box-label">
              I have read and accept the terms
            </label>
            <ErrorMessage name="isAccept" component="span" className="register-accept-error-message" />
          </div>
          <Button type="submit" className="register-btn">
            REGISTER
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
