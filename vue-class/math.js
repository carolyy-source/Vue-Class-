export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

//預設匯出

export default function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "multiply":
      return multiply(a, b);
  }
}
