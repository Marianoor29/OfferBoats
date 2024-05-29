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

export const PaymentCardSchema = yup.object().shape({
  name: yup.string().required("Card Holder's name is required"),
  cardNumber: yup
    .string()
    .required("Card Number is required")
    .matches(/^(\d{4} - ){3}\d{4}$/, "Card Number must be in the format xxxx - xxxx - xxxx - xxxx")
    .length(25, "Card Number must be 19 digits long with dashes"),
  expiryDate: yup
    .string()
    .required("Expiry date is required")
    .matches(/^\d{2} \/ \d{2}$/, "Expiry Date must be in the format MM / YY")
    .length(7, "Expiry Date must be in the format MM / YY"),
  cvc: yup.string().min(3).max(4).required("CVC is required"),
});