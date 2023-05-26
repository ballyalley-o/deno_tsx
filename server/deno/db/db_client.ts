import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.23.1/mod.ts";
import { Database } from "https://deno.land/x/mongo@v0.23.1/src/database.ts";

const MONGOURI = "mongodb://localhost:27017/work_db";

let db: any = null;

export function connect() {
  const client = new MongoClient();
  client.connect(MONGOURI);
  db = client.database("work_db");
}

export function getDB() {
  return db;
}
