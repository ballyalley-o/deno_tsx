import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

const MONGOURI = "mongodb://localhost:27017/work_db";

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWitbUri(MONGOURI);

  db = client.database("work_db");
}

export function getDB() {
    return db;
}