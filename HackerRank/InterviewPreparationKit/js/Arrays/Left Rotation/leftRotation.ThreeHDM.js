// Complete the rotLeft function below.
function rotLeft(a, d) {
    //hago un loop d veces
    for(let i = 0; i < d; i++){
      //remuevo y almaceno el primer elemento
      let element = a.shift()
      //pusheo el elemento al final del array
      a.push(element)
    }
    return a
  }
  
  const arr = [1,2,3,4,5]
  
  console.log(rotLeft(arr, 4)); // 5 1 2 3 4