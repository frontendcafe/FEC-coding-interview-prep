function repeatedString(s, n) {
    let count = 0;
    //calculo el resto de dividir n por el length del string
    let remainder  = n % s.length
  
    //Cuento el nro de letras a del string inicial
    for( let el of s) { if (el == 'a') {count++ }}
    
    //- Sustraigo el resto de n para obtener un numero divisible
    //- ese numero lo divido por el largo del string para obtener la cantidad de veces que se repite.
    //- En cada uno de esas repeticiones hay un numero determinado de letras a (mi conteo). Lo multiplico y obtengo el numero de letras a en en número entero.
    let a_count = (n - remainder) / s.length * count;
  
    //inicializo el conteo de a que restan
    let a_count_remainder = 0
    
    //recorro un susbstring del cual remuevo el resto de la division, esto me da un string cortado con un numero determinado de letras a
    //cuento las letras y las almaceno
    for( let e of s.substring(0,remainder )) { if (e == 'a') {a_count_remainder++ }}
      
    //sumo ambos conteos y los retorno
    return a_count + a_count_remainder
    
  }