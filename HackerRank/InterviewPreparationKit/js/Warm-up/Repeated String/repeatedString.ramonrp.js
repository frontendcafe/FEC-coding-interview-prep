function repeatedString(s, n) {
    const times = parseInt(n / s.length)
    const rest = n % s.length
    const aTimesrestString = s.substring(0, rest).match(/a/gi) ? s.substring(0, rest).match(/a/gi).length : 0;
    const aTimesOriginalString = s.match(/a/gi) ? s.match(/a/gi).length : 0;
    const aTotalTimes = aTimesOriginalString * times + aTimesrestString
    return aTotalTimes
}
