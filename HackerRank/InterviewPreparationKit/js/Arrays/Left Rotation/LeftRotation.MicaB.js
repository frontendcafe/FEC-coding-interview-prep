function rotLeft(a, d) {
    let start = a.slice(d);
    let final = a.slice(0, d);
    let rotatedArr = start.concat(final);
    return rotatedArr;
}

// Proceso:
// Dado el siguiente Array: [1, 2, 3, 4, 5, 6] y siendo el número de rotaciones 4, el output debería ser:
// [ 5, 6, 1, 2, 3, 4 ]

// [1, 2, 3, 4, 5, 6]
//              |--->  desde este índice hasta el final del arreglo sería el inicio de nuestro nuevo arreglo rotado, y el índice coincide con el número de rotaciones "d".
// |---------|         desde el principio del arreglo hasta el número de rotaciones - 1 sería la segunda parte de nuestro nuevo arreglo rotado.
