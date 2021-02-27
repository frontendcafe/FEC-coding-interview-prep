// Complexity Analysis:
//   Time complexity: O(n) because we iterate every item in the array. Being a HashSet finding, removing and inserting is
//     O(1).
//   Space complexity: O(n) because in the worst case scenario the array is compose of unique values and the length of
//    the set is n.
static int sockMerchant(int n, int[] ar) {
    HashSet<Integer> set = new HashSet<>();
    return Arrays.stream(ar)
            .reduce(0, (a, b) -> {
                if (set.contains(b)) {
                    set.remove(b);
                    return a + 1;
                }
                set.add(b);
                return a;
            });
}