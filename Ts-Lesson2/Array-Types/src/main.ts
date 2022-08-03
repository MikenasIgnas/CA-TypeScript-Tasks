type Person = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number,
  weight?: number,
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const names: string[] = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people: Person[] = [{
  id: '39304075689',
  name: 'Verundijus',
  surname: 'Bauda',
  age: 51,
  height: 1.65,
  weight: 55,
}, {
  id: '39304075689',
  name: 'Ryja',
  surname: 'Žaneirytė',
  age: 41,
  height: 1.65,
  weight: 55,
}, {
  id: '39304075689',
  name: 'Brudas',
  surname: 'Veilokas',
  age: 11,
  height: 1.45,
  weight: 45,
}];

type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

const sumNumbers = (nums: Array<number>): number => {
  const arrNumberSum = (sum: number, num: number): number => sum + num;

  return nums.reduce(arrNumberSum, 0);
};

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

console.group('Panaudojimo pavyzdžiai:');
{
  console.group('printStrings');
  {
    printStrings(names);
  }
  console.groupEnd();

  console.group('sumNumbers');
  {
    const result: number = sumNumbers(numbers);
    console.log({
      numbers,
      result,
    });
  }
  console.groupEnd();

  console.group('createPeopleArray');
  {
    const couple: Array<Person> = createPeopleArray(people[0], people[1]);
    console.log(couple);
  }
  console.groupEnd();
}
console.groupEnd();

console.group('Užduotys');
{
  console.group('1. Užduoties Atsakymas');
  {
    const numbers2: number[] = [1, -8, -6, 7, 5, 1];

    const addPositiveNumbers = (arr:number[]) => {
      const positiveNumberReducer = (sum:number, num:number) => (num > 0 ? sum + num : sum);

      return arr.reduce(positiveNumberReducer, 0);
    };
    console.log({
      numbers2,
      sumOfPositiveNumbers: addPositiveNumbers(numbers2),
    });
  }
  console.groupEnd();

  console.group('2. Užduoties Atsakymas');
  {
    const getFirstLetters = (arr: string[]) => {
      const firstLetter:String[] = [];
      arr.map((word) => {
        firstLetter.push(word.charAt(0));
      });
      return firstLetter.toString().replaceAll(',', '');
    };
    console.log(getFirstLetters(['Lietuviškas', 'Nepriklausomas', 'Kanalas']));
    console.log(getFirstLetters(['Lietuvos', 'Respublikos', 'Televizija']));
    console.log(getFirstLetters(['Loughing', 'Out', 'Loud']));
  }
  console.groupEnd();

  console.group('3. Užduoties Atsakymas');
  {
    const multiplyArr = (arr:number[]) => {
      const nums = arr.reduce((prevNum, currNum) => prevNum * currNum);
      return nums;
    };
    console.log(multiplyArr([1, 7, 8]));
    console.log(multiplyArr([98, 74, 5, 0]));
    console.log(multiplyArr([17, 10, 5]));
    console.groupEnd();
  }
  console.groupEnd();
}
