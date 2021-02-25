static long repeatedString(string s, long n)
{
    //Agarro el resto, como se que s.Length es siempre 100 o menor, casteo a int
    int resto = Convert.ToInt32(n % s.Length);
    long cant_a_orig = s.Count(x => x == 'a'); //Cuento las a originales
    long cant_a_repetidas = (n - resto) / s.Length * cant_a_orig; // obtengo la cantidad de a repetidas del string entero
    long cant_a = cant_a_repetidas + s.Substring(0, resto).Count(x => x == 'a'); // Le agrego la cantidad de a del substring 
    return cant_a;
}
