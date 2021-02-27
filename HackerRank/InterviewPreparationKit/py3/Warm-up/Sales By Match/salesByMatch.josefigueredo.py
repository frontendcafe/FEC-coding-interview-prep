# Complexity Analysis:
#   Time complexity: O(n) because we iterate every item in the array. Being a HashSet finding, removing and inserting is
#     O(1).
#   Space complexity: O(n) because in the worst case scenario the array is compose of unique values and the length of
#     the set is n.
def sockMerchant(n, ar):
    ar_set = set()
    count = 0
    for idx in range(len(ar)):
        if(ar[idx] in ar_set):
            count += 1
            ar_set.remove(ar[idx])
        else:
            ar_set.add(ar[idx])
    return count