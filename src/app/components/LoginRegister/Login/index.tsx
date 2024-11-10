'use client';
import React, { FC, useEffect, useState } from 'react';
import { loginValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import InputGroup from '../../shared/InputGroup';
import { FormikLoginValues } from '@/app/types/types';
import { getUserFromFS, handleFirestoreError } from '@/app/libs/user';
import { useRouter } from 'next/navigation';
import './Login.scss';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/app/libs/firebase';

type LoginProps = {
  // eslint-disable-next-line no-unused-vars
  showToastify: (message: string, type: 'success' | 'error') => void;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: FC<LoginProps> = ({ showToastify, setIsAuth }) => {
  const [windowSize, setWindowSize] = useState<number>(0);
  const router = useRouter();

  const formikInitialValues: FormikLoginValues = {
    userLoginEmail: '',
    userLoginPassword: '',
    rememberMe: false,
  };

  const handleSubmitForm = async (values: FormikLoginValues) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.userLoginEmail, password: values.userLoginPassword }),
      });

      const userData = await response.json();

      const user = userData.user;
      const error = userData.error;

      if (error) {
        const errorMessage = handleFirestoreError(error);
        showToastify(errorMessage, 'error');
        return;
      }

      const fetchedUser = await getUserFromFS(user.uid);

      if (fetchedUser) {
        const userRef = doc(db, 'users', fetchedUser.uid);
        await updateDoc(userRef, {
          isAuth: true,
        });
      }

      if (user) {
        showToastify('Log-in is successfully. Please redirect...', 'success');
        setTimeout(() => {
          router.push('/');
        }, 1000);
      }
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
      <h1 className="login-title">LOGIN</h1>
      <Formik initialValues={formikInitialValues} onSubmit={handleSubmitForm} validationSchema={loginValidationSchema}>
        <Form className="login-form-group">
          <InputGroup type="email" label="Email" id="userLoginEmail" name="userLoginEmail" />
          <InputGroup type="password" label="Password" id="userLoginPassword" name="userLoginPassword" />

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
          {windowSize <= 864 && (
            <Button className="redirect-register" onClick={() => setIsAuth(false)}>
              Don{"'"}t you have an account. Register
            </Button>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default Login;
