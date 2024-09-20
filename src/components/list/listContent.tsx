import { Spacer } from '@nextui-org/spacer';
import PostItem from './postItem';
import { Pagination } from '@nextui-org/pagination';
import { blogPosts } from '@/db/schema';
type HomeBlog = {
  
}
function ListContent({
  blogs,
}: {
  blogs: Array<>;
}) {
  return (
    <div className="w-full">
      {blogs.map((item) => {
        return (
          <>
            <Spacer y={4} />
            <PostItem id="1" />
          </>
        );
      })}
      <Spacer y={4} />
    </div>
  );
}

export default ListContent;
