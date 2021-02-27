// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    var count = 0;
    
    for (let i = 0; i < n; i++) {
        let el = ar[0];
        if (ar.indexOf(el, 1) > 0) {
            ar.splice(ar.indexOf(el, 1), 1);
            count += 1;
        }
        ar.shift();
    }
    
    return count;
}
