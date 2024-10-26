let mark = 59;
let passedTheTest = mark >= 60;
// оператор "не равенства" - !значение;
let mustTakeTheTestAgain = !passedTheTest;

console.log(`Сдал тест: ${passedTheTest}`);
console.log(`Должен пересдать тест: ${mustTakeTheTestAgain}`);

if (passedTheTest) {
  console.log(`Тест- "Сдал"`);
} else {
  console.log(`Тест- "Не сдал"`);
}
// -----
const isHoliday = false;
const isVacation = true;
// оператор "или"- значение || значение;
const canStayHome = isHoliday || isVacation; // don't change this line
console.log(canStayHome);
// -----
const isWaterHot = false;
const haveTea = true;
// оперетор "И" - значение && значение
const canMakeTea = isWaterHot && haveTea; // don't change this line
console.log(canMakeTea);
// function

function calculateTable(a, b, c) {
  let quantityTable = a * b * c;
  console.log(quantityTable);
}
calculateTable(3, 2, 10);

//
function greet(name) {
  let greetUser = `Hi, ${name}!`;
  return greetUser;
}
// Console.log(greet('Mike'));
// Console.log(greet('John'));
console.log(greet("Mike") + " " + greet("John"));
console.log(greet("John"));
//
function printFromTo(input, start, end) {
  for (let i = start; i <= end; i++) {
    console.log(input[i]);
  }
}

printFromTo("start", 1, 3);
// --- for of ---
const title = "String";

for (let char of title) {
  console.log(char);
}

function replaceA(input) {
  let result = "";
  for (let k of input) {
    if (k === "a" || k === "A") {
      result += "*";
    } else {
      result += k;
    }
  }
  return result;
}
console.log(replaceA("Abracadabra"));
// -----
function getPosition(text, word) {
  return text.indexOf(word);
}
console.log(getPosition("twister", "ter"));
// ------
function countConsonants(input) {
  let count = 0;
  for (let k of input.toLowerCase()) {
    console.log(k);
    if ("bcdfghjklmnpqrstvwxz".includes(k)) {
      count++;
    }
  }
  return count;
}
console.log(countConsonants("bcda"));
// function tru / false
function checkNumber(n) {
  let result = [];
  result.push(n > 0);
  result.push(n % 2 === 0);
  result.push(n % 10 === 0);
  return result;
}
console.log(checkNumber(10));
// function Power * 2
function doublePower(currentPowers) {
  // write code here
  let newArray = [];

  if (currentPowers.length <= 0) {
    return newArray;
  }
  for (let i of currentPowers) {
    newArray.push(i * 2);
  }
  return newArray;
}
console.log(doublePower([2, 4, 6]));
// revers

function reverseWords(str) {
  // write code here
  let strArr = str.split(" ");
  // console.log(strArr);
  let resultStr = [];
  for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
  }
  return resultStr;
}
console.log(reverseWords("This is an example!"));
// funktion drinks
function getDrinks(numberOfGuests) {
  // write code here
  // console.log(numberOfGuests);
  let cauntDrinks = 0;
  if (numberOfGuests <= 0) {
    return cauntDrinks;
  }
  for (let i = 1; i <= numberOfGuests; i++) {
    console.log(numberOfGuests);
    cauntDrinks += i;
  }
  return cauntDrinks;
}
console.log(getDrinks(2));

// function sort
function isSorted(boxNumbers) {
  if (boxNumbers.length === 0 || boxNumbers.length === 1) {
    return true;
  }
  let sortArray = null;

  for (let i = 0; i < boxNumbers.length; i++) {
    if (boxNumbers[i] <= boxNumbers[i + 1]) {
      sortArray += 1;
    }
  }
  return sortArray === boxNumbers.length - 1;
}
console.log(isSorted([1, 8, 12, 56, 56, 56, 58]));
// function remout Vewels

function removeVowels(doc) {
  let newString = "";
  let vow = ["a", "e", "i", "o", "u", "y"];

  for (let k of doc.toLowerCase()) {
    if (!vow.includes(k)) {
      newString += k;
    }
  }
  return newString;
}
console.log(removeVowels("dEiouyt"));
// Robot locanion
function getLocation(coordinates, commands) {
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "right") {
      coordinates[0] += 1;
    }
    if (commands[i] === "left") {
      coordinates[0] -= 1;
    }
    if (commands[i] === "forward") {
      coordinates[1] += 1;
    }
    if (commands[i] === "back") {
      coordinates[1] -= 1;
    }
  }
  return coordinates;
}
console.log(getLocation([2, 1], ["left", "back", "back"]));

// выбор секции и переход на нее.

// document.getElementById('select_section-1').addEventListener('change',function(){
//   let valueSection = this.value;
//   if(valueSection){
//     window.location.href = valueSection;
//   }
// });

// Проба практика в академии ПОТОМ УДАЛИТЬ.
function getSuccessRate(statistic) {
  if (statistic.length === 0) {
    return 0;
  }
  let understood = 0;
  let notUnderstand = 0;
  for (const elem of statistic) {
    if (elem === "1") {
      understood += 1;
    } else {
      if (elem === "0") {
        notUnderstand += 1;
      }
    }
  }

  return (understood * 100) / statistic.length;
}
console.log(getSuccessRate("111001"));
// 2 зд
function getCentury(year) {
  if (year === 0) {
    return 1;
  } else {
    return Math.ceil(year / 100);
  }
}

console.log(getCentury(800));
//  3
function convertCurrency(amount, exchangeRate, currencyName) {
  if (amount > 0 && exchangeRate > 0) {
    return `Give them ${+(amount * exchangeRate).toFixed(2)} ${currencyName}(s)`;
  } else {
    return 'Enter valid data';
  }
}
console.log(convertCurrency(10000, 1.0946, 'dollar')); 
//  4

function getPlan(startProduction, numberOfMonths, percent) {

  let variable = startProduction;
  let arrayMonth = [];
  for (let i = 0; i < numberOfMonths; i++) {
    variable += Math.floor(variable * (percent / 100));
    arrayMonth.push(variable);
  }
  return arrayMonth;
}
console.log(getPlan(1000, 6, 20));
// 5
function getSpeedStatistic(testResults) {
  let minSpeed = testResults[0] || 0;
  let maxSpeed = testResults[0] || 0;
  let averageSpeed = 0;
  let arrayStatSpeed = [];
  let summSpeed = 0;

  if (testResults.length === 0) {
    arrayStatSpeed.push(minSpeed, maxSpeed, averageSpeed);
    return arrayStatSpeed;
  }

  for (let n of testResults) {
    if (n < minSpeed) {
      minSpeed = n;
    }
  }

  for (let n of testResults) {
    if (n > maxSpeed) {
      maxSpeed = n;
    }
  }

  for (let n of testResults) {
    summSpeed += n;
  }
  averageSpeed = Math.floor(summSpeed / testResults.length);

  arrayStatSpeed.push(minSpeed, maxSpeed, averageSpeed);

  return arrayStatSpeed;
}
console.log(getSpeedStatistic([15, 20, 35, 85]));