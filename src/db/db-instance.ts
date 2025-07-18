import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { schema } from './schema';
import path from 'path';



const dbFilePath = path.resolve( 'src', 'db', 'sqlite.db');


declare global {
  // Ensures singleton during hot reloads
  var _db: ReturnType<typeof drizzle<typeof schema>> | undefined;
}


const sqlite = global._db ?? drizzle(new Database(dbFilePath), { schema });

if (process.env.NODE_ENV !== 'production') {
  global._db = sqlite;
}

export const db = sqlite;