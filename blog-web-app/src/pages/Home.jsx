import React from 'react';
import PostList from '../components/PostList';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <PostList />
    </div>
  );
}

export default Home;
