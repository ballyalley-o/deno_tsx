import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();


export function appExpress(app: Application) {
    app.use(async (ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    ctx.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    await next();
    })
}