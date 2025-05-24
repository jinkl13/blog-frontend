import Link from 'next/link';

export default function PostItem({ post }) {
  return (
    <li>
      <Link href={`/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
  );
}
