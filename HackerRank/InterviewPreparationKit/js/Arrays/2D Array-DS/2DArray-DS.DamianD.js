function hourglassSum(arr) {
    let suma = 0
    let max = 0
    //Itero solamente el cuadrado interno del array (4x4)
    for(let i = 1 ; i < arr.length - 1 ; ++i){
        for(let j = 1 ; j < arr.length - 1 ; ++j){
            suma = arr[i][j] //Le sumo al del centro de cada hourglass los 3 superiores y los 3 inferiores
                + arr[i - 1].slice(j - 1, j + 2).reduce((x, y) => x + y, 0) //sup
                + arr[i + 1].slice(j - 1, j + 2).reduce((x, y) => x + y, 0) // inf
            if (i === 1 && j === 1) max = suma; // Si estoy en el primero de todos hago que el maximo sea igual a la suma (Porque no puedo simplemente igualarlo a 0 el max en caso que me toque uno en el que maximo sean todos negativos)
            else max = (max < suma) ? suma : max //Caso contrario me fijo si tengo nuevo maximo
        }
    }
    return max;
}