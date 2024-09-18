import type { JWT as DefaultJWT } from "next-auth/jwt";
import type { User as DefaultUser } from "next-auth";
import {users} from '@/db/schema'
declare module "next-auth" {
  interface User extends DefaultUser {
    id: (typeof users.$inferSelect)["id"];
    avatarUrl: (typeof users.$inferSelect)["avatarUrl"];
    username: (typeof users.$inferSelect)["username"];
    passwordHash:  (typeof users.$inferSelect)["passwordHash"];
    avatarUrl:  (typeof users.$inferSelect)["avatarUrl"];
    createdAt: (typeof users.$inferSelect)["createdAt"];
    updatedAt: (typeof users.$inferSelect)["updatedAt"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: (typeof users.$inferSelect)["id"];
    avatarUrl: (typeof users.$inferSelect)["avatarUrl"];
    username: (typeof users.$inferSelect)["username"];
  }
}