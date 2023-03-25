import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home/>', () => {
  test('Home mounts properly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
