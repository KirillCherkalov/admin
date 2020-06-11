import { http } from '../index';

export const list = ({ page = 0, pageSize = 10, search = '', column = '', order = 'asc' }) =>
  http.get('/users', {
    params: { page, pageSize, search, column, order },
  });

export const create = data => http.post('/users', data);

export const remove = id => http.delete(`/users/${id}`);

export const edit = ({ id, username, email }) => http.put(`/users/${id}`, { username, email });
