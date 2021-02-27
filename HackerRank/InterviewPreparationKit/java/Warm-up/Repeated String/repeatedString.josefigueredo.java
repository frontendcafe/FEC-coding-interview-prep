// Complexity Analysis:
//   Time complexity: O(len(s)) + O(n) = O(2n) ~= O(n) because we iterate every item in the array once to count the
//     ocurrences of 'a' chars and the computation of the rest in the second loop in its worst case is equal to len(s).
//   Space complexity: O(1) because we use an int to hold the sum.
static long repeatedString(String s, long n) {
    int count = 0;
    for(int i = 0; i < s.length(); i++) {
        if(s.charAt(i) == 'a') {
            count++;
        }
    }

    long sum = (n / s.length()) * count;

    long rest = n % s.length();

    for(int i = 0; i < rest; i++) {
        if(s.charAt(i) == 'a') {
             sum++;
        }
    }
    return sum;
}