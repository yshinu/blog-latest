import { Spacer } from '@nextui-org/spacer';
import PostItem from './postItem';

function ListContent() {
  return (
    <div className='w-full'>
        <Spacer y={4}/>
      <PostItem id='1'/>
        <Spacer y={4}/>
        <PostItem id='2' />
        <Spacer y={4}/>
        <PostItem id='3'/>
        <Spacer y={4}/>
        <PostItem id='4'/>
        <Spacer y={4}/>
    </div>
  );
}

export default ListContent;
