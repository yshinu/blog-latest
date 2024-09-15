import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { BookText, Calculator, Calendar, Flame, Tag } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
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
            <div className="w-full h-[100px] sm:max-w-[240px] sm:max-h-[200px]">
            <Image
             
              src="/images/cover.jpg"
              alt="NextUI Album Cover"
              width={200}
              height={160}
              className="w-full h-full rounded-lg shadow-sm transition-transform duration-300 transform hover:scale-110 cursor-pointer"
            />

            </div>
            <div className=" flex flex-col gap-4">
              <h4 className=" font-bold test-4xl cursor-pointer">如何学习Nextjs？</h4>

              <p className=" line-clamp-3">
                Next.js 是一个基于 React 的强大框架，专注于构建高性能和可扩展的
                Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。
                Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。
                Web
                应用程序。它提供了许多开箱即用的功能，如服务器端渲染（SSR）、静态生成（SSG）、API
                路由和自动代码拆分，使开发者能够快速构建现代化的用户界面。
              </p>

              <div className="flex gap-4 items-center flex-wrap text-slate-600">
                <Link href={"#"} className="flex items-center gap-1">
                <Calendar color="#6F42C1" />
                  <span>2024-05-05 16:48</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                <BookText color="#6F42C1" />
                  <span>学习</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                <Tag color="#6F42C1" />
                  <span>Nextjs</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                <Flame color="#6F42C1" />
                  <span>180</span>
                </Link>
                <Link href={"#"} className="flex items-center gap-1">
                <Calculator color="#6F42C1" />
                  <span>5866字</span>
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostItem;
