import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
function PostItem() {
  return (
    <div className="w-full  flex items-center justify-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full sm:w-4/5 md:w-3/5 mx-4"
        shadow="sm"
      >
        <CardBody>
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:gap-12 sm:justify-start justify-center">
            <Image
              isBlurred
              width={"100%"}
              height={200}
              isZoomed

              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              alt="NextUI Album Cover"
              className='w-full h-full'
            />

            <span>111</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostItem;
