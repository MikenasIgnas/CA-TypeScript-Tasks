"use strict";
console.log('ASDASD');
const addNumbers = (num1, num2) => num1 + num2;
const joinStrings = (str1, str2) => `${str1} ${str2}`;
const createInitials = (str1, str2) => str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
const sum = addNumbers(5, 7);
const joinedString = joinStrings('Penediktas', 'Tušinis');
const initials = createInitials('Penediktas', 'Tušinis');
console.log({
    sum,
    joinedString,
    initials,
});
function printRedText(text) {
    console.log(`%c ${text}`, 'color: #ee0000');
}
printRedText('printRed funkcijos argumentas');
console.group('1. Užduoties Atsakymas');
{
    const multiply = (multipleA, multipleB) => multipleA * multipleB;
    const power = (base, toPower) => base ** toPower;
    const squareRoot = (number) => number ** (1 / 2);
    const root = (base, nthRoot) => base ** (1 / nthRoot);
    const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
    const num1 = 16;
    const num2 = 4;
    console.log({
        [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
        [`power(${num1}, ${num2})`]: power(num1, num2),
        [`squareRoot(${num1})`]: squareRoot(num1),
        [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
//# sourceMappingURL=main.js.map