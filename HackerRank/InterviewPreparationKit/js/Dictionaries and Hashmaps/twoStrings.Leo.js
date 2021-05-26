/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
  let result = "NO";
  for (let s of s1) {
    if (s2.includes(s)) {
      result = "YES";
        break;
    }
  }
  return result
}

// Alternative
function twoStrings(s1, s2) {
  let result = "NO";
  [...s1].every(s => s2.includes(s) ? (result = "YES", false) : true );
  return result;
}
