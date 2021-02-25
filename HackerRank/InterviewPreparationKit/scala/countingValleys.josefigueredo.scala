// Complexity Analysis:
//   Time complexity: O(n) because we iterate every item in the array.
//   Space complexity: O(1) because we use an int to hold the count.
def countingValleys(steps: Int, path: String): Int = {
    val valleys = new AtomicInteger
    path.chars.reduce(0, (count: Int, b: Int) => {
        var mutableCount = count
        b match {
            case 68 => mutableCount -= 1
            case 85 =>
                mutableCount += 1
                if (mutableCount == 0) valleys.getAndIncrement
            case _ =>
        }
        mutableCount
    })
    valleys.get
}