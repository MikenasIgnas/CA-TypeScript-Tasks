/* eslint-disable no-unused-vars */
console.group('1. Užduoties Atsakymas');
{
  const multiply = (multipleA:number, multipleB:number) => multipleA * multipleB;

  const power = (number:number, toPower:number) => number ** toPower;

  const squareRoot = (number:number) => number ** (1 / 2);

  const root = (number: number, nthRoot: number) => number ** (1 / nthRoot);

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
}
console.groupEnd();

console.group('2. Užduoties Atsakymas');
{
  type NumberType = (number: number) => number;
  type StringType = (str: string) => void;
  type TwoNumsType = (num1: number, num2: number) => number;

  const multiply: TwoNumsType = (multipleA, multipleB) => multipleA * multipleB;

  const toPower: TwoNumsType = (number, power) => number ** power;

  const squareRoot: NumberType = (number) => number ** (1 / 2);

  const root: TwoNumsType = (number, nthRoot) => number ** (1 / nthRoot);

  const printBlueText: StringType = (text) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: toPower(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('Blue Function Text');
}
console.groupEnd();
