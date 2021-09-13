import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Routes from './utils/routes';
import store from './store';
import * as S from './App.styles';
import theme from './utils/theme';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <S.Background>
        <Routes />
        <ToastContainer />
      </S.Background>
    </ThemeProvider>
  </Provider>
);

export default App;
