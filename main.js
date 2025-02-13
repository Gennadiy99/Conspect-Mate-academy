// Рабочий скрипт для Конспекта, - Не удалять
document.querySelectorAll(".Select-section").forEach((selectElem) => {
  selectElem.addEventListener("change", function () {
    let sectionEl = this.value;
    if (sectionEl) {
      window.location.href = sectionEl;
    }
  });
});

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
    if (i.gender === "female") {
      delete i.age;
    }
  }
}
removeFemaleAges(people);
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
  for (let i = 0; i < robotsArr.length; i++) {
    if (robotsArr[i].coreVersion < newVersion) {
      console.log(robotsArr[i]);
      arrayInd.push(i);
    }
  }
  return arrayInd;
}
console.log(getOutdated(robots, 10));
// классная работа условие по нахождение наличие свойства в обьекте
const userN = {
  firstName: "Misha",
  age: 39,
  isMarried: false,
};
const key = "isMarried";

// хорошая проверка если не указать явно undefined в занчении свойства.

if (userN[key] !== undefined) {
  console.log(`Property exists`, userN[key]);
}
// Надежная проверка, но проверяет и унаследованные свойства.
if (key in userN) {
  console.log(`Property exists`, userN[key], userN.age);
}
// Отличная проверка но этот метод новый и еще потдерживаетс яне всеми браузерами
if (Object.hasOwn(userN, "isMarried")) {
  console.log("Object.hasOwn сработал !");
}
// проверка на наличии свойства в обьекте и создание свойства из имеющегося свойства с получением значения из его первой части свойства.
const usersAll = [
  {
    firstName: undefined,
    lastName: "Holy",
    fullName: "Jack Holy",
  },
  {
    lastName: "Adams",
    fullName: "Mike Adams",
  },
];
function restoreNames(users) {
  for (const n of users) {
    if (!n.firstName || n.firstName === undefined) {
      n.firstName = n.fullName.split(" ")[0];
    }
  }
}
restoreNames(usersAll);
console.log(usersAll);
// подсчет типов товаров и создание обьекта с типом и колличеством

let boxesObj = {};
function countBoxes(boxes) {
  for (const n of boxes) {
    if (!boxesObj[n]) {
      boxesObj[n] = 1;
    } else if (boxesObj[n]) {
      boxesObj[n] += 1;
    }
  }
  return boxesObj;
}
console.log(countBoxes("aabbbbbca"));

for (const k in boxesObj) {
  console.log(k, boxesObj[k]);
}
// let arrObj = (Object.keys(boxesObj));

for (const k of Object.keys(boxesObj)) {
  console.log(k, boxesObj[k]);
}
console.log(Object.keys(boxesObj));
console.log(Object.values(boxesObj));
console.log(Object.entries(boxesObj));
// сравнение роботов
const charlie = { serialNo: 1, chipVer: 15 };
const lordy = { serialNo: 2, chipVer: 15 };

const compareRobots = (robot1, robot2) => {
  if (Object.keys(robot1).length !== Object.keys(robot2).length) {
    return false;
  }
  for (const key in robot1) {
    console.log(key);
    if (key === "serialNo" && key in robot2) {
      continue;
    }
    if (!(key in robot2) || robot1[key] !== robot2[key]) {
      return false;
    }
  }
  return true;
};
console.log(compareRobots(charlie, lordy));

// if (Object.values(robot1)[1] === Object.values(robot2)[1]) {
//   return true;
// } else {
//   return false;
// }

// for(const key of charlie){
//   console.log(key);
// }
// ----- Анализ Дистанции спортсмена
function getTriathlonDistance(distance) {
  let totalDistance = 226.31;
  const overcame = {};

  if (distance === 0) {
    return "Starting Line... Good Luck!";
  }
  if (distance >= 226.31) {
    return "You're done! Stop running!";
  } else if (distance > 0 && distance < 3.86) {
    overcame.swim = `${(totalDistance - distance).toFixed(2)} to go!`;
  }
  if (distance >= 3.86 && distance < 184.11) {
    overcame.bike = `${(totalDistance - distance).toFixed(2)} to go!`;
  }
  if (distance >= 184.11 && distance < 226.31) {
    overcame.run = `${(totalDistance - distance).toFixed(2)} to go!`;
  }
  return overcame;
}
console.log(getTriathlonDistance(2.31));
// Удалить повторяющиеся символы и вывести кол-во удаленных символов
function colorStones(stones) {
  let newStones = "";

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] !== stones[i + 1]) {
      newStones += stones[i];
    }
  }
  return stones.length - newStones.length;
}
console.log(colorStones("rggbsttu"));
// подсчет кол-ва меньших цифр относительно предыдущего числа в массиве.
console.log("***************");

let arr = [5, 4, 4, 2, 1];

function countNextSmaller(numbers) {
  let newArrNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let countNum = 0;

    for (let k = [i + 1]; k < numbers.length; k++) {
      if (numbers[i] > numbers[k]) {
        countNum += 1;
      }
    }

    newArrNumbers.push(countNum);
  }

  return newArrNumbers;
}
console.log(countNextSmaller(arr));
// вытащить из url адресса строку с кодом товара

let urlProd = "exampleshop.com/fancy-coffee-cup-p-90764-12052019.html";

function getProductId(url) {
  let strtInd = url.lastIndexOf("-p-") + 3;
  let endInd = url.lastIndexOf("-");

  console.log(strtInd, endInd);

  let string = url.slice(strtInd, endInd);

  return string;
}
console.log(getProductId(urlProd));
// массив из произведения всех чисел массива с обеих сторон от первоначалного числа.

// ----- таже но с выводом в консоль для понимания
/* function getArrayProduct(numbers) {
  if(numbers.length < 2){
    return false;
  }
  for(const k of numbers){
    if(k < 0){
      return false;
    }
  }
  let arrayNewNumbers = [];

  for(let i = 0; i < numbers.length; i ++){
    let result = numbers[i+1];
    console.log(`Начальный элем. ${numbers[i]}`);

    for( let k = 0; k < numbers.length; k ++){

      if(i !== k){
        console.log(`Индексы разные ${i} end ${k}`)
        console.log(`ПроизвНач: ${result}`);
        console.log(`Умнож на : ${numbers[k]}`);

        result *= numbers[k];
        console.log(`Конечное: ${result}`);
      }
    }
    arrayNewNumbers.push(result)
  }
  return arrayNewNumbers;
}
console.log(getArrayProduct([1, 5, 2])); */
console.log("****************************");

function getArrayProduct(numbers) {
  console.log(`Зашел массив: ${numbers}`);
  if (numbers.length < 2) {
    return false;
  }
  for (const k of numbers) {
    if (k < 0) {
      return false;
    }
  }

  let arrayNewNumbers = [];
  let result = 1;

  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  console.log(result);
  for (let k = 0; k < numbers.length; k++) {
    arrayNewNumbers.push(result / numbers[k]);
  }
  return arrayNewNumbers;
}
console.log(getArrayProduct([1, 5, 2]));

/* Привіт, загалом треба поправити трохи логіку. Функція getArrayProduct має приймаи масив чисел як аргумент. Спочатку вона оголошує змінну total, ініціалізовану значенням 1, для обчислення добутку всіх елементів масиву, та порожній масив totalArr, який міститиме результат. Перший цикл for проходить по всіх елементах масиву numbers, і на кожній ітерації значення total множиться на поточний елемент numbers[i], щоб отримати загальний добуток усіх чисел у масиві. Після завершення цього циклу змінна total містить добуток всіх чисел у масиві.

Далі другий цикл for знову ітерується по масиву numbers, і на кожній ітерації функція ділить total на поточний елемент numbers[j], щоб отримати добуток усіх чисел, окрім поточного. Отримане значення додається до масиву totalArr за допомогою методу push(). Після завершення циклу totalArr містить масив, де кожен елемент відповідає добутку всіх чисел у вхідному масиві, окрім числа на відповідній позиції. В кінці функція повертає масив totalArr як результат. */

function getRowWeights(people) {
  let time1 = 0;
  let time2 = 0;
  const newArr = [];
  for (let i = 0; i < people.length; i++) {
    if (i % 2 === 0) {
      time1 += people[i];
    } else {
      time2 += people[i];
    }
  }
  newArr.push(time1);
  console.log(`Команда 1: ${time1}`);
  newArr.push(time2);
  console.log(`Команда 2: ${time2}`);
  return newArr;
}
// console.log(getRowWeights([10, 85, 90]));
console.log(getRowWeights([10]));

console.log("****************************");
// сравнение свойств в обьекте между собой
let suspects = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

let dead = ["Lucas", "Bill"];

// function getKiller(suspects, dead) {

// let arrValue = Object.values(suspects);

// for (let n = 0; n < arrValue.length; n++) {

//   let peopls = arrValue[n];
//   let countSuspects = 0;

//   for (const k of peopls) {
//     console.log(`${k} = ${dead[0]} and ${dead[1]}`);
//     if (dead.includes(k)) {
//       countSuspects += 1;
//     }
//   }
//   console.log(countSuspects);
//   if(countSuspects === dead.length){
//     console.log('Подозреваемый найден', peopls);
//   }
// }

// }
function getKiller(suspects, dead) {
  let arrKeys = Object.keys(suspects);

  for (let n = 0; n < arrKeys.length; n++) {
    let suspect = arrKeys[n];
    let peopls = suspects[suspect];
    let countSuspects = 0;

    for (const k of peopls) {
      if (dead.includes(k)) {
        countSuspects += 1;
      }
    }
    if (countSuspects === dead.length) {
      return suspect;
    }
  }
}
console.log(getKiller(suspects, dead));
// */*/*/*/*/*/*

friends = [
  { username: "David", status: "online", lastActivity: 10 },
  { username: "Lucy", status: "offline", lastActivity: 22 },
  { username: "Bob", status: "online", lastActivity: 104 },
];

function whoIsOnline(friends) {
  let statusFriendObj = {};

  for (const friend of friends) {
    let keysProp = Object.keys(friend);

    let key = null;
    let value = null;

    for (let p = 0; p < keysProp.length; p++) {
      if (keysProp[p] === "username") {
        value = friend[keysProp[p]];
      }
      if (keysProp[p] === "status") {
        key = friend[keysProp[p]];
      }

      console.log(`Значение: ${keysProp[p]} ${friend[keysProp[p]]}`);

      if (keysProp[p] === "lastActivity") {
        if (friend[keysProp[p]] > 10 && key === "online") {
          key = "away";
        }
      }
    }
    if (key && value) {
      if (!statusFriendObj[key]) {
        statusFriendObj[key] = [];
      }
      statusFriendObj[key].push(value);
    }
  }
  return statusFriendObj;
}

console.log(whoIsOnline(friends));
// **-**-**-**-***-***-***-***-
const first = { a: 2, b: 4 };
const second = { a: 2, b: 10 };
const third = { d: -5 };

function sumObjects(...arryObj) {
  let resultObj = {};

  for (const obj of arryObj) {
    for (let key in obj) {
      if (!resultObj[key]) {
        resultObj[key] = obj[key];
      } else {
        resultObj[key] = resultObj[key] + obj[key];
      }
    }
  }
  return resultObj;
}

console.log(sumObjects(first, second, third));
// ***-***-***-***-***-

// function countMatchingSocks(colors) {
//   let pars = 0;

//   for (let i = 0; i < colors.length; i++) {
//     let count = 1;

//     for (let k = 0; k < colors.length; k++) {
//       if (i !== k && colors[i] === colors[k]) {
//         console.log(i, k);

//         count += 1;
//       }
//     }
//     console.log(count);
//     pars += Math.floor(count / 2);
//   }
//   return pars;
// }

function countMatchingSocks(colors) {
  let countColor = {};
  let result = 0;

  for (let color of colors) {
    countColor[color] = (countColor[color] || 0) + 1;
  }

  let prop = Object.values(countColor);
  for (const numCol of prop) {
    result += Math.floor(numCol / 2);
  }

  return result;
}

console.log(countMatchingSocks([10, 20, 30, 10, 20, 10, 60]));

console.log(Math.floor(4 / 2));

const kolli = {
  Kolli: "name",
  123: "chipVer",
  3: "wheels",
};

const robert = {
  123: "chipVer",
  Robert: "name",
  11: "chip",
  113: "chipVer",
};

// function inverseRobot(robot) {
//   const resValue = Object.values(robot);
//   const resUnik = new Set(resValue);

//   if (resUnik.size === resValue.length) {
//     const resKeyVel = Object.entries(robot);

//     const totalArr = [];

//     for (const item of resKeyVel) {
//       const arr = [];
//       arr.push(item[1]);
//       arr.push(item[0]);
//       totalArr.push(arr);
//     }

//     return Object.fromEntries(totalArr);
//   } else {
//     return null;
//   }
// }

// console.log(inverseRobot(robert));

// Функция работает

function inverseRobot(robot) {
  const resValue = Object.values(robot);
  const resUnik = new Set(resValue);
  let newObj = {};

  if (resUnik.size === resValue.length) {
    for (let key in robot) {
      newObj[robot[key]] = key;
    }
    return newObj;
  } else {
    return null;
  }
}
console.log(inverseRobot(kolli));

function inverseRobot(robot) {
  const newRobot = {};

  for (let key in robot) {
    const value = robot[key];

    if (value in newRobot) {
      return null;
    } else {
      newRobot[robot[key]] = key;
    }
  }
  return newRobot;
}
console.log(inverseRobot(robert));

// новая функция

function generateChart(statistics) {
  let summParts = 0;
  const deg = 360;
  const newObj = {};

  for (let value of Object.values(statistics)) {
    summParts += value;
  }
  for (let key of Object.keys(statistics)) {
    newObj[key] = Math.round((deg / summParts) * statistics[key]);
  }

  return newObj;
}

generateChart({ cleaner: 2, driver: 8 });

console.log(generateChart({ cleaner: 2, driver: 8 }));

// функция по добавлению и удалению элементов согласно указанных в свойстве команд

const actions = [
  {
    type: "addProperties", // додавання властивостей
    extraData: {
      // властивості, які слід додати до стану
      key1: "value1",
      key2: "value2",
    },
  },
  {
    type: "removeProperties", // видалення властивостей
    keysToRemove: ["key1", "key2"], // ключі, які слід видалити зі стану
  },
  {
    type: "clear", // стан має стати порожнім після виконання цієї дії
  },
];

const state = { foo: "bar", bar: "foo" };

function transformState(changeObj, propObj) {
  console.log(changeObj);

  for (const obj of propObj) {
    console.log(obj);

    if (obj.type === 'addProperties') {
      Object.assign(changeObj, obj.extraData);
    }
    console.log(changeObj);

    if (obj.type === 'removeProperties') {
      obj.keysToRemove.forEach((elem) => delete changeObj[elem]);
    }

    if (obj.type === 'clear') {
      Object.keys(changeObj).forEach(key => delete changeObj[key])
    }
  }
  return changeObj;
}

console.log(transformState(state, actions));
