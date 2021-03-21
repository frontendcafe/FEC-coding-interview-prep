def rotLeft(a, d):
    return a[d-len(a):] + a[:d]
