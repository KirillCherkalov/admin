import { string, object } from 'yup';

export default object().shape({
  email: string().email().required(),
});
