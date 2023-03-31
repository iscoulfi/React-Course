import { render, screen } from '@testing-library/react';
import Home from './Home';
import { products } from '../../../assets/data';

describe('Home', () => {
  it('shows Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });

  it('checks the number of cards', () => {
    render(<Home />);
    expect(screen.getAllByTestId('card').length).toBe(products.length);
  });
});
