import { worker_work_heap } from "./mod.ts";

//deno run --allow-read main.ts

console.time("worker_work_heap 1");
await worker_work_heap();
console.timeEnd("worker_work_heap 1");

console.time("worker_work_heap 5 concurrent");
await Promise.allSettled(Array.from(Array(5)).map(() => worker_work_heap()));
console.timeEnd("worker_work_heap 5 concurrent");

console.time("worker_work_heap 5 sequential");
for (let i = 0; i < 5; i++) {
  await worker_work_heap();
}
console.timeEnd("worker_work_heap 5 sequential");
