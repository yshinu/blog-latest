import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const connect = neon(process.env.DATABASE_URL!);
export const db = drizzle(connect);

