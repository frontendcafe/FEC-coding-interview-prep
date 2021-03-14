function minimumSwaps(arr) {
    let swaps = 0;
    for(let i = 0; i < arr.length; ++i){
        //Si es distinto al indice, necesita swap
        if((arr[i] - 1) !== i){
            //Busco donde está el que corresponde
            let pos = 0;
            //Yo se que siempre va a estar hacia adelante, por lo que hago que j sea = i
            for(let j = i; j < arr.length; ++j)
                if(arr[j] - 1 === i){
                    pos = j; // Si encontré, guardo la pos
                    break;
                }
            const temp = arr[i]; //Hago el swap
            arr[i] = i;
            arr[pos] = temp;
            swaps++;
        }
    }
    return swaps;
}
