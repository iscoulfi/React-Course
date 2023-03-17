import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { products } from '../../../assets/data';

const item = products[0];

test('Render card', () => {
  render(<Card {...item} />);
  expect(screen.getByText(/price/i)).toBeInTheDocument();
});
