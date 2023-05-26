import { Router } from "https://deno.land/x/oak/mod.ts";
import { Worker } from "../models/Worker.ts";
import { getDB } from "../db/db_client.ts";

const router = new Router();

let works: Worker[] = [];


router.get("/workers", async (ctx) => {
    try {
        const db = getDB();
        const workers = await db.collection("workers").find();
        ctx.response.body = { message: "FETCH SUCCESSFUL", response: workers };
    } catch (error) {
        console.log(error);
        ctx.response.body = { message: "FAILED TO FETCH REQUEST" };
    }
});

router.get("/workers/:workerId", async (ctx) => {
    try {
        const db = getDB();
        const workerId = ctx.params.workerId;
        const worker = await db.collection("workers").findOne({ _id: { $oid: workerId } });
        ctx.response.body = {
            message: `FETCH Worker_no: ${workerId}, SUCCESSFUL`,
            reponse: worker,
        };
    } catch (error) {
        console.log(error);
        ctx.response.body = { message: "FAILED TO FETCH REQUEST" };
    }
});

router.post("/workers", async (ctx) => {
    try {
        const db = getDB();
        const reqBody = await ctx.request.body();
        const data = await reqBody.value;
        console.log(data);
        const newWorker: Worker = {
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            workId: data.workId,
            job: data.job,
            department: data.department,
        };
        const insertWorker = await db.collection("workers").insertOne(newWorker);
        ctx.response.body = {
            message: "ADDED WORKER, SUCCESSFUL",
            response: insertWorker,
        };
    } catch (error) {
        console.log(error);
        ctx.response.body = { message: "FAILED TO CREATE REQUEST" };
    }
});

router.put("/workers/:workerId", async (ctx) => {
    try {
        const db = getDB();
        const workerId = ctx.params.workerId;
        const reqBody = await ctx.request.body();
        const data = await reqBody.value;
        const updateWorker = await db.collection("workers").updateOne({ _id: { $oid: workerId } }, { $set: { firstName: data.firstName, lastName: data.lastName, birthday: data.birthday, workId: data.workId, job: data.job, department: data.department } });
        ctx.response.body = {
            message: `UPDATED Worker_no: ${workerId}, SUCCESSFUL`,
            reponse: updateWorker,
        };
    } catch (error) {
        console.log(error);
        ctx.response.body = { message: "FAILED TO FETCH REQUEST" };
    }
})