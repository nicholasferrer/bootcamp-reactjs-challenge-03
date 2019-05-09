import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/global';
import Routes from './router';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
