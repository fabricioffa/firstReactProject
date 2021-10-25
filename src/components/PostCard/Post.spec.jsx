import { render, screen } from '@testing-library/react';
import { Postcard } from './index';
import { postCardPropsMock as props } from './mock';

describe('<Postcard />', () => {
  it('should render PostCard correctly', () => {
    render(<Postcard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.img');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Postcard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
