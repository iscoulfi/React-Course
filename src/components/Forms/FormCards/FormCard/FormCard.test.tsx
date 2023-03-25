import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const card = {
  id: '1',
  username: 'Lisa',
  birthday: '1999.12.11',
  gender: 'female',
  image: '',
  agreement: 'agree',
  language: 'english',
};

describe('<FormCard/>', () => {
  beforeEach(() => {
    render(<FormCard {...card} />);
  });

  it('renders card with username', () => {
    expect(screen.getByText(/Lisa/i)).toBeInTheDocument();
  });

  it('renders card with image alt attribute', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Image');
  });
});
