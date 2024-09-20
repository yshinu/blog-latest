import { Card, CardBody } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';

function ContentLoading() {
  return (
    <div className='w-full flex justify-center items-center'>
      <Card className=" max-w-[900px] mt-10 sm:p-4 p-1 w-full mx-3 sm:w-5/6">
        <CardBody>
          <Skeleton className="w-full mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-5/6 mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-3/4 mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
           <Skeleton className="w-full mt-4 rounded-lg">
            <div className="h-8 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
        </CardBody>
      </Card>
    </div>
  );
}

export default ContentLoading;
