const compareTriplets = (a: number[], b: number[]): number[] => {
  let alicia = 0;
  let bob = 0;
  let zero = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicia++;
    } else if (a[i] < b[i]) {
      bob++;
    } else if (a[i] === b[i]) {
      zero;
    }
  }

  return [alicia, bob];
};
