

function hourglassSum(arr) {
  
    let i = 0; // inicializo i que va a ser mi "eje vertical", la fila donde comience el hourglass
    let hourglasses = []; // inicializo una variable para ir guardando las sumas de cada hourglass

    while (i < 4) { // mientras i sea menor a 4 = mientras la fila donde comienza el hourglass esté mínimo a 3 filas del final del array (el "piso").
      
        let j = 0; // inicializo j que va a ser mi "eje horizontal", la columna donde comience el hourglass
        
        while (j < 4) { //mientras j sea menor a 4 = mientras la colomna donde comienza el hourglass este a 3 columnas del final del array (la "pared" derecha).
          
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] // sumo todos los valores del hourglass
            hourglasses.push(sum) // agrego la suma total al array
            j += 1;
        }
      
        i += 1;
    }

    return Math.max(...hourglasses) // uso Math.max para devolver el valor más alto del array y el 'spread operator' 
                                    // para pasar cada uno de los valores del array como argumentos.
                                    // Puedo usar Math.max porque se que el array siempre va a tener maximo 16 valores, si no lo supiera sería mejor utilizar reduce().
}
