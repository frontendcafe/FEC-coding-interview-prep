/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
  let magazineMap = new Map();

  magazine.forEach((word) => {
    if (magazineMap.has(word)) {
      // si tengo word en el hashmap, incremento su valor
      magazineMap.set(word, magazineMap.get(word) + 1);
    } else {
      // creo el hash un valor en 1
      magazineMap.set(word, 1);
    }
  });

  for (let word of note) {
    if (magazineMap.has(word)) {
      // si el word existe, verifico que su valor sea 1 o mayor
      if (magazineMap.get(word) >= 1) {
        // si es 1 o mayor, redusco la occurrencia del word
        magazineMap.set(word, magazineMap.get(word) - 1)
      } else {
        console.log("No");
        return;
      }
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
