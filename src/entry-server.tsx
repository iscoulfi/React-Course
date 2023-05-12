import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setupStore } from './redux/store';
import { Provider } from 'react-redux';
import { getCharactersByQuery } from './redux/slices/search/asyncActions';

const store = setupStore();

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  await store.dispatch(getCharactersByQuery(''));
  const preloadedState = store.getState();

  const initialCards = () => {
    return `
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
    `;
  };

  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );

  return { stream, initialCards };
}
