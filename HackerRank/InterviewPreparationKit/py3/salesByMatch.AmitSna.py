def sockMerchant(n, arr):
    colours_and_quantities = {}
    for colour in arr:
        if colour in colours_and_quantities:
            colours_and_quantities[colour] += 1
        else:
            colours_and_quantities[colour] = 1

    pairs_num = 0
    for colour in colours_and_quantities:
        pairs_num += colours_and_quantities[colour] // 2
    
    return pairs_num
