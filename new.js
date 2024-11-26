let suspects = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

let dead = ["Lucas", "Bill"];

function getKiller(suspects, dead) {
  

  let arrKeys = Object.keys(suspects);

  for (let n = 0; n < arrKeys.length; n++) {

    let suspect = arrKeys[n];

    let peopls = suspects[suspect];
    let countSuspects = 0;

    for (const k of peopls) {
      console.log(`${k} = ${dead[0]} and ${dead[1]}`);
      if (dead.includes(k)) {
        countSuspects += 1;
      }
    }
    console.log(countSuspects);
    if(countSuspects === dead.length){
      console.log('Подозреваемый найден', suspect);
      return suspect;
    }
  }
}

console.log(getKiller(suspects, dead));