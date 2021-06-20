function checkMagazine(magazine, note) {
    const magArr = magazine
    let response = "Yes";
    for (let i = 0; i < note.length; i++) {
      if(!magArr.includes(note[i])) {
        response = "No";
        break;
      } 
      magArr.splice(magArr.indexOf(note[i]), 1);  
    }
    console.log(response)
  }

const m = 'give me one grand today night';
const n = 'give one grand today give';

checkMagazine(n.split(" "),m.split(" "));