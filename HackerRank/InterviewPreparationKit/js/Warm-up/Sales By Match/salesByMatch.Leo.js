// salesByMatch.Leo.js

function sockMerchant(n, ar) {
    let hashMap = new Map();
    let result = ar.reduce((count, item) => {
        // si ya tengo el item, incremento el
        // valor de ese item en el `hashMap`
        if(hashMap.has(item)) {
            hashMap.set(item, hashMap.get(item) + 1);
            // si es par, incremento el contador
            if(hashMap.get(item) % 2 == 0) {
                count += 1;
            }
        // si no encuentro el item, lo agrego
        } else {
            hashMap.set(item, 1);
        }
        // retorno `count` que va a ser mi
        // acumulador dentro de mi reduce
        return count;
    }, 0);
    return result;
}
