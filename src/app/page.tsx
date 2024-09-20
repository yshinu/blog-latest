import { getPostWithPage } from "@/action/getPostsAction";
import CustomPagination from "@/components/customPagination";
import HomeHeader from "@/components/homeHeader";
import ListContent from "@/components/list/listContent";
import PostListSkeleton from "@/components/list/postListSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: '主页-你好哈哈',
  description: '一个分享学习和生活的个人博客页面',
}
export default  function Home({searchParams}:{
  searchParams:{
    page:string
  }
}){
  let currentpage = +searchParams.page
  if(Number.isNaN(currentpage)){
    currentpage = 1
  }
  
  return <main>
    <HomeHeader/>
    <div className=" bg-slate-50 flex-col justify-center items-center gap-24">
      <Suspense fallback={<PostListSkeleton/>}>
      <ListContent currentpage={currentpage}/>
      </Suspense>
    <CustomPagination/>
    
    </div>
  
  </main>
}