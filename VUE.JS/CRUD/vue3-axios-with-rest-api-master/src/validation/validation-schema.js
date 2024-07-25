import * as yup from 'yup';
export const CategorySchema = yup.object({
    name: yup.string().required('Name is required').min(3,'Name must be at least 3 characters'),
    description: yup.string().required('Description is required').min(3,'Description must be at least 3 characters'),
  });

  export const UserSchema = yup.object({
    username: yup.string().required('User Name is required').min(3, 'User name must be at least 3 characters'),
    age: yup.number().required('Age is required').min(18, 'Age must be at least 18 year old'),
    email: yup.string().required('Email is required').email('Email must be a valid email address'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
  });