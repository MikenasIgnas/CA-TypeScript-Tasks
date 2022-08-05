const wordArray:string[] = ['one', 'two', 'three', 'four', 'five'];
const numberArray: number[] = [1, 2, -4, 3, 4, 5, -8, 6, 7, -5, 8, 9, 10, -15, 13, 23];
console.group('1. Užduoties Atsakymas');
{
  const lastElIndex = (array: any[]) => console.log(array.length - 1);
  lastElIndex(wordArray);
  lastElIndex(numberArray);
}
console.groupEnd();

console.group('2. Užduoties Atsakymas');
{
  const eachElemenIndex = (array: any[]) => {
    array.map((el, i) => console.log(i));
  };
  eachElemenIndex(wordArray);
  console.log(
    '-------------------------------------',
  );
  eachElemenIndex(numberArray);
}
console.groupEnd();

console.group('3. Užduoties Atsakymas');
{
  const eachElemenValue = (array: any[]) => {
    array.map((el) => console.log(el));
  };
  eachElemenValue(wordArray);
  console.log(
    '-------------------------------------',
  );
  eachElemenValue(numberArray);
}
console.groupEnd();

console.group('4. Užduoties Atsakymas');
{
  const eachElemenIndexAndValue = (array: any[]) => {
    array.map((el, i) => console.log(`[${i}] => ${el}`));
  };
  eachElemenIndexAndValue(wordArray);
  console.log(
    '-------------------------------------',
  );
  eachElemenIndexAndValue(numberArray);
}
console.groupEnd();

console.group('5. Užduoties Atsakymas');
{
  const reverseArray = (array: any[]) => {
    const reversed:any[] = array.reverse();
    console.log(reversed);
    reversed.map((el) => console.log(el));
  };
  reverseArray(wordArray);
  reverseArray(numberArray);
}
console.groupEnd();

console.group('6. Užduoties Atsakymas');
{
  const inLineIndex = (array: any[]) => {
    const reversed:any[] = array.reverse();
    console.log(reversed);
    const emptyArr: any[] = [];
    reversed.map((el, i) => {
      emptyArr.push(i);
    });
    console.log(emptyArr.toString());
  };
  inLineIndex(wordArray);
  inLineIndex(numberArray);
}
console.groupEnd();

console.group('7. Užduoties Atsakymas');
{
  const inLineValue = (array: any[]) => {
    const emptyArr: any[] = [];
    array.map((el) => {
      emptyArr.push(el);
    });
    console.log(emptyArr.toString());
  };
  inLineValue(wordArray);
  inLineValue(numberArray);
}
console.groupEnd();

console.group('8. Užduoties Atsakymas');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  const arrayPairs = (wordArr: any[], numArr: any[]) => {
    wordArr.map((el, i) => {
      console.log(`[${i}] => ${el}`);
    });
    numArr.map((el, i) => {
      console.log(`[${i}] => ${el}`);
    });
  };
  arrayPairs(wordArray, numberArray);
}
console.groupEnd();

console.group('9. Užduoties Atsakymas');
{
  const doubleValue = (numArr: number[]) => {
    console.log(numArr.map((el) => el * 2));
  };

  doubleValue(numberArray);
}
console.groupEnd();

console.group('10. Užduoties Atsakymas');
{
  const squareValue = (numArr: number[]) => {
    console.log(numArr.map((el) => el * el));
  };

  squareValue(numberArray);
}
console.groupEnd();

console.group('11.Užduoties Atsakymas');
{
  const indexMultiply = (numArr: number[]) => {
    console.log(numArr.map((el, i) => el * i));
  };

  indexMultiply(numberArray);
}
console.groupEnd();

console.group('12. Užduoties Atsakymas');
{
  const postiveEl = (numArr: number[]) => {
    numArr.map((el) => {
      if (el >= 0) {
        console.log(el);
      }
    });
  };
  postiveEl(numberArray);
}
console.groupEnd();

console.group('13. Užduoties Atsakymas');
{
  const negativeEl = (numArr: number[]) => {
    numArr.map((el) => {
      if (el < 0) {
        console.log(el);
      }
    });
  };
  negativeEl(numberArray);
}
console.groupEnd();

console.group('14.Užduoties Atsakymas');
{
  const evenEl = (numArr: number[]) => {
    numArr.map((el) => {
      if (el % 2 === 0) {
        console.log(el);
      }
    });
  };
  evenEl(numberArray);
}
console.groupEnd();

console.group('15. Užduoties Atsakymas');
{
  const oddEl = (numArr: number[]) => {
    numArr.map((el) => {
      if (el % 2 !== 0) {
        console.log(el);
      }
    });
  };
  oddEl(numberArray);
}

console.groupEnd();

console.group('16. Užduoties Atsakymas');
{
  const oddEl = (numArr: number[]) => {
    numArr.map((el) => {
      if (el < 0) {
        console.log(el * -1);
      } else {
        console.log(el);
      }
    });
  };
  oddEl(numberArray);
}
console.groupEnd();
/// //////////////////////////////////////////////////////////

console.groupCollapsed('1. Užduoties Atsakymas');
{
  const capitalCase = (str: string) => {
    console.log(str.toUpperCase());
  };
  capitalCase('house');
  capitalCase('lamp');
}
console.groupEnd();

console.groupCollapsed('2. Užduoties Atsakymas');
{
  const stringLength = (str1: string, str2: string) => console.log(str1.length + str2.length);
  stringLength('One', 'Two');
}
console.groupEnd();

console.groupCollapsed('3.Užduoties Atsakymas');
{
  const searchLetter = (str:string, letterA:string):boolean => str.includes(letterA);

  console.log(searchLetter('asdafsfsdafgsf', 'ad'));
  console.log(searchLetter('abcdef', 'b'));
}
console.groupEnd();

console.groupCollapsed('4. Užduoties Atsakymas');
{
  const evenLetterNum = (str : string):boolean => str.length % 2 === 0;
  console.log(evenLetterNum('hello'));
  console.log(evenLetterNum('helloo'));
}
console.groupEnd();

console.groupCollapsed('5. Užduoties Atsakymas');

{
  const allVowels: string = 'aeiouyAEIOUYąęėįųūĄĘĮŲŪ';
  const vowelsCount = (str: string):number => Array.from(str).filter((letter) => allVowels.includes(letter)).length;

  console.log(vowelsCount('asdasd'));
}
console.groupEnd();
console.groupCollapsed('6. Užduoties Atsakymas');
{
  const letterCount = (str: string, letter: string):number => {
    const searchLetterRegex = new RegExp(letter, 'g');
    const regexMatchesArr = [...str.matchAll(searchLetterRegex)];

    return regexMatchesArr.length;
  };
  console.log(letterCount('aaaaVVaaaa', 'a'));
}
console.groupEnd();

console.groupCollapsed('7.Užduoties Atsakymas');
{
  const removeLetter = (str: string, letter: string): string => str.replace(letter, '');
  console.log(removeLetter('labas', 'a'));
}
console.groupEnd();
console.groupCollapsed('8. Užduoties Atsakymas');
{
  const replaceLetter = (str: string, letter:string[]) :string => {
    const changedLetter = letter.reduce((prevStr, currStr) => prevStr.replaceAll(currStr, ''), str);
    return changedLetter;
  };
  console.log(replaceLetter('labas', ['a', 'l']));
}
console.groupEnd();

console.groupCollapsed('9. Užduoties Atsakymas');
{
  const editText = (str:string):string => {
    const upperCaseString = str.charAt(0).toUpperCase() + str.toLowerCase();

    return upperCaseString;
  };
  console.log(editText('asd ,  ASDASD  sdsa . asd'));
}
console.groupEnd();

const str = 'labas';
const reg = /a/g;
console.log([...str.matchAll(reg)]);
