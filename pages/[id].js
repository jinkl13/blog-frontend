import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(() => {
        // fallback mock data
        const mock = {
          1: { id: 1, title: "First Post", content: "This is a mock post." },
          2: { id: 2, title: "Second Post", content: "Another mock post." }
        };
        setPost(mock[id]);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
