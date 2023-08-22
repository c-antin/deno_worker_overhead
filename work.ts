export function work_noop() {}

export function work_stack_only() {
  let sum = 0;
  for (let i = 0; i < 100_000_000; i++) {
    sum++;
  }
  return sum;
}

export function work_heap() {
  let sum = "";
  for (let i = 0; i < 2_000_000; i++) {
    sum += "#";
  }
  return sum;
}
