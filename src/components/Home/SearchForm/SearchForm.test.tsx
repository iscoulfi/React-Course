import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import { vi } from 'vitest';
import * as hooks from '../../../redux/store';

const mockedDispatch = vi.spyOn(hooks, 'useAppDispatch');

describe('SearchForm', () => {
  beforeEach(() => {
    const dispatch = vi.fn();
    mockedDispatch.mockResolvedValue(dispatch);
    vi.spyOn(hooks, 'useAppSelector').mockReturnValue('');
    render(<SearchForm />);
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
