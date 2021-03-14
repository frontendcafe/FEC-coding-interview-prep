// Complete the sockMerchant function below.
// En este caso estoy creando un hashmap para agarrar cada valor y de esa forma poder indexar muy rapidamente
// La funcion map me permite acceder a cada elemento a la vez
function sockMerchant(n, ar) {
    let mapa = new Map();
    let cont = 0;
    ar.map(x => {
        mapa[x] == null ? mapa[x] = 1 : mapa[x]++; // Operador ternario, en caso de que la condicion de la izquierda sea null (No hay valor para ese index)
        //Entonces lo asigno y le doy 1 (existe 1 de ese valor), caso contrario si ya existia, le agrego uno más
        if(mapa[x] % 2 === 0) cont++;
        //Cada vez que sea par el numero de medias que encuentra, conteo uno para ese indice
        });
    return cont;
}
//