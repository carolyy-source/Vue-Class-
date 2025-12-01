import calculate from "./math.js";
import { add, multiply } from "./math.js";
import * as MathUtils from "./math.js";

//使用
const result1 = calculate("add", 5, 3);
const result2 = add(10, 20);
const result3 = MathUtils.multiply(4, 7);

console.log(result2);
