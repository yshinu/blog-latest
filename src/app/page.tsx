import { getPostWithPage } from "@/action/getPostsWithPageAction";
import CustomPagination from "@/components/customPagination";
import HomeHeader from "@/components/homeHeader";
import ListContent from "@/components/list/listContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '主页-你好哈哈',
  description: '一个分享学习和生活的个人博客页面',
}
export default async function Home({searchParams}:{
  searchParams:{
    page:string
  }
}){
  let currentpage = +searchParams.page
  if(Number.isNaN(currentpage)){
    currentpage = 1
  }
  const blogs = await getPostWithPage(currentpage)
  return <main>
    <HomeHeader/>
    <div className=" bg-slate-50 flex-col justify-center items-center gap-24">
      <ListContent blogs={blogs}/>
      <CustomPagination/>
    </div>
  
  </main>
}