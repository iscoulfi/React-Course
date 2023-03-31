import { render, screen } from '@testing-library/react';

import Forms from './Forms';

describe('Forms', () => {
  it('has form on the page', () => {
    render(<Forms />);
    expect(screen.getByTestId('card-form')).toBeInTheDocument();
  });
});
