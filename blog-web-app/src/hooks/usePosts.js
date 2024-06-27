import { useEffect, useState } from 'react';

function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return posts;
}

export default usePosts;
