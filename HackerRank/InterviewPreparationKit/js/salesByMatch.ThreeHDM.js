// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort();
     
    var occurrences = {};
    for (var i = 0; i < ar.length; i++) {
      occurrences[ar[i]] = (occurrences[ar[i]] || 0) + 1;
    }
  
    let response = 0;
    
    Object.values(occurrences).forEach(val => {
      response += Math.floor(val/2)
    });
  
    return response
  }