'use client';
import { FC } from 'react';
import { loginValidationSchema } from '@/app/utils/validationSchema';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from '../../shared/Button';
import InputGroup from '../../shared/InputGroup';
import { FormikLoginValues } from '@/app/types/types';
import { getUserFromFS, handleFirestoreError, signIn } from '@/app/libs/user';
import { useRouter } from 'next/navigation';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/app/libs/firebase';
import './Login.scss';

type LoginProps = {
  // eslint-disable-next-line no-unused-vars
  showToastify: (message: string, type: 'success' | 'error') => void;
};

const Login: FC<LoginProps> = ({ showToastify }) => {
  const router = useRouter();

  const formikInitialValues: FormikLoginValues = {
    userLoginEmail: '',
    userLoginPassword: '',
    rememberMe: false,
  };

  const handleSubmitForm = async (values: FormikLoginValues) => {
    try {
      const user = await signIn(values.userLoginEmail, values.userLoginPassword);

      const fetchedUser = await getUserFromFS(user.uid);

      if (fetchedUser) {
        const userRef = doc(db, 'users', fetchedUser.uid);
        await updateDoc(userRef, {
          isAuth: true,
        });
      }

      if (user) {
        showToastify('Log-ingin is successfully. Please redirect...', 'success');

        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = handleFirestoreError(error);
      showToastify(errorMessage, 'error');
    }
  };

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
        </Form>
      </Formik>
    </>
  );
};

export default Login;
