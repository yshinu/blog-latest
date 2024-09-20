import { db } from '@/db/db';
import { blogPosts } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function getPostWithPage( page :number) {
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  const posts = await db
    .select({
        field1:blogPosts.id,
        field2:blogPosts.summary,
        field3:blogPosts.title,
        field4:blogPosts.content,
        field5:blogPosts.cover
    })
    .from(blogPosts)
    .orderBy(desc(blogPosts.createdAt))
    .limit(pageSize)
    .offset(offset);

  return posts;
}
