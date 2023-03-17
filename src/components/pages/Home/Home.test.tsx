import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home/>', () => {
  test('Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });

  test('Render first card', () => {
    render(<Home />);
    expect(screen.getByText(/snoop/i)).toBeInTheDocument();
  });
});
