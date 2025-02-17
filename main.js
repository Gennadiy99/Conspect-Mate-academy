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
