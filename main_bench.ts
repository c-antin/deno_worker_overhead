import { work_heap, work_noop, work_stack_only } from "./work.ts";
import {
  worker_work_heap,
  worker_work_noop,
  worker_work_stack_only,
} from "./mod.ts";

//deno bench --allow-read

Deno.bench("work noop", () => {
  work_noop();
});

Deno.bench("work stack only", () => {
  work_stack_only();
});

Deno.bench("work heap", () => {
  work_heap();
});

Deno.bench("worker work noop", async () => {
  await worker_work_noop();
});

Deno.bench("worker work stack only", async () => {
  await worker_work_stack_only();
});

Deno.bench("worker work heap", async () => {
  await worker_work_heap();
});

Deno.bench("worker work heap concurrent", async () => {
  await Promise.allSettled(Array.from(Array(5)).map(() => worker_work_heap()));
});
