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

export const EditUserProfileSchema = yup.object().shape({
  firstName: yup.string().
  required("FirstName is required"),
  lastName: yup.string().
  required("LastName is required"),
  email: yup
    .string()
    .required('Email is required')
    .email('Email format is invalid.'),
    address: yup.string().
    required("Address is required"),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be atleast 6 characters long'),
  ConfirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Password must match'),
});

export const userOfferSchema = yup.object().shape({
  price: yup.number().
  required("Price is required"),
  member: yup.number().
  required("Members is required"),
  duration: yup.number().
  required("Duration is required"),
  description: yup
    .string()
});

export  const PaymentCardSchema = yup.object().shape({
  name: yup.string().required("Card Holder's is required"),
  cardNumber: yup
    .string()
    .required("Card Number is required")
    .min(16, "Card Number must be at least 16 characters long")
    .max(16, "Card Number must be at most 16 characters long"),
  expiryDate: yup
    .string()
    .required("Expiry date is required")
    .min(4, "Expiry Date must be at least 4 characters long")
    .max(4, "Expiry Date must be at most 4 characters long"),
  cvc: yup.string().min(3).max(4).required("Cvc is required"),
});

