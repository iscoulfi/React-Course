import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('shows text on the page', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/page not found/i);
  });
});
