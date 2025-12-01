console.log("1-1---------");
const city = "台北";
const message = `我現在在${city}！`; // ✍️
console.log(message); // 我現在在台北！

const multiply = function (x, y) {
  return x * y;
};

console.log("2-1---------");

// 請改寫成箭頭函式
const modernMultiply = (x, y) => x * y; //
console.log(modernMultiply(3, 5)); // 印出乘積

console.log("2-2---------");
const names = ["小明", "小華", "小菁"];
// 請用 map 和箭頭函式，製作一個每個名字加上「同學」的新陣列
const classmates = names.map((n) => `${n}同學`); // ✍️
console.log(classmates); // ["小明同學", "小華同學", "小菁同學"]

console.log("3-1---------");
const name = "勇者";
const hp = 120;

// 請產生一個角色物件，內容有 name、hp，以及一個 attack 方法，回傳字串「勇者攻擊了！」
const character = {
  name,
  hp,
  attack() {
    return `${name}攻擊了!`;
  },
  // ✍️
};

console.log(character.attack()); // 勇者攻擊了！

console.log("4-1---------");
const colors = ["紅色", "藍色", "黃色"];
// 請使用解構，取出第一個和第二個顏色
const [firstColor, secondColor] = colors; // ✍️
console.log(firstColor); // 紅色
console.log(secondColor); // 藍色

console.log("4-2---------");
const book = {
  title: "JS 大冒險",
  author: "小明",
  price: 300,
};

// 請解構出 title 和 price
const { title, price } = book; // ✍️
