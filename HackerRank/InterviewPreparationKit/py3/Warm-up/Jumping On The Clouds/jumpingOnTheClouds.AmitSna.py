def jumpingOnTheClouds(c):
    jumps, position = 0, 0
    
    while position < len(c) - 1:
        try:
            if c[position + 2] == 0:
                position += 2
            else:
                position += 1
            jumps += 1
        except IndexError:
            return jumps + 1
        
    return jumps
