def twoStrings(s1, s2):
    for letter in set(s1):
        if letter in set(s2):
            return "YES"
    return "NO"
