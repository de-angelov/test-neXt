import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema'; // your drizzle schema file

declare global {
  // Ensures singleton during hot reloads
  var _db: ReturnType<typeof drizzle> | undefined;
}

const sqlite = global._db ?? drizzle(new Database('sqlite.db'), { schema });

if (process.env.NODE_ENV !== 'production') {
  global._db = sqlite;
}

export const db = sqlite;