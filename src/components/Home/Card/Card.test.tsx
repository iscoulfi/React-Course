import { render, screen } from '@testing-library/react';
import Card from './Card';
import { products } from '../../../assets/data';

const item = products[0];

describe('Card', () => {
  beforeEach(() => {
    render(<Card {...item} />);
  });

  it('should be on the page', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('has price field', () => {
    expect(screen.getByText(/price/i)).toBeInTheDocument();
  });
});
