import { Post } from '@/types/post';
import Pagination from './Pagination';

interface PostListProps {
  posts: Post[];
  currentPage: number;
  totalPage: number;
}

export default function PostList({
  posts,
  currentPage,
  totalPage,
}: PostListProps) {
  return (
    <div className="container mx-auto max-w-3xl">
      {posts.map((post) => {
        return (
          <div className="mt-8" key={post.slug}>
            <h1 className="text-2xl">{post.title}</h1>
            <span>{post.date}</span>
            <p className="mt-4">{post.description}</p>
          </div>
        );
      })}
      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </div>
  );
}
