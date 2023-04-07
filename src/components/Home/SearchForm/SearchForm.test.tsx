import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import { vi } from 'vitest';

describe('SearchForm', () => {
  beforeEach(() => {
    render(<SearchForm searchValue={'rick'} setSearchValue={vi.fn()} />);
  });

  it('renders search input', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows input change', () => {
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
