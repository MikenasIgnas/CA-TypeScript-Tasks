console.log('ASDASD');
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// eslint-disable-next-line no-unused-vars
type binaryStringBuilder = (str1: string, str2: string) => string

const joinStrings: binaryStringBuilder = (str1, str2) => `${str1} ${str2}`;

const createInitials: binaryStringBuilder = (str1, str2) => str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();

const sum: number = addNumbers(5, 7);
const joinedString: string = joinStrings('Penediktas', 'Tušinis');
const initials: string = createInitials('Penediktas', 'Tušinis');

console.log({
  sum,
  joinedString,
  initials,
});

function printRedText(text: string): void {
  console.log(`%c ${text}`, 'color: #ee0000');
}

printRedText('printRed funkcijos argumentas');

console.group('1. Užduoties Atsakymas');
{
  const multiply = (multipleA:number, multipleB:number) => multipleA * multipleB;

  const power = (base:number, toPower:number) => base ** toPower;

  const squareRoot = (number:number) => number ** (1 / 2);

  const root = (base: number, nthRoot: number) => base ** (1 / nthRoot);

  const printBlueText = (text: string) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
