import PostList from '@/components/PostList';
import { getPaginatedPosts } from '@/lib/posts';

export default function Home() {
  const data = getPaginatedPosts(1);
  return <PostList {...data} />;
}
