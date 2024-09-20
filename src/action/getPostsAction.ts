"use server"
import { db } from '@/db/db';
import { blogPosts } from '@/db/schema';
import { count,  desc, eq } from 'drizzle-orm';

export async function getPostWithPage(page: number) {
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  const posts = await db.query.blogPosts.findMany({
    with: {
      author: {
        columns:{
          id: true,
          username: true,
          avatarUrl: true,
          email:true,

          
        }
      },
      category: true,
      tags: {
        with:{
          tag: true
        }
      },
    },
    limit: pageSize,
    offset: offset,
    orderBy: desc(blogPosts.createdAt),
    columns: {
      id: true,
      summary: true,
      title: true,
      cover: true,
      createdAt:true,
      viewCount:true
    },
  });

  return posts;
}

export async function getPostbyId(id:number) {

  const post = await db.query.blogPosts.findFirst({
    where: eq(blogPosts.id, id),
  })

  return post
  
}

 export const getTotal =async ()=>{
  const blogsCount =await db.select({count:count()}).from(blogPosts).then((res)=>res[0].count)

  return blogsCount
}
 

export type PostWithPageResult = Awaited<ReturnType<typeof getPostWithPage>>;
export type Post = Awaited<ReturnType<typeof getPostbyId>>;
