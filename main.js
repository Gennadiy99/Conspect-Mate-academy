// Рабочий скрипт для Конспекта, - Не удалять
const selectElem = document.querySelector("#SelectJs");
selectElem.addEventListener("change", function () {
  let sectionId = this.value;
  if (sectionId) {
    window.location.href = sectionId;
  }
});
console.log(selectElem);
// --------- //
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
    return `Give them ${+(amount * exchangeRate).toFixed(
      2
    )} ${currencyName}(s)`;
  } else {
    return "Enter valid data";
  }
}
console.log(convertCurrency(10000, 1.0946, "dollar"));
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
// 6
function getGuestsCount(guestsInput) {
  let numberGuests = parseInt(guestsInput);
  console.log(numberGuests);
  if (numberGuests) {
    return numberGuests;
  } else {
    return "not a number";
  }
}
console.log(getGuestsCount("!3девочки"));
// проба работы дебагера указав в: JS коде команду: debugger
let n = 4;
let summ = 0;

for (let i = 0; i <= 4; i++) {
  summ += i;
}
console.log(summ);

for (let i = 0; i < 15; i += 5) {
  console.log(i);
}
// функция расчет прибіли вклада в банк
function calculateProfit(amount, percent, period) {
  let profit = amount;

  for (let i = 1; i <= period; i++) {
    profit += profit * (percent / 100);
  }

  return Math.floor(profit - amount);
}
console.log(calculateProfit(1000, 5.5, 7));
// функция перевертыш

function isWerewolf(target) {
  let target1 = "";
  let newTarget = "";

  for (const n of target) {
    if (n.toLowerCase() !== n.toUpperCase()) {
      target1 += n;
      newTarget = n + newTarget;
    }
  }
  console.log(newTarget);
  console.log(target1);

  if (target1.toLowerCase() === newTarget.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isWerewolf("A$b+a"));

// РАБОТА С ЦИКЛОМ И МЕТОДОМ slice()

function splitString(str) {
  let resultArry = [];

  for (let i = 0; i < str.length; i += 2) {
    let result = str.slice(i, i + 2);

    if (result.length < 2) {
      result += "_";
      resultArry.push(result);
    } else {
      resultArry.push(result);
    }
  }

  return resultArry;
}

console.log(splitString("АВРОР"));
// проба перевода в числа в стрку
let num = 123;
let numSt = String(num);
let N = "" + num;
let numSt2 = +num.toString()[1];

console.log(num);
console.log(numSt);
console.log(numSt2);
console.log("Преобразование in str " + numSt2);

//функция перебирает строку если числа меньше или  = 5 то Special end Not

function isSpecialNumber(n) {
  let sort = n.toString();
  for (let i = 0; i <= sort.length; i++) {
    if (sort[i] > 5) {
      return "NOT!!";
    }
  }
  return "Special!!";
}
console.log(isSpecialNumber(5411));
// функция опрятное число.

function isTidy(n) {
  if (n < 0) {
    return false;
  }
  let nStr = String(n);

  for (let i = 0; i < nStr.length - 1; i++) {
    if (nStr[i] > nStr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isTidy(-1339));
// переписать функцияю на swith

function getTask(weekday) {
  switch (weekday) {
    case "monday":
      return "Write a new module for the program";
    case "tuesday":
      return "Test the module and find bugs";
    case "wednesday":
      return "Write a new module for the program";
    case "thursday":
      return "Test the module and find bugs";
    case "friday":
      return "You need to meet the boss today";
    case "saturday":
      return "Spend the evening with your friends";
    case "sunday":
      return "Go to the movies in the evening";
    default:
      return "Entered the wrong day of the week";
  }
}
console.log(getTask("monday"));
console.log(getTask(""));

function getName(count) {
  switch (true) {
    case count < 2:
      return "one";
    case count <= 4:
      return "A few";
    default:
      return "Many";
  }
}
console.log(getName(5));
// Подсчет детей и взрослых для бронирования номера

function canTheyBook(adultsCount, childrenCount) {
  countPerson = +adultsCount + +childrenCount;
  console.log(+adultsCount, +childrenCount);
  if (countPerson > 8 || !adultsCount || childrenCount > adultsCount * 2) {
    return false;
  } else {
    return true;
  }
}
console.log(canTheyBook(0, 0));
// предложение номеров согласно данным

// small room для 4 осіб
// small room + extra bed
// big room для 8 осіб
// 'big room + extra bed'
console.log(`************`);

function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {
  if (adultsCount) {
    let personeCount = adultsCount + childrenCount + babiesCount;

    if (personeCount <= 4 && babiesCount + childrenCount <= adultsCount * 2) {
      return `small room`;
    }
    if (
      babiesCount &&
      personeCount < 6 &&
      babiesCount + childrenCount <= adultsCount * 2
    ) {
      return `small room + extra bed`;
    }
    if (
      personeCount > 4 &&
      personeCount <= 8 &&
      babiesCount + childrenCount <= adultsCount * 2
    ) {
      return `big room`;
    }
    if (
      babiesCount &&
      personeCount > 4 &&
      personeCount <= 9 &&
      babiesCount + childrenCount <= adultsCount * 2
    ) {
      return "big room + extra bed";
    }
    return ` incorrect number of guests`;
  }
  return `not adult guest`;
}

console.log(recommendRoom(3, 2));
console.log("****************");

// Обьекты / Object
let firstName = "Gennadiy";
let lastName = "Bashliy";
let age1 = 45;

printInfo(firstName, lastName, age1);

function printInfo(firstName, lastName, age) {
  console.log(`User ${firstName} ${lastName} is ${age}`);
}
const user1 = {
  firstName: "Tanya",
  LastName: "Sorokina",
  age: 38,
};
console.log(user1);

const people = [
  { 
    nameFirst: "Diana", 
    lastName: "Voronova", 
    gender: "female", 
    age: 25,
  },
  {
    nameFirst: "Dmitro",
    lastName: "Gogol",
    gender: "male",
    age: 35,
  },
];

function removeFemaleAges(peop) {
  for (const i of peop) {
    if (i.gender === 'female') {
      delete i.age;
    }
  }
}
removeFemaleAges(people)
console.log(people);
// Массив роботов и отбор их по Версии
const robots = [
  { coreVersion: 9 },
  { coreVersion: 13 },
  { coreVersion: 16 },
  { coreVersion: 9 },
  { coreVersion: 14 },
];


function getOutdated(robotsArr, newVersion) {
  const arrayInd = [];
  for(let i = 0; i < robotsArr.length; i ++){
    if(robotsArr[i].coreVersion < newVersion){
      console.log(robotsArr[i]);
      arrayInd.push(i);
    } 
  }
  return arrayInd;
}
console.log(getOutdated(robots, 10));
// классная работа условие по нахождение наличие свойства в обьекте
const userN = {
  firstName: 'Misha',
  age: 39,
  isMarried: false,
}
const key = 'isMarried';

// хорошая проверка если не указать явно undefined в занчении свойства.

if(userN[key] !== undefined){
  console.log(
    `Property exists`,
     userN[key],
     );
}
// Надежная проверка, но проверяет и унаследованные свойства.
if (key in userN){
  console.log(
    `Property exists`,
    userN[key],
    userN.age)
}
// Отличная проверка но этот метод новый и еще потдерживаетс яне всеми браузерами
if(Object.hasOwn(userN, 'isMarried')){
  console.log('Object.hasOwn сработал !')
}
// проверка на наличии свойства в обьекте и создание свойства из имеющегося свойства с получением значения из его первой части свойства.
const usersAll = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];
function restoreNames(users) {
  for (const n of users) {
    if (!n.firstName || n.firstName === undefined) {
      n.firstName = n.fullName.split(' ')[0];
    }
  }
}
restoreNames(usersAll);
console.log(usersAll)
// подсчет типов товаров и создание обьекта с типом и колличеством


let boxesObj = {};
function countBoxes(boxes) {
  for (const n of boxes) {
    if(!boxesObj[n]){
      boxesObj[n] = 1;
    } else
    if (boxesObj[n]) {
      boxesObj[n] += 1;
    }
  }
  return boxesObj;
}
console.log(countBoxes('aabbbbbca'));

for(const k in boxesObj){
  console.log(k, boxesObj[k]);
}
// let arrObj = (Object.keys(boxesObj));


for(const k of Object.keys(boxesObj)){
  console.log(k, boxesObj[k]);
}
console.log(Object.keys(boxesObj));
console.log(Object.values(boxesObj));
console.log(Object.entries(boxesObj));
// сравнение роботов 
const charlie = { serialNo: 1, chipVer: 12 };

const lordy = { serialNo: 2, chipVer: 12 };

const compareRobots = (robot1, robot2) => {
  console.log(Object.entries(robot1)[1], Object.entries(robot2)[1]);
  if(Object.entries(robot1)[1] === Object.entries(robot2)[1]){
    return true;
  } else {
    false
  }
};
console.log(compareRobots(charlie, lordy));