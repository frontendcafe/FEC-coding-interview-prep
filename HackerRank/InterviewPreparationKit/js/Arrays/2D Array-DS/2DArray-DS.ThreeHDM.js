function hourglassSum(arr) {
    //el mínimo es -9*7
    let max = -63
       //recorro filas
       for (let i = 0; i < 4; i++) {
           //recorro cols
           for (let j = 0; j < 4; j++) {
               let sum = 0
               sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
               //la suma es es mayor al mínimo? La guardo.
               max = max < sum ? sum : max
             console.log('-------fin del hourGlass------')
           }
       }
       return max
   }