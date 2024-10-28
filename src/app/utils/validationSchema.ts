import * as Yup from 'yup';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const registerValidationSchema = Yup.object({
  firstName: Yup.string().required('You must write a name'),
  lastName: Yup.string().required('You must write a last name'),
  userEmail: Yup.string().matches(emailRegex, 'Invalid email address').required('You must write email address'),
  userPassword: Yup.string()
    .min(8, 'Your password must be longer than 8 characters')
    .required('You must enter a password'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password and Repeat Password must match')
    .required('You must enter confirm password'),
  isAccept: Yup.boolean()
    .oneOf([true], 'You must accept the terms')
    .required('You must accept the terms to register the site'),
});

const loginValidationSchema = Yup.object({
  userEmail: Yup.string().matches(emailRegex, 'Invalid email address').required('You must write email address'),
  userPassword: Yup.string()
    .min(8, 'Your password must be longer than 8 characters')
    .required('You must enter a password'),
  rememberMe: Yup.boolean(),
});

export { registerValidationSchema, loginValidationSchema };
