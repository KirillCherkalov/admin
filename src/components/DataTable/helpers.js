import { format } from 'date-fns';

export const specificTypeString = (type = 'string', string) => {
  switch (type) {
    case 'boolean':
      return string === true ? 'Yes' : 'No';
    case 'date':
      return format(new Date(string), 'dd/MM/yyyy');
    default:
      return string;
  }
};
