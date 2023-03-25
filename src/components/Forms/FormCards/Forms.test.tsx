import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
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
    const wrapper = render(<FormCards cards={cards} />);
    expect(wrapper).toBeTruthy();
  });
});
