import * as m from "./work.ts";

self.onmessage = function (ev: MessageEvent) {
  const method = ev.data as string;
  const methods = m as Record<string, unknown>;
  if (typeof methods[method] !== "function") {
    throw new Error(`method '${method}' unknown!`);
  }
  // deno-lint-ignore no-explicit-any
  (methods[method] as any)();
  self.postMessage("done");
  self.close();
};
