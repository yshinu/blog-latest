import { Spacer } from '@nextui-org/spacer';
import PostItem from './postItem';

function ListContent() {
  return (
    <div className='w-full'>
        <Spacer y={4}/>
      <PostItem />
        <Spacer y={4}/>
        <PostItem />
        <Spacer y={4}/>
        <PostItem />
        <Spacer y={4}/>
        <PostItem />
        <Spacer y={4}/>
    </div>
  );
}

export default ListContent;
