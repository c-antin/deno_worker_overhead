pub fn work_heap() -> String {
    let mut sum = "".to_string();
    for _ in 0..100_000_000 {
        sum = sum + "#";
    }
    sum
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn work_heap_length() {
        let result = work_heap();
        assert_eq!(result.len(), 100_000_000);
    }
}
