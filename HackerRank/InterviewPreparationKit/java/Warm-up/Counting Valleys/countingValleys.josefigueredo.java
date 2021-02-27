// Complexity Analysis:
//   Time complexity: O(n) because we iterate every item in the array in the reduce.
//   Space complexity: O(1) because we use the variable valleys as a counter.
public static int countingValleys(int steps, String path) {
    // Write your code here
    AtomicInteger valleys = new AtomicInteger();
    path.chars()
            .reduce(0, (count, b) -> {
                switch (b) {
                    case 68: count -= 1; break;
                    case 85: {
                        count += 1;
                        if(count == 0) {
                            valleys.getAndIncrement();
                        }
                        break;
                    }
                    default: break;
                }

                return count;
            });
    return valleys.get();
}