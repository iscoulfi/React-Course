import { render, screen } from '@testing-library/react';
import Card from './Card';

const item = {
  id: 3,
  name: 'Summer Smith',
  status: 'Alive',
  species: 'Human',
  gender: 'Female',
  image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
};

describe('Card', () => {
  beforeEach(() => {
    render(<Card {...item} />);
  });

  it('should be on the page', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('has name field', () => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
  });

  it('has image', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', item.image);
  });
});
