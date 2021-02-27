function jumpingOnClouds(c){
    let count = 0
    let i = 0
  
    while(i<c.length-1){
      if(i+2<c.length&&c[i+2]!=1){
        count++;
        i=i+2;
      }else {
        count++;
        i++;
      }
    }
    return count
  }
