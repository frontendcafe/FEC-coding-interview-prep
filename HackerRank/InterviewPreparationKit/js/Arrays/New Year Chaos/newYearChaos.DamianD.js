function minimumBribes(q) {
    let swaps = 0;
    let currentSum = 0
    for(let i in q){
        //Current sum me da si se movió una persona más de 2 veces hacia adelante
        //Actualmente guarda la diferencia entre la posición verdadera vs donde está
        currentSum = (q[i] - 1) - i;
        if(currentSum > 2)
            return 'Too chaotic'
        //Itero desde 1 menos de la posición adelantada (o no) hasta el indice actual
        //Ejemplo, [2, 1, 5, 3, 4]
            //El 5 está en la posición 2, entonces agarro desde 3 hasta 2, no entra
            //Caso contrario, si el 3 está en la posición 3, agarro desde 1 hasta 3
                //Entonces miro los 2 de adelante a ver que onda
                //Por lo que acá el 1 no es mayor pero el 5 si, sumo 1 swap
            //Después con el 4 pasa lo mismo, el 5 es mayor, pero el 3 no, sumo 1 swap
        for (let j = Math.max(0, q[i] - 2); j < i; j++)
            //Si los que tengo adelante son mayores es porque me pasaron, sumo 1 swap
            if (q[j] > q[i]) swaps++;
            
    }
    return swaps;
}
