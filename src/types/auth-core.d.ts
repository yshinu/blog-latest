import type { AdapterUser as DefaultAdapterUser } from "@auth/core/adapters";
import { users } from "@/drizzle/schema";

declare module "@auth/core/adapters" {
  export interface AdapterUser extends DefaultAdapterUser {
    id: (typeof users.$inferSelect)["id"];
    avatarUrl: (typeof users.$inferSelect)["avatarUrl"];
    username: (typeof users.$inferSelect)["username"];
    passwordHash:  (typeof users.$inferSelect)["passwordHash"];
    avatarUrl:  (typeof users.$inferSelect)["avatarUrl"];
    createdAt: (typeof users.$inferSelect)["createdAt"];
    updatedAt: (typeof users.$inferSelect)["updatedAt"];
  }
}