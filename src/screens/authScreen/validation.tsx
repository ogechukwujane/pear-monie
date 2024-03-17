import * as yup from 'yup';

export const SignUpvalidationSchema = yup.object({
  username: yup.string().trim().required('user name required!'),
  email: yup.string().trim().email().required('email required!'),
  password: yup
    .string()
    .trim()
    .required('password required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{8,})/,
      'Must Contain 8 Characters, Uppercase, Lowercase, Number and Special Character',
    ),
});

export const LoginvalidationSchema = yup.object({
  username: yup.string().trim().required('username required!'),
  password: yup.string().trim().required('password required!'),
});
