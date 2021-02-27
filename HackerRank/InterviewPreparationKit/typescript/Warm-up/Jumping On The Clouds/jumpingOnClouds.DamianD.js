// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0
    //Voy hasta el largo total -1, el ultimo no me interesa
    for(i = 0 ; i < c.length - 1; ++i){
        if(i < c.length - 2) // Siempre en cuando esté parado 2 antes del final, puedo saltar de a 2
            if(c[i + 2] === 0) // Si 2 pos más adelante es 0, salto, sino significa que voy a tener que saltar 1 hacia adelante (el del for)
                i++;
        jumps++;
    }

    return jumps;
}
