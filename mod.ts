function run_worker(method: string) {
  return new Promise((resolve) => {
    const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
      type: "module",
    });
    worker.onmessage = (ev) => {
      resolve(ev.data);
    };
    worker.postMessage(method);
  });
}

export async function worker_work_noop() {
  await run_worker("work_noop");
}

export async function worker_work_stack_only() {
  await run_worker("work_stack_only");
}

export async function worker_work_heap() {
  await run_worker("work_heap");
}
