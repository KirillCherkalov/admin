import { string, object } from 'yup';

export const schemaAdd = object().shape({
  username: string().required(),
  password: string().required(),
  email: string().email().required(),
});

export const schemaEdit = object().shape({
  username: string().required(),
  email: string().email().required(),
});
