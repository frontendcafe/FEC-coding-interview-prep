function jumpingOnClouds(c) {
    let jumps = 0;
    let index = 0;

    while (index < c.length - 1) {
        if (c[index + 2] !== 1) {
            index += 2;
        }
        else {
            index += 1;
        }
        jumps++;
    }
    return jumps;
}