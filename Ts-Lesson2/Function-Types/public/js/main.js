"use strict";
console.group('1. Užduoties Atsakymas');
{
    const multiply = (multipleA, multipleB) => multipleA * multipleB;
    const power = (number, toPower) => number ** toPower;
    const squareRoot = (number) => number ** (1 / 2);
    const root = (number, nthRoot) => number ** (1 / nthRoot);
    const num1 = 16;
    const num2 = 4;
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
    const multiply = (multipleA, multipleB) => multipleA * multipleB;
    const toPower = (number, power) => number ** power;
    const squareRoot = (number) => number ** (1 / 2);
    const root = (number, nthRoot) => number ** (1 / nthRoot);
    const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
    const num1 = 16;
    const num2 = 4;
    console.log({
        [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
        [`power(${num1}, ${num2})`]: toPower(num1, num2),
        [`squareRoot(${num1})`]: squareRoot(num1),
        [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('Blue Function Text');
}
console.groupEnd();
//# sourceMappingURL=main.js.map