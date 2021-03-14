function countingValleys(steps, path) {
    let currentLevel = 0;
    let valleys = 0;
    for(let i in path){
        switch (path[i]){
            case 'U':
                currentLevel++;
            break;
            case 'D':
                //Antes de restarle al nivel me fijo si estoy en nivel del mar
                if(currentLevel === 0)
                    valleys++; // SI es así, sumo un valle
                currentLevel--;
            break;
        }
    }
    return valleys;
        
}