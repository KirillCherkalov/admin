import MockAdapter from 'axios-mock-adapter';

import { http } from './index';

export const mock = new MockAdapter(http, { delayResponse: 100 });
