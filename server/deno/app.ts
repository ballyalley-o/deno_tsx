import { Application } from "https://deno.land/x/oak/mod.ts";
import workRoute from "./routes/work.ts";
import { connect } from "./db/db_client.ts";

connect();

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
})


app.use(workRoute.routes());
app.use(workRoute.allowedMethods());


app.use(async (ctx, next) => {
  console.log('PROCESSING...')
  await next()
});

const CONNECTION = await app.listen({ port: PORT });

console.log(`SERVER STATUS: Running on PORT: ${PORT}...`);