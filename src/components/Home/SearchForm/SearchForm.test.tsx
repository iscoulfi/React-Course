import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  beforeEach(() => {
    render(<SearchForm />);
  });

  it('renders search input', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('shows input change', () => {
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
