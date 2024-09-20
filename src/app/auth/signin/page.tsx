import { SignIn } from '@/components/signIn'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: '登录 - 你好哈哈',
  description: '登录博客，发表评论，撰写文章，享受个性化内容服务。',
  keywords: ['登录', '你好哈哈', '博客', '发表评论', '撰写文章'],
  robots: 'noindex, nofollow',  // 防止搜索引擎索引登录页
};

export default function page() {

  return (
    <div>
      <SignIn/>
    </div>
  )
}
