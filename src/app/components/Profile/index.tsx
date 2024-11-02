/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import './Profile.scss';
import InputGroup from '../shared/InputGroup';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormikPasswordValues, FormikProfileValues } from '@/app/types/types';
import Button from '../shared/Button';
import { passwordValidationSchema, profileValidationSchema } from '@/app/utils/validationSchema';
import { useAuth } from '@/app/hooks/useAuth';
import { changePassword, changeProfileInfo } from '@/app/libs/user';
import { toast } from 'react-toastify';

const ProfileComponent = () => {
  const { userData } = useAuth();

  const formikProfileValues: FormikProfileValues = {
    firstName: userData?.firstName || '',
    lastName: userData?.lastName || '',
    userEmail: userData?.email || '',
  };

  const formikPasswordValues: FormikPasswordValues = {
    curPassword: '',
    password: '',
    rePassword: '',
  };

  const handleProfileSubmit = async (value: FormikProfileValues) => {
    try {
      await changeProfileInfo(value.firstName, value.lastName, value.userEmail);
      toast.success('Your information was changed successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handlePasswordSubmit = async (
    values: FormikPasswordValues,
    resetForm: FormikHelpers<FormikPasswordValues>['resetForm'],
  ) => {
    try {
      await changePassword(values.curPassword, values.password);
      toast.success('Your password was changed successfully');
      resetForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="profile-container">
      <Formik
        initialValues={formikProfileValues}
        onSubmit={handleProfileSubmit}
        validationSchema={profileValidationSchema}
        enableReinitialize
      >
        <Form className="profile-form-container">
          <h2 className="profile-title">Profile Information</h2>
          <div className="full-name-wrapper">
            <InputGroup className="first-name" label="First Name" type="text" id="firstName" name="firstName" />
            <InputGroup className="last-name" label="Last Name" type="text" id="lastName" name="lastName" />
          </div>
          <InputGroup label="Email" type="email" id="userEmail" name="userEmail" />
          <Button type="submit" className="profile-btn">
            Change Information
          </Button>
        </Form>
      </Formik>
      <Formik
        initialValues={formikPasswordValues}
        onSubmit={(values, { resetForm }) => handlePasswordSubmit(values, resetForm)}
        validationSchema={passwordValidationSchema}
      >
        <Form className="password-form-container">
          <h2 className="password-title">Password</h2>
          <div className="password-wrapper">
            <InputGroup
              className="re-password"
              label="Current Password"
              type="password"
              id="curPassword"
              name="curPassword"
            />
            <InputGroup className="password" label="Password" type="password" id="userPassword" name="password" />
            <InputGroup
              className="re-password"
              label="Repeat Password"
              type="password"
              id="rePassword"
              name="rePassword"
            />
          </div>
          <Button type="submit" className="password-btn">
            Change Password
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileComponent;
