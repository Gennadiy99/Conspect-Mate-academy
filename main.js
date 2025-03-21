// Рабочий скрипт для Конспекта, - Не удалять
document.querySelectorAll(".Select-section").forEach((selectElem) => {
  selectElem.addEventListener("change", function () {
    let sectionEl = this.value;
    console.log(sectionEl);

    if (sectionEl) {
      window.location.href = sectionEl;
    }
  });
});

// функция по добавлению и удалению элементов согласно указанных в свойстве команд

// const actions = [
//   {
//     type: "addProperties", // додавання властивостей
//     extraData: {
//       // властивості, які слід додати до стану
//       key1: "value1",
//       key2: "value2",
//     },
//   },
//   {
//     type: "removeProperties", // видалення властивостей
//     keysToRemove: ["key1", "key2"], // ключі, які слід видалити зі стану
//   },
//   {
//     type: "clear", // стан має стати порожнім після виконання цієї дії
//   },
// ];

// const state = { foo: "bar", bar: "foo" };

// function transformState(changeObj, propObj) {
//   console.log(changeObj);

//   for (const obj of propObj) {
//     console.log(obj);

//     if (obj.type === "addProperties") {
//       Object.assign(changeObj, obj.extraData);
//     }
//     console.log(changeObj);

//     if (obj.type === "removeProperties") {
//       obj.keysToRemove.forEach((elem) => delete changeObj[elem]);
//     }

//     if (obj.type === "clear") {
//       Object.keys(changeObj).forEach((key) => delete changeObj[key]);
//     }
//   }
//   return changeObj;
// }

// console.log(transformState(state, actions));

function printInfo() {
  console.log(`${this.firstName}  ${this.lastName} `);
}
// function printInfo(us) {
//   console.log(`${us.firstName} ${us.lastName} `);
// }

const colega = {
  firstName: "Jon",
  lastName: "Levington",
  print: printInfo,
};

const colega2 = {
  firstName: "Vasja",
  lastName: "Lev",
  print: printInfo,
};

// printInfo(colega);
colega.print();
colega2.print();

const buro = {
  firstName: "Tanya",
  lastName: "Bashliy",
  getFull(us) {
    return `${this.firstName} ${this.lastName}`;
  },
};

const search = {
  firstName: "Eva",
  lastName: "Litvinenko",
};
buro.fullName = `${buro.firstName} ${buro.lastName}`;
console.log(buro.fullName);

console.log(buro.getFull());

console.log(buro.getFull.call(search));
// задание функция создающая робота

// function makeRobot(name, wheels, version) {
//   const robot = {
//     name: name,
//     "chip version": wheels,
//     version: version,

//     get info() {
//       let stringInfo = "";

//       Object.entries(this).forEach(([key, value]) => {
//         console.log(key, value);

//         if (typeof value !== "function") {
//           stringInfo += `${key} : ${value}`;
//         }
//       });
//       return stringInfo;
//       // return `${this.name} ${this['chip version']} ${this.version}`;
//     },
//   };
//   return robot;
// }

// const newRobot = makeRobot("Misha", 6, 458);
// console.log(newRobot.info);

// Второй вариант  кода

function makeRobot(name, wheels, version) {
  const robot = {
    name: name,
    "chip version": version,
    wheels: wheels,
    coords: {
      x: 0,
      y: 0,
    },
    goForward(step = 1) {
      if (step > 0) {
        this.coords.y += step;
      }
      return this;
    },

    goBack(step = 1) {
      if (step > 0) {
        this.coords.y -= step;
      }
      return this;
    },

    goRight(step = 1) {
      if (step > 0) {
        this.coords.x += step;
      }
      return this;
    },

    goLeft(step = 1) {
      if (step > 0) {
        this.coords.x -= step;
      }
      return this;
    },

    evacuate() {
      this.coords.x = 1400;
      this.coords.y = 500;
    },

    get info() {
      return (
        `name: ${this.name},` +
        `chip version: ${this["chip version"]},
    wheels: ${this.wheels},`
      );
    },

    get location() {
      return `${this.name}: x=${this.coords.x}, y=${this.coords.y}`;
    },
  };

  return robot;
}

const newRobot = makeRobot("Misha", 6, 458);

console.log(newRobot.info);
console.log(newRobot.location);
newRobot.goForward(5).goLeft(5).goBack(8);
console.log(newRobot.location);
// ----

// const numbers = [1, 2, 3];
// const newLength = numbers.push(10, 20);

// console.log(newLength);

// console.log(numbers.length);

// numbers.push = function (...elems) {
//   for (let i = 0; i < elems.length; i++) {
//     this[this.length] = elems[i];
//   }

//   return this.length;
// };

// имитация метода pop()

// numbers.pop = function () {
//   if (this.length === 0) {
//     return undefined;
//   } else {
//     const lastElem = this[this.length - 1];

//     this.length = this.length - 1;

//     return lastElem;
//   }
// };

// имитация метода unshift

// const numbers2 = {
//   arrMet: [1, 2, 3],

//   unshift: function (...el) {
//     for (let i = el.length - 1; i >= 0; i--) {
//       for (let f = this.arrMet.length; f > 0; f--) {
//         this.arrMet[f] = this.arrMet[f - 1];
//       }

//       this.arrMet[0] = el[i];
//     }

//     return this.arrMet.length;
//   },
// };

// numbers2.unshift(7);

// console.log(numbers2.unshift(7));
// console.log(numbers2.arrMet);

// Имитация метода shift

const numbers = [0, 1, 2, 3, 4, 5];

numbers.shift = function () {
  if (this.length === 0) {
    return undefined;
  }
  const removedElement = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length--;

  return removedElement;
};

// имитация функции indexOf

numbers.indexOf = function (item, index = 0) {
  startIndex = Math.trunc(index);
  console.log(startIndex);

  if (startIndex < 0) {
    console.log(this.length);
    console.log(startIndex);

    startIndex = this.length + startIndex;

    console.log(startIndex);

    if (startIndex < 0) {
      startIndex = 0;
    }
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

console.log(numbers.indexOf(5, -2));

// 0 1 2 3 4 5 6 = 7 'элементов' / 6й - индекс последний.
//   indexOf(-6); 7 - 6 = 1;
//   indexOf(-7); 7 - 7 = 0;
//   indexOf(-8); 7 - 8 = -1;

// Имитация метода includes()

numbers.includes = function (item, index = 0) {
  let indexStart = Math.trunc(index);

  if (indexStart < 0) {
    indexStart = this.length + indexStart;

    if (indexStart < 0) {
      indexStart = 0;
    }
  }

  for (let n = indexStart; n < this.length; n++) {
    console.log(this[n], item);

    if (this[n] === item) {
      return true;
    }
  }

  return false;
};

console.log(numbers.includes(3, 6));
// функция поиска робота на и возврат его рабочего места

const robot = {
  name: "Sundar",
};
const workPlaces = [
  {
    name: "mate academy",
    staff: ["Roma", "Misha", "Yura"],
  },
  {
    name: "Google",
    staff: ["Larry", "Sergey", "Sundar"],
  },
];

// const searchRobot = function (robotMain, places) {
//   for (objPlace of places) {

//     for (nameStaff of objPlace.staff) {
//       if (robotMain.name === nameStaff) {
//         return objPlace.name;
//       }
//     }
//   }
// };

const searchRobot = function (robotMain, places) {
  for (const objPlace of places) {
    if (objPlace.staff.includes(robotMain.name)) {
      return objPlace.name;
    }
  }
  return null;
};
console.log(searchRobot(robot, workPlaces)); // повертає 'Google';

// разбор операторов для создания массива

const arryElem = new Array(9);
const arrySecend = new Array(1, 2);

console.log(arryElem[0] + arrySecend[0]);

// console.log(arryElem.length);
// console.log(arryElem);
// console.log(arryElem)[0];
// Имитация метода slice

console.log(numbers);

numbers.slice = function (indexSt = 0, indexEnd = this.length) {
  let indNewSt = indexSt;
  let indNewEnd = indexEnd;

  if (indNewSt < 0) {
    indNewSt = this.length + indNewSt;

    if (indNewSt < 0) {
      indNewSt = 0;
    }
  }

  if (indNewEnd < 0) {
    indNewEnd = this.length + indNewEnd;

    if (indNewEnd < 0) {
      indNewEnd = 0;
    }
  }

  if (indNewEnd >= this.length) {
    indNewEnd = this.length;
  }

  const newArr = [];

  for (let i = indNewSt; i < indNewEnd; i++) {
    newArr[newArr.length] = this[i];
  }

  return newArr;
};

console.log(numbers.slice());

//  метод join()

let numbers7 = [7, null, 3, 4];

numbers.join = function (separator = ",") {
  let newStr = "";

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined || this[i] === null) {
      this[i] = "";
      newStr += this[i];
    }

    if (i !== this.length - 1) {
      newStr += `${this[i]}` + separator;
    } else {
      newStr += this[i];
    }
  }

  return newStr;
};

console.log(numbers7.join(null));

// функция числа и выдача кол-ва слов из строки
const wish = `I want a short stylish haircut, like my brother's`;

function getOrder(wish, wordsCount) {
  return wish.split(" ").slice(0, wordsCount).join(" ");
}

console.log(getOrder(wish, 4));

// функция преобразования Формата Даты

("18.02.2020");

function formatDate(date) {
  const arrDate = date.split("-");
  const newDate = [];

  for (let i = arrDate.length - 1; i >= 0; i--) {
    newDate.push(arrDate[i]);
  }

  return newDate.join(".");
}

console.log(formatDate("2020-02-18"));

// имитация метода revers

numbers1 = [1, 2, 3, 4, 5];

numbers1.reverse = function () {
  let left = 0;
  let right = this.length - 1;

  while (left < right) {
    [this[left], this[right]] = [this[right], this[left]];
    left++;
    right--;
  }

  return this;
};

console.log(numbers1);
console.log(numbers1.reverse());
// Функция сортировки массива книг в строку

let shelves = [
  ["Going Over", "Brazen"],
  ["The Enemy"],
  ["Followers", "Belle Epoque"],
];
// ['Belle Epoque', 'Brazen', 'Followers', 'Going Over', 'The Enemy']

function sortBooks(shelves) {
  let allBooks = [];

  for (const books of shelves) {
    for (const book of books) {
      allBooks.push(book);
    }
  }

  return allBooks.sort();
}

console.log(sortBooks(shelves));
// перевернуть каждый элемент в массиве

let message = "tpircsavaJ si eht egaugnal fo erutuf";
let message1 = "tpircsavaJ";
let message2 = "";
// 'Javascript is the language of future'

function reverseMessage(messageParam) {
  if (messageParam === "") {
    return "";
  }

  const arrMessage = messageParam.split(" ");
  const newMessage = [];

  for (const message of arrMessage) {
    newMessage.push(message.split("").reverse().join(""));
  }

  return newMessage.join(" ");
}

console.log(reverseMessage(message));

// const arrayStr1 = ["ffff", "gggg", "sss", "rrr", "qqq"];

// const arrayStrNew = ([first, , second, ...strRest] = arrayStr1);

// console.log(first, second);
// console.log(strRest);
// функция формирования заказа роботами

// const list = makeOrderList(order);

/*
list === {
  coca_cola: 1,
  chicken_nuggets: 5,
  egg: 20,
}
*/
const order = "1 coca  cola, 5 chicken nuggets, 20 egg";
// const order1 = "";
console.log(order);

// Решение 2 способа через разные методы массивов

// function makeOrderList(order) {
//   const obj = {};

//   if (order.length === 0) {
//     return obj;
//   }

//   const arryStr = order.split(", ");

//   for (const str of arryStr) {
//     const arr1 = str.split(" ");
//     let vel = arr1.slice(0, 1).join("");
//     let key = arr1.slice(1).join("_");

//     obj[key] = Number(vel);
//   }

//   return obj;
// }

// console.log(makeOrderList(order));

function makeOrderList(order) {
  const obj = {};

  if (order.length === 0) {
    return obj;
  }

  const arryStr = order.split(", ");

  for (const str of arryStr) {
    const arr1 = str.split(" ");
    [k, ...y] = arr1;

    const key = y.join("_");

    obj[key] = Number(k);
  }

  return { obj };
}

console.log(makeOrderList(order));

// методы создания массивов

let arStr1 = "sdfghj";
let arStr2 = "qqqqqq";

let ar1 = Array.from(arStr1); // все элементы Строи становятся Отдельными эл массива
let ar2 = new Array(arStr1); // вся строка становится Одним элементом массива
let arr3 = Array.from({ length: 10 }, (x, i) => i);
// let arr4 = Arr(3);
console.log(["11", "22", "33"].includes("11")), console.log(ar1);
console.log(ar2);
console.log(arr3);

// реализации метода массива lastIndexOf();

const numbers8 = [5, 6, 1, 4, 2, 5];

numbers.lastIndexOf = function (item, index = this.length - 1) {
  let indexSerch = index;

  if (indexSerch < 0) {
    indexSerch = this.length + indexSerch;
  }

  if (indexSerch < 0) {
    return -1;
  }

  for (let i = indexSerch; i >= 0; i--) {
    if (item === this[i]) {
      return i;
    }
  }
  return -1;
};

console.log(numbers8.lastIndexOf(2, 0));

let oldArr = [1, 2, 3, 4, 5];
let arrNewDes = ([] = oldArr);
console.log(arrNewDes);
arrNewDes[1] = 77;
console.log(oldArr);
let newArrFromOld = oldArr.slice();
console.log(newArrFromOld);

newArrFromOld[4] = 7;

console.log(newArrFromOld);
console.log(arrNewDes);

let strProb = "sdfghhjkl";

const newArrX = Array.from(oldArr);
console.log(newArrX);
newArrX[4] = 9999;
console.log(newArrX);
console.log(oldArr);

const newArrayX2 = new Array(oldArr, 9999, 77777);
console.log(newArrayX2);
console.log(newArrayX2[0]);
console.log(newArrayX2[1]);

let arrLeg = [...oldArr, 4444, 7777];
console.log(arrLeg);

let arrConcat = oldArr.concat(777, 444);
console.log(arrConcat);
// функция калькулятор

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(operands, operation) {
  return operation(operands[0], operands[1]);
}

console.log(calculate([2, 6], sum)); // 8
console.log(calculate([2, 6], multiply)); // 12
// функция действий калькулятор 2

const suma = (a, b, c) => a + b + c;
const multipl = (a, b) => a * b;
const cube = (x) => x ** 3;
// const suma = (a, b, c) =>  a + b + c;

function getResult(params, callback) {
  return callback(...params);
}

console.log(getResult([3, 4, 2], suma));
console.log(getResult([3, 4], multipl));
console.log(getResult([3], cube));
//  функция предложение гостинницы

const getClientStatus = () => "vip";
const offerLuxuriousRoom = () => "Luxury room";
const offerStandardRoom = () => "Standard room";

function offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom) {
  if (getClientStatus() === "vip") {
    return offerLuxuriousRoom();
  } else {
    return offerStandardRoom();
  }
}

console.log(offerRoom(getClientStatus, offerStandardRoom, offerLuxuriousRoom));
// === "Luxury room";

// function version(a, b, c) {
//   return (a * b) / c;
// }
const version = (a, b, c) => (a * b) / c;

console.log(version(2, 4, 2));
// использование функции колбек дя форматирования Строки

const message3 = "использование функции колбек";

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function formatMessage(message, callback) {
  const newMessage = [];
  message.split(" ").forEach((elem) => {
    newMessage.push(callback(elem));
  });
  return newMessage.join(" ");
}
/* function formatMessage(message, callback) {
  let newMessage = '';
  message.split(' ').forEach((elem) => {
    newMessage += ` ${callback(elem)}`;
  });
  return newMessage;
} */

console.log(formatMessage(message3, capitalize));

// функция замены елемента массива результатом калбек функции

const queue = [
  { type: "robot" },
  { type: "robot" },
  { type: "robot" },
  { type: "dog" },
  { type: "robot" },
];

const isRobot = (robot) => {
  if (robot.type === "robot") {
    return true;
  }

  return false;
};

function processArray(items, callback) {
  for (let i = 0; i < items.length; i++) {
    items[i] = callback(items[i]);
  }

  return items;
}

console.log(processArray(queue, isRobot));
// еще функция

function getFirstBadVersion(checkVersion, currentVersion) {
  for (let i = 0; i <= currentVersion; i++) {
    if (checkVersion(i)) {
      return i;
    }
  }
}

// РАзбор колобек функций, применение при обращении к Дом ДЕреву
const destr = document.querySelector(".Object_Destructuring");

console.log(destr);

destr.addEventListener("click", () => {
  destr.textContent = "123";

  const timerTd = setInterval(() => {
    destr.textContent = Date.now();
  }, 1000);

  document.addEventListener("contextmenu", () => {
    clearInterval(timerTd);
  });
});

// Классная работа по колбек функции
const candies = [
  "KitKat",
  "Nuts",
  "Lion",
  "Mars",
  "Snickers",
  "Bounty",
  "Nuts",
];

function filter(candies, isGoodEnough) {
  const result = [];

  for (const candy of candies) {
    if (isGoodEnough(candy)) {
      result.push(candy);
    }
  }

  return result;
}

function createSizeFilter(size) {
  return (x) => x.length <= size;
}

const isUpNo4 = createSizeFilter(4);
const isUpNo6 = createSizeFilter(6);

console.log(filter(candies, isUpNo4), filter(candies, isUpNo6));

// функция с поиском в массиве конфет

const contains0 = (item) => item.includes("o");
const isLessThan = (item) => item.length < 5;

function filter1(array, func) {
  const arrayNew = [];

  for (const item of array) {
    if (func(item)) {
      arrayNew.push(item);
    }
  }

  return arrayNew;
}

console.log(filter1(candies, contains0));
console.log(filter1(candies, isLessThan));
// Имитация метода фильтр без использования методов массивов

numbers.filter2 = function (call) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (call(this[i], i, this)) {
      if (result.length === 0) {
        result[0] = this[i];
      } else {
        result[result.length] = this[i];
      }
    }
  }

  return result;
};

const callFit = function (item) {
  if (item % 2 === 0) {
    return item;
  }
};

let resulArrfilter = numbers.filter2(callFit);

console.log(resulArrfilter);

// Имитация метода map

numbers.map2 = function (call) {
  const result = [];

  for (let k = 0; k < this.length; k++) {
    result[result.length] = call(this[k], k, this);
  }

  return result;
};

let newArrMap = numbers.map2((x) => x * 2);
console.log(numbers);
console.log(newArrMap);
//  Имитация метода find

numbers.find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);

    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};
const foundNumber = numbers.find((el) => el > 0);

console.log(foundNumber);
// Имитация работы метода findIndex

numbers.findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);

    if (callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};
const foundIndex = numbers.findIndex((el) => el > 4);

console.log(numbers);
console.log(foundIndex);
// Имитация метод some

numbers.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};
// имитация метода every

numbers.every = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result[result.length] = this[i];
    }
  }

  if (result.length === this.length) {
    return true;
  } else {
    return false;
  }
};
// имитация метода Редьюз
/* 
numbers.reduce((sum, n) => sum + n, ''), // '12345'
numbers.reduce((result, n) => result * n, 10), 
*/
const numbers2 = [1, 2, 3, 4, 5];
const calb1 = (st, n, i) => st + n * i;

numbers.reduce = function (callback, start) {
  if (this == null) {
    throw new TypeError('Cannot read property "reduce2" of null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} +  is not a function`);
  }

  if (this.length === 0 && start === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let acomm = start;
  let i = acomm === undefined ? 1 : 0;

  if (acomm === undefined) {
    acomm = this[0];
  }

  for (i; i < this.length; i++) {
    acomm = callback(acomm, this[i], i, this);
  }

  return acomm;
};

console.log(numbers2);
console.log(numbers2.reduce2(calb1, 10));
