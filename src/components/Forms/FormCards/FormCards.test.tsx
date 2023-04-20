import { render } from '@testing-library/react';
import { vi } from 'vitest';
import * as hooks from '../../../redux/store';
import FormCards from './FormCards';

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

describe('<FormCards/>', () => {
  it('FormCards mounts properly', () => {
    vi.spyOn(hooks, 'useAppSelector').mockReturnValue({ cards });
    const wrapper = render(<FormCards />);
    expect(wrapper).toBeTruthy();
  });
});
