'use client';
import React, { FC, useEffect, useState } from 'react';
import { registerValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import InputGroup from '../../shared/InputGroup';
import { FormikRegisterValues, userProfile } from '@/app/types/types';
import { createUserToDB, handleFirestoreError, signUp } from '@/app/libs/user';
import { Timestamp } from 'firebase/firestore';
import './Register.scss';

type RegisterProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  showToastify: (message: string, type: 'success' | 'error') => void;
};

const Register: FC<RegisterProps> = ({ setIsAuth, showToastify }) => {
  const [windowSize, setWindowSize] = useState<number>(0);
  const formikInitialValues: FormikRegisterValues = {
    firstName: '',
    lastName: '',
    userRegisterEmail: '',
    userRegisterPassword: '',
    rePassword: '',
    isAccept: false,
  };

  const handleSubmitForm = async (values: FormikRegisterValues) => {
    try {
      const user = await signUp(values.userRegisterEmail, values.userRegisterPassword);

      const newUser: userProfile = {
        uid: user.uid,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.userRegisterEmail,
        favorites: [],
        isAuth: false,
        createdAt: Timestamp.now(),
      };

      await createUserToDB(newUser);

      showToastify('You have successfully registered. You are being guided...', 'success');

      setTimeout(() => {
        setIsAuth(true);
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = handleFirestoreError(error);
      showToastify(errorMessage, 'error');
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
          {windowSize <= 864 && (
            <Button className="redirect-login" onClick={() => setIsAuth(true)}>
              Do you have an account. Log-in.
            </Button>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default Register;
