import { PostWithPageResult } from "@/action/getPostsAction";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { BookText, Calculator, Calendar, Flame, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
function PostItem({ origindata }:{origindata: PostWithPageResult[number]}) {
  return (
    <div className="w-full  flex items-center justify-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full sm:w-4/5 md:w-3/5 mx-4"
        shadow="sm"
      >
        <CardBody>
          <div className="w-full flex flex-col p-4 sm:flex-row sm:items-center sm:gap-12 sm:justify-start justify-center">
            <div className={`w-full h-[100px] sm:max-w-[240px] sm:max-h-[200px] ${(+origindata.id)%2===0?"sm:order-1":"sm:order-2"}`}>
              <Link href={`/article/content/${origindata.id}`}>
                <Image
                  src={origindata.cover || "/images/cover.jpg"}
                  alt="NextUI Album Cover"
                  width={200}
                  height={160}
                  className="w-full h-full rounded-lg shadow-sm transition-transform duration-300 transform  cursor-pointer"
                />
              </Link>
            </div>
            <div className={`flex flex-col gap-4 order-1  ${(+origindata.id)%2===0?"sm:order-2":"sm:order-1"}`}>
              <Link href={`/article/content/${origindata.id}`}>
                <h4 className=" font-bold test-4xl cursor-pointer">
                  {origindata.title}
                </h4>
              </Link>

              <p className=" line-clamp-3">
                {origindata.summary}
              </p>

              <div className="flex gap-4 items-center flex-wrap text-slate-600">
                <Link href={"#"} className="flex items-center gap-1">
                  <Calendar color="#6F42C1" />
                  <span>{dayjs(origindata.createdAt).format("YYYY-MM-DD HH:mm:ss")}</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                  <BookText color="#6F42C1" />
                  <span>{origindata.category.name}</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                  <Flame color="#6F42C1" />
                  <span>{origindata.viewCount}</span>
                </Link>
               {origindata.tags.map((item) => {
                 return (
                   <Link key={item.tagId} href={"#"} className="flex items-center gap-1">
                     <Tag color="#6F42C1" />
                     <span>{item.tag.name}</span>
                   </Link>
                 );
               })}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostItem;
