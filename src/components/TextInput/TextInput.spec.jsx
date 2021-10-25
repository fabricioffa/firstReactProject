import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  const fn = jest.fn();

  it('should have a value of searchValue', () => {
    render(<TextInput searchValue="sunt" handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('sunt');
  });

  it('should call handleChange on each key pressing', () => {
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const { contaneir } = render(<TextInput handleChange={fn} />);
    expect(contaneir).toMatchSnapshot();
  });
});
