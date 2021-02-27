// salesByMatch.Leo.js

function sockMerchant(n, ar) {
    let hashMap = new Map();
    let result = ar.reduce((count, item) => {
        if(hashMap.has(item)) {
            hashMap.set(item, hashMap.get(item) + 1);
            if(hashMap.get(item) % 2 == 0) {
                count += 1;
            }
        } else {
            hashMap.set(item, 1);
        }
        return count;
    }, 0);
    return result;
}

