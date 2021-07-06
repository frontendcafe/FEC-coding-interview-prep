// Complete the freqQuery function below.
function insert(data, q) {
  // data se pasa por referencia
  if (data.has(q)) {
    data.set(q, data.get(q) + 1);
  } else {
    data.set(q, 1);
  }
}

function remove(data, q) {
  // data se pasa por referencia
  if (data.has(q)) {
    if (data.get(q) == 1) {
      data.delete(q);
    } else {
      data.set(q, data.get(q) - 1);
    }
  }
}

function checkFrequency(data, q) {
  for (let [_, value] of data) {
     if (value == q) {
       // existe con esta frecuencia
       return 1;
     }
  }
  // No existe
  return 0;
}

function freqQuery(queries) {
  let data = new Map();
  let out = [];

  queries.forEach((q) => {
    switch(q[0]) {
      case 1:
        insert(data, q[1]);
        break;
      case 2:
        remove(data, q[1]);
        break;
      case 3:
        out.push(checkFrequency(data, q[1]));
        break;
    }
  })
  return out;
}

const data1 = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2]
];

const data2 = [
  [3, 4],
  [2, 1003],
  [1, 16],
  [3, 1]
];

const data3 = [
  [1, 3],
  [2, 3],
  [3, 2],
  [1, 4],
  [1, 5],
  [1, 5],
  [1, 4],
  [3, 2],
  [2, 4],
  [3, 2]
];

console.log(freqQuery(data1));
console.log(freqQuery(data2));
console.log(freqQuery(data3));
