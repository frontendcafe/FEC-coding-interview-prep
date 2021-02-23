// Complexity Analysis:
//   Time complexity: O(n) because we iterate every item in the array in the reduce.
//   Space complexity: O(1) because we use the variable valleys as a counter.
fun countingValleys(steps: Int, path: String): Int {
    // Write your code here
    val valleys = AtomicInteger()
    path.chars()
        .reduce(0) { count: Int, b: Int ->
            var mutableCount = count
            when (b) {
                68 -> mutableCount -= 1
                85 -> {
                    mutableCount += 1
                    if (count == 0) {
                        valleys.getAndIncrement()
                    }
                }
            }
            mutableCount
        }
    return valleys.get()
}