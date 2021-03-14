function repeatedString(s, n) {
    //Agarro el resto
    const resto = n % s.length;
    const match = s.match(/a/g);
    //A veces el match retorna null, por lo que no podriamos acceder al length
    const cant_a_orig = match !== null ? match.length : 0; //Cuento las a originales
    const cant_a_repetidas = (n - resto) / s.length * cant_a_orig; 
    // obtengo la cantidad de a repetidas del string entero
    const subString = s.substring(0, resto).match(/a/g);
    const cant_a = cant_a_repetidas + (subString !==null ? subString.length : 0); // Le agrego la cantidad de a del substring 
    return cant_a;

}

//Forma SIN REGEX
function repeatedString(s, n) {
    const s_array = s.split('')
    //Agarro el resto
    const resto = n % s.length;
    const cant_a_orig = s_array.filter(x=>x==='a').length; //Cuento las a originales
    const cant_a_repetidas = (n - resto) / s.length * cant_a_orig; 
    // obtengo la cantidad de a repetidas del string entero
    const cant_a = cant_a_repetidas + s_array.slice(0, resto).filter(x=>x==='a').length; // Le agrego la cantidad de a del substring 
    return cant_a;

}