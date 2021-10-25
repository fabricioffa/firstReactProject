import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { postsPropsMock as props } from './mock';

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts posts={props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.img');
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(0);

    // Or
    // expect(screen.queryByRole("heading", { name: /title/i })).not.toBeInTheDocument(q);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts posts={props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
