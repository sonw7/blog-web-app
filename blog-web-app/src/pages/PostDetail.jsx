import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  // Fetch post detail using id
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post Detail</h1>
      {/* Render post detail here */}
    </div>
  );
}

export default PostDetail;
