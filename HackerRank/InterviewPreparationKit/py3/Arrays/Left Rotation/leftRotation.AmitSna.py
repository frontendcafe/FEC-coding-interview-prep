def rotLeft(a, d):
    if len(a) >= d:
        return a[d-len(a):] + a[:d]
    else:
        amount = (d % len(a)) + 1
        new_a = a * amount
        return a[d-len(a):] + a[:d]
