import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with your actual API call or mock data
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(() => {
        // fallback mock data
        setPosts([
          { id: 1, title: "First Post" },
          { id: 2, title: "Second Post" }
        ]);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
