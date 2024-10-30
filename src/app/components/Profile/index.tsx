'use client';
import { FC } from 'react';
import './Profile.scss';
import InputGroup from '../shared/InputGroup';
import { Form, Formik } from 'formik';
import { FormikPasswordValues, FormikProfileValues } from '@/app/types/types';
import Button from '../shared/Button';
import { passwordValidationSchema, profileValidationSchema } from '@/app/utils/validationSchema';

type ProfileComponentProps = {
  profileData?: string;
};

const ProfileComponent: FC<ProfileComponentProps> = ({ profileData = 'Serdest' }) => {
  const formikProfileValues: FormikProfileValues = {
    firstName: profileData,
    lastName: 'PALAOGLU',
    userEmail: 'test@test.com',
  };

  const formikPasswordValues: FormikPasswordValues = {
    password: '',
    rePassword: '',
  };

  const handleProfileSubmit = (value: FormikProfileValues) => {
    console.log(value);
  };

  const handlePasswordSubmit = (values: FormikPasswordValues) => {
    console.log(values);
  };

  return (
    <div className="profile-container">
      <Formik
        initialValues={formikProfileValues}
        onSubmit={handleProfileSubmit}
        validationSchema={profileValidationSchema}
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
        onSubmit={handlePasswordSubmit}
        validationSchema={passwordValidationSchema}
      >
        <Form className="password-form-container">
          <h2 className="password-title">Password</h2>
          <div className="password-wrapper">
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
