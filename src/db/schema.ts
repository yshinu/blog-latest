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
    AnyPgColumn,
  } from 'drizzle-orm/pg-core';
  import { AnyColumn, relations, sql } from 'drizzle-orm';
  
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
    userId: integer('user_id').notNull().references(()=>users.id),
    categoryId: integer('category_id').notNull().references(()=>categories.id),
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
    views: many(views),
  }));
  
  // 5. 博文标签关联表 (blog_post_tags)
  export const blogPostTags = pgTable(
    'blog_post_tags',
    {
      blogPostId: integer('blog_post_id').notNull().references(()=>blogPosts.id),
      tagId: integer('tag_id').notNull().references(()=>tags.id),
    },
    (table) => ({
        primaryKey: primaryKey({ columns: [table.blogPostId, table.tagId] }), 
  
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
    blogPostId: integer('blog_post_id').notNull().references(()=>blogPosts.id),
    userId: integer('user_id').notNull().references(()=>users.id),
    parentCommentId: integer('parent_comment_id').references(():AnyPgColumn=>comments.id), // 默认可空，无需 .nullable()
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
  