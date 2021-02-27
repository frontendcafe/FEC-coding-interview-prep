function sockMerchant(n, ar) {
    const unique = [... new Set(ar)]

    let count = 0;

    for (const i of unique) {
        let numRep = 0;
        for (const h of ar) {
            if (i === h) {
                numRep += 1
            }
        }
    
    count += Math.round((numRep/2)-0.1)
}

return(count)
