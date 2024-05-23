import * as yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().
  required("FirstName is required"),
  lastName: yup.string().
  required("LastName is required"),
  email: yup
    .string()
    .required('Email is required')
    .email('Email format is invalid.'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be atleast 6 characters long'),
  ConfirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Password must match'),
});

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email format is invalid.'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be atleast 6 characters long'),
});
export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email format is invalid.'),
});
