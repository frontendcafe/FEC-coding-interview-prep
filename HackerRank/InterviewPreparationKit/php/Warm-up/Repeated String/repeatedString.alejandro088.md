## Challengue: Repeated String
A continuación explicare brevemente como esta basada ésta solución.

Según la consigna https://www.hackerrank.com/challenges/repeated-string/problem nos indica que debemos hallar cuantos caracteres "a" hay en una cadena determinada por un patrón.

En este caso, el patrón a repetir esta dada por la variable $s, y la cantidad de caracteres a mostrar esta dada por la variable $n.

Ejemplos:

s = 'abcac'
n = 10

Resultado: 'abcacabcac'. (4 ocurrencias de la letra 'a')

En este caso s contiene 5 caracteres, por lo que el string se repite dos veces, ya que el numero dado es 10.

Otro ejemplo:

s = 'aba'
n = 10

Resultado: 'abaabaabaa' (7 ocurrencias de la letra 'a')

En este caso el string se repite 3 veces y luego imprime el primer caracter del string para formar los 10 caracteres solicitados en n.

Mi solución en PHP.

```php
// Complete the repeatedString function below.
function repeatedString($s, $n) {

    $count = substr_count($s, 'a');

    $repeatString = intval($n / strlen($s));

    $numOfOccurrences = $count * $repeatString;

    $quantityLettersOfString = ($n % strlen($s));

    $lastSubstring = substr($s, 0, $quantityLettersOfString);

    $lastPosition = substr_count($lastSubstring, 'a');

    return $numOfOccurrences + $lastPosition;
}
```

`$count = substr_count($s, 'a');`
Almacenamos la cantidad de caracteres 'a' encontradas en la cadena $s.

`$repeatString = intval($n / strlen($s));`
Hallamos las veces que se repite $s en $n.

`$numOfOccurrences = $count * $repeatString;`
Contamos la cantidad de ocurrencias de 'a'.

`$quantityLettersOfString = ($n % strlen($s));`
Obtenemos el modulo de $n entre la longitud de $s.

`$lastSubstring = substr($s, 0, $quantityLettersOfString);`
Aqui obtenemos un substring de $s entre 0 y el modulo calculado anteriormente.

`$lastPosition = substr_count($lastSubstring, 'a');`
Volvemos a contar la cantidad de occurrencias de 'a' solo en el substring resultante.

`return $numOfOccurrences + $lastPosition;`
Lo sumamos al resultado anterior.
