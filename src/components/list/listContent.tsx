import { Spacer } from '@nextui-org/spacer';
import PostItem from './postItem';
import { getPostWithPage } from '@/action/getPostsAction';
import { BackgroundLines } from '../ui/background-lines';
async function ListContent({
  currentpage,
}: {
  currentpage:number;
}) {
  // await new Promise((resolve) => setTimeout(resolve, 511000));
  const blogs = await getPostWithPage(currentpage)
  
  return (
    <ul className="w-full list-none">
          {blogs.map((item) => {
        return (
          <li key={item.id}>
            <Spacer y={4} />
            <PostItem origindata = {item} />
          </li>
        );
      })}

     
      <Spacer y={4} />
    </ul>
  );
}

export default ListContent;
