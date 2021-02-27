// Complexity Analysis:
//   Time complexity: O(n) because we iterate every item in the array.
//   Space complexity: O(1) because we use an int to hold the count.
static int jumpingOnClouds(int[] c) {
    int count = 0;
    int inc = 0;
    int len = c.length - 1;
    while(inc < len) {
        if(inc + 2 <= len && c[inc + 2] == 0) {
            inc += 2;
            count += 1;
        }
        else if(inc + 1 <= len && c[inc + 1] == 0) {
            inc += 1;
            count += 1;
        }
    }
    return count;
}