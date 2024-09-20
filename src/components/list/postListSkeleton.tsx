import { Card } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
function PostListSkeleton() {
  return (
    <div className='w-full flex justify-center items-center mt-4'>
        <Card
      className="border-none bg-background/60 dark:bg-default-100/50 w-full sm:w-4/5 md:w-3/5 mx-4 p-4"
      radius="lg"
    >
      <div className='w-full h-full flex justify-center items-center'>
      <div className=" w-4/5">
        <Skeleton className="rounded-lg w-1/2">
          <div className="h-8 rounded-lg bg-default-300"></div>
        </Skeleton>

        <Skeleton className="w-3/5 mt-4 rounded-lg">
          <div className="h-24 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 mt-4 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <div className=" flex-1 ">
        <Skeleton className="w-full rounded-lg">
          <div className="w-full h-32 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      </div>
    </Card>
    </div>
  );
}

export default PostListSkeleton;
