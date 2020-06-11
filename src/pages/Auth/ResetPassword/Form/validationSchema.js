import { string, object, ref } from 'yup';

const schema = object().shape({
  password: string().required(),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must be equal')
    .required(),
});

export default schema;
