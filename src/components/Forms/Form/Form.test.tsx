import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('shows validate errors if fields are not filled', async () => {
    await userEvent.click(screen.getByTestId('submit-form'));
    expect(screen.getByText(/please enter username/i)).toBeInTheDocument();
  });

  it('shows validate error if username less than 3', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'vi');
    await userEvent.click(screen.getByTestId('submit-form'));
    expect(screen.getByText(/length must be 3 or more/i)).toBeInTheDocument();
  });

  it('shows that the image is loaded', async () => {
    const file = new File(['picture'], 'picture.png', { type: 'image/png' });
    const input = screen.getByTestId('image-upload') as HTMLInputElement;
    await userEvent.upload(input, file);
    expect(input.files).toHaveLength(1);
  });
});
