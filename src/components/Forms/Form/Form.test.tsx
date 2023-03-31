import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
    render(<Form refreshCards={vi.fn} />);
  });

  it('shows text form mounts properly', () => {
    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });

  it('shows date form mounts properly', () => {
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
  });

  it('shows radio form mounts properly', () => {
    expect(screen.getAllByText(/male/i)[0]).toBeInTheDocument();
  });

  it('shows select form mounts properly', () => {
    expect(screen.getByText(/english/i)).toBeInTheDocument();
  });

  it('has input with placeholder', () => {
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
  });
});
