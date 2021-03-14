// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;
    let i = 0;
    
    while (i < c.length - 1) {
        !c[i+2] ? i += 2 : i += 1
        count += 1; 
    }
  
    return count;
}
