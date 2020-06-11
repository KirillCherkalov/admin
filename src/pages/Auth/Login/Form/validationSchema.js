import { string, object } from 'yup';

const schema = object().shape({
  email: string().email().required(),
  password: string().required(),
});

export default schema;
