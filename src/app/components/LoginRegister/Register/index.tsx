'use client';
import { registerValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import './Register.scss';
import InputGroup from '../../shared/InputGroup';
import { FormikRegisterValues, userProfile } from '@/app/types/types';
import { createUserToDB, signUp } from '@/app/libs/user';
import { Timestamp } from 'firebase/firestore';

const Register = () => {
  const formikInitialValues: FormikRegisterValues = {
    firstName: '',
    lastName: '',
    userRegisterEmail: '',
    userRegisterPassword: '',
    rePassword: '',
    isAccept: false,
  };

  const handleSubmitForm = async (values: FormikRegisterValues) => {
    const user = await signUp(values.userRegisterEmail, values.userRegisterPassword);

    const newUser: userProfile = {
      uid: user.uid,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.userRegisterEmail,
      createdAt: Timestamp.fromDate(new Date()),
    };

    await createUserToDB(newUser);
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
