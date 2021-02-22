def repeatedString(s, n):
    complete_str = len([char for char in s if char == "a"])
    complete_num = n // len(s)
    complete_total = complete_str * complete_num

    if n%len(s) != 0:
        sliced_str = s[0:n%len(s)]
        print(n%len(s))
        print(sliced_str)
        complete_total += len([char for char in sliced_str if char == "a"])
        
    return complete_total
