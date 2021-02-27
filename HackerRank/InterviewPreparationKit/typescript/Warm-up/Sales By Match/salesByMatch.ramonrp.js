//Solución con for..of
function sockMerchant(n, ar) {
    let obj = {};
    let totalPairs = 0;
    for (let socket of ar) {
        if (obj[socket]) {
            delete obj[socket];
            totalPairs++;
        }
        else {
            obj[socket] = 1;
        }
    }
    return totalPairs;
}

//Solución con reduce
function sockMerchant(n, arr) {
    let totalPair = 0;
    arr.reduce(function (acc, item) {
        acc[item] == 1 ? (totalPair++, delete acc[item]) : acc[item] = 1;
        return acc;
    }, {})
    return totalPair
}