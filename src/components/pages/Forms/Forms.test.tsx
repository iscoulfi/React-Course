import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import * as hooks from '../../../redux/store';
import Forms from './Forms';

const mockedDispatch = vi.spyOn(hooks, 'useAppDispatch');

const cards = [
  {
    id: '1',
    username: 'Lisa',
    birthday: '1999.12.11',
    gender: 'female',
    image: '',
    agreement: 'agree',
    language: 'english',
  },
];

describe('Forms', () => {
  it('has form on the page', () => {
    const dispatch = vi.fn();
    mockedDispatch.mockResolvedValue(dispatch);
    vi.spyOn(hooks, 'useAppSelector').mockReturnValue({ cards });
    render(<Forms />);
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });
});
