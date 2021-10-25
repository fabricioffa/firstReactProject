import P, { shape } from 'prop-types';
import './styles.css';

import { Postcard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <Postcard key={post.id} title={post.title} cover={post.cover} body={post.body} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  // posts: P.array,  OR
  posts: P.arrayOf(
    shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
