const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [3, 4, 5]

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);

// 2
const game = {
  player: {
    // skills 可能不存在
  },
};

const firstSkill = game.player?.skills?.magic?.[0] ?? "尚未學習技能";
console.log(firstSkill); // '尚未學習技能'
