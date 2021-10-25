import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  const fn = jest.fn();

  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(1); // To make sure the assertion will occur (if async)

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="Load more" onClick={fn} disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
