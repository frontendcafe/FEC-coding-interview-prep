def countingValleys(steps, path):
    altitude = 0
    valleys = 0
    for step in path:
        if step == "D":
            if altitude == 0:
                valleys += 1
            altitude -= 1
        else:
            altitude += 1
    return valleys
