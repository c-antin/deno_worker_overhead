use std::time::Instant;

use deno_worker_overhead::work_heap;

fn main() {
    let ts = Instant::now();
    work_heap();
    println!("work_heap 1: {}ms", ts.elapsed().as_millis());

    let ts = Instant::now();
    let n = 5;
    let mut handles = Vec::with_capacity(n);
    for _ in 0..n {
        handles.push(std::thread::spawn(|| {
            work_heap();
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("work_heap {} concurrent: {}ms", n, ts.elapsed().as_millis());

    let ts = Instant::now();
    for _ in 0..n {
        work_heap();
    }
    println!("work_heap {} sequential: {}ms", n, ts.elapsed().as_millis());
}
