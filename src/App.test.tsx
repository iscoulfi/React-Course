import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

const store = setupStore();

describe('App', () => {
  it('renders main page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows working links', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByTestId('forms-link'));
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });
});
