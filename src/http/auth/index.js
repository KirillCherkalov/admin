import { http } from '../index';
import * as formatters from './formatters';

export const login = credentials => http.post('/auth/login', credentials).then(formatters.login);

export const restorePassword = data => http.post('auth/password/forgot', data);

export const resetPass = data => http.post(`auth/password/reset/?resetPasswordToken=${data.token}`, data);
