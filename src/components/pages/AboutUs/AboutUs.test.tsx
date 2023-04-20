import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('shows text on the page', () => {
    render(<AboutUs />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about/i);
  });
});
