import { worker_work_heap } from "./mod.ts";

//deno run --allow-read main.ts

console.time("worker_work_heap single");
await worker_work_heap();
console.timeEnd("worker_work_heap single");

console.time("worker_work_heap concurrent");
await Promise.allSettled(Array.from(Array(5)).map(() => worker_work_heap()));
console.timeEnd("worker_work_heap concurrent");

console.time("worker_work_heap sequential");
for (let i = 0; i < 5; i++) {
  await worker_work_heap();
}
console.timeEnd("worker_work_heap sequential");
