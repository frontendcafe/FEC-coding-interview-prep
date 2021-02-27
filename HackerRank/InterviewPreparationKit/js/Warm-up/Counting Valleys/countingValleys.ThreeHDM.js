function countingValleys(steps, path) {
    let altitude = 0
    let valleyCount = 0
    for(let i = 0; i < steps; i++){
      let previousAltitude = altitude;
      if (path[i] == "U") { altitude++ } else { altitude-- }
      if(previousAltitude < 0 && altitude == 0) { valleyCount++ }
    }
    return valleyCount
}