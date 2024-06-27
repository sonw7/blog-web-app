import React from 'react';
import { Link } from 'react-router-dom';
import usePosts from '../hooks/usePosts';

function PostList() {
  const posts = usePosts();
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="text-2xl font-bold">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
