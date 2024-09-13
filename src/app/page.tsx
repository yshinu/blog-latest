import HomeHeader from "@/components/homeHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '主页-你好哈哈',
  description: '一个分享学习和生活的个人博客页面',
}
export default function Home(){
  return <main >
    <HomeHeader/>
  </main>
}