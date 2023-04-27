import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './redux/store';

interface IPreload {
  __PRELOADED_STATE__?: RootState;
}

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={setupStore((window as IPreload).__PRELOADED_STATE__)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
