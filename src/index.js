import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import './i18n';
import { store } from 'redux/configureStore';
import { add401Interceptor } from 'http/index';

import { main } from 'theme';
import GlobalStyle from 'components/GlobalStyle';
import AppRouter from './router';

add401Interceptor(store.dispatch);

ReactDOM.render(
  <>
    <GlobalStyle />
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={main}>
        <ThemeProvider theme={main}>
          <AppRouter />
        </ThemeProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  </>,
  document.getElementById('root'),
);
