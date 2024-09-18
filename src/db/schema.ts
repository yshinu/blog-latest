// schema.ts

import {
    pgTable,
    serial,
    varchar,
    integer,
    text,
    timestamp,
    primaryKey,
    uniqueIndex,
    index,
  } from 'drizzle-orm/pg-core';
  import { relations, sql } from 'drizzle-orm';
  
  // 1. 用户表 (users)
  export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull(),
    email: varchar('email', { length: 100 }).notNull().unique(),
    avatarUrl: varchar('avatar_url', { length: 255 }), // 默认可空，无需 .nullable()
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(()=>sql`now()`), // 使用 $onUpdateFn
  });
  
  // 2. 分类表 (categories)
  export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull().unique(),
    description: text('description'), // 默认可空
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(()=>sql`now()`),
  });
  
  // 3. 标签表 (tags)
  export const tags = pgTable('tags', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(()=>sql`now()`),
  });
  
  // 4. 博文表 (blog_posts)
  export const blogPosts = pgTable('blog_posts', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull(),
    categoryId: integer('category_id').notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    summary: text('summary').notNull(),
    content: text('content').notNull(),
    cover: varchar('cover', { length: 255 }),
    viewCount: integer('view_count').default(0),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(()=>sql`now()`),
  });
  
  // 定义 blogPosts 表与 users 和 categories 表的关系
  export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
    author: one(users, {
      fields: [blogPosts.userId],
      references: [users.id],
    }),
    category: one(categories, {
      fields: [blogPosts.categoryId],
      references: [categories.id],
    }),
    tags: many(blogPostTags),
    comments: many(comments),
    likes: many(likes),
    views: many(views),
  }));
  
  // 5. 博文标签关联表 (blog_post_tags)
  export const blogPostTags = pgTable(
    'blog_post_tags',
    {
      blogPostId: integer('blog_post_id').notNull(),
      tagId: integer('tag_id').notNull(),
    },
    (table) => ({
        primaryKey: primaryKey({ columns: [table.blogPostId, table.tagId] }), 
      // 索引
      blogPostIdIndex: index('idx_blog_post_id').on(table.blogPostId),
      tagIdIndex: index('idx_tag_id').on(table.tagId),
    })
  );
  
  // 定义 blogPostTags 表与 blogPosts 和 tags 表的关系
  export const blogPostTagsRelations = relations(blogPostTags, ({ one }) => ({
    blogPost: one(blogPosts, {
      fields: [blogPostTags.blogPostId],
      references: [blogPosts.id],
    }),
    tag: one(tags, {
      fields: [blogPostTags.tagId],
      references: [tags.id],
    }),
  }));
  
  // 6. 评论表 (comments)
  export const comments = pgTable('comments', {
    id: serial('id').primaryKey(),
    blogPostId: integer('blog_post_id').notNull(),
    userId: integer('user_id').notNull(),
    parentCommentId: integer('parent_comment_id'), // 默认可空，无需 .nullable()
    content: text('content').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().$onUpdateFn(()=>sql `now()`),
  });
  
  // 定义 comments 表与 blogPosts 和 users 表的关系
  export const commentsRelations = relations(comments, ({ one, many }) => ({
    blogPost: one(blogPosts, {
      fields: [comments.blogPostId],
      references: [blogPosts.id],
    }),
    author: one(users, {
      fields: [comments.userId],
      references: [users.id],
    }),
    parentComment: one(comments, {
      fields: [comments.parentCommentId],
      references: [comments.id],
    }),
    likes: many(likes), // 移除 where 条件
  }));
  
  
  // 7. 点赞表 (likes)
  export const likes = pgTable(
    'likes',
    {
      id: serial('id').primaryKey(),
      userId: integer('user_id').notNull(),
      likeableType: varchar('likeable_type', { length: 50 }).notNull(), // 'blog_post' 或 'comment'
      likeableId: integer('likeable_id').notNull(),
      createdAt: timestamp('created_at').defaultNow(),
    },
    (table) => ({
      // 索引
      likeableIndex: index('idx_likeable').on(table.likeableType, table.likeableId),
    })
  );
  
  // 定义 likes 表与 users 表的关系
  export const likesRelations = relations(likes, ({ one }) => ({
    user: one(users, {
      fields: [likes.userId],
      references: [users.id],
    }),
    // 多态关联需要在应用逻辑中处理
  }));
  
  // 8. 浏览记录表 (views)
  export const views = pgTable('views', {
    id: serial('id').primaryKey(),
    blogPostId: integer('blog_post_id').notNull(),
    userId: integer('user_id'), // 默认可空，无需 .nullable()
    viewedAt: timestamp('viewed_at').defaultNow(),
  });
  
  // 定义 views 表与 blogPosts 和 users 表的关系
  export const viewsRelations = relations(views, ({ one }) => ({
    blogPost: one(blogPosts, {
      fields: [views.blogPostId],
      references: [blogPosts.id],
    }),
    user: one(users, {
      fields: [views.userId],
      references: [users.id],
    }),
  }));
  