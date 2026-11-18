import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

let pool: Pool | undefined =
  process.env.NODE_ENV !== "production"
    ? globalForDb.__arenaNextJsPostgresqlPool
    : undefined;
let database: ReturnType<typeof drizzle> | undefined;

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  if (!pool) {
    pool = new Pool({ connectionString: databaseUrl });
    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsPostgresqlPool = pool;
    }
  }

  if (!database) {
    database = drizzle(pool);
  }

  return database;
}
