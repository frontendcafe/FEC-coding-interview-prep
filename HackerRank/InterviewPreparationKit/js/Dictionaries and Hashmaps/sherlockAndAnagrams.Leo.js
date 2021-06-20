/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

// no usado, la suma de los ascii genera colisiones para usarla como key
function asciiSum(s) {
  return [...s].reduce((acc, value) => {
    return acc + value.charCodeAt(0);
  }, 0);
}

// ordeno los carateres para usarlos como key
function generateKey(s) {
  return [...s].sort().join("");
}

// implemento la función factorial
function factorial(n) {
  let result = 1;
  if (n == 0) return 1;
  for (let i = n; i > 1; i-- ) {
    result *= i;
  }
  return result
}

// implemento la función combinatoria
function combination(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function sherlockAndAnagrams(s) {
  let hashMap = new Map();

  // hago una doble iteración para generar
  // todos los posibles grupos de caracteres
  for (let offset = 1; offset < s.length; offset++) {
    for (let i = 0; (i+offset-1) < s.length; i++) {
      // obtengo el grupo de caracteres
      const subString = s.slice(i, i+offset);
      // genero una key con ese grupo de caracteres
      const key = generateKey(subString);

      // guardo todas las key e incremento las repetidas
      if (hashMap.has(key)) {
        hashMap.set(key, hashMap.get(key) + 1);
      } else {
        hashMap.set(key, 1);
      }
    }
  }

  // sumo la combinatoria de los
  // valores que sean mayores a 1
  let result = 0;
  hashMap.forEach((value, key) => {
    if (value > 1) {
      result += combination(value, 2);
    }
  })
  return result;
}

console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("kkkk"));
// console.log(sherlockAndAnagrams("dbcfibibcheigfccacfegicigcefieeeeegcghggdheichgafhdigffgifidfbeaccadabecbdcgieaffbigffcecahafcafhcdg"));
