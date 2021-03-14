function countingValleys(steps, path) {
    let altitude = 0;
    let numberOfValleys = 0;
    for (let step of path) {
        step == "D" ? altitude-- : altitude++;
        if (altitude == 0 && step == "U") {
            numberOfValleys++;
        }
    }
    return numberOfValleys;
}