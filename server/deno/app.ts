import { Application } from "https://deno.land/x/oak/mod.ts";
import workRoute from "./routes/work.ts";
import { connect } from "./db/db_client.ts";
import { appExpress } from "./helpers/headers.ts";

connect();



const app = new Application();
const PORT = 8000;

appExpress(app);


app.use(workRoute.routes());
app.use(workRoute.allowedMethods());


app.use(async (ctx, next) => {
  console.log('PROCESSING...')
  await next()
});

const CONNECTION = await app.listen({ port: PORT });

console.log(`SERVER STATUS: Running on PORT: ${PORT}...`);