import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('shows Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
