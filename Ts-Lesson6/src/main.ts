/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
type PrimitiveType = string | number | boolean;
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ['a', 'b', 'c', 'd', 'e'];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const firstArrEl = <T> (arr:T[]):T => arr[0];
  console.log(firstArrEl(numberArray));
  console.log(firstArrEl(stringArray));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const lastArrEl = <T> (arr:T[]):T => arr[arr.length - 1];
  console.log(lastArrEl(numberArray));
  console.log(lastArrEl(stringArray));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const copyArr = <T extends PrimitiveType> (arr:T[]):T[] => arr.map((arrCopy) => arrCopy);
  console.log(copyArr(numberArray));
  console.log(copyArr(stringArray));
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  const repeatValue = <T extends PrimitiveType> (value:T, count:number):T[] => {
    const resultArr:T[] = [];
    for (let i = 0; i < count; i++) {
      resultArr.push(value);
    }
    return resultArr;
  };

  console.log(repeatValue('aa', 7));
  console.log(repeatValue(12, 5));
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  const joinArr = <T> (arr1:T[], arr2:T[]):T[] => [...arr1, ...arr2];

  console.log(joinArr(numberArray, stringArray));
  console.log(joinArr(numberArray, numberArray));
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type ObjectValues<T> = {
    setValue: (newVal) => void;
    getValue: () => T
  }
  const funcObj = <T> (anyVal:T):ObjectValues<T> => {
    let value:T = anyVal;

    return {
      setValue: (newVal) => value = newVal,
      getValue: () => value,
    };
  };
  const testVal1: number = 12;
  const testVal2: string = 'yoyoyo';
  const testVal3: Array<number> = [1, 2, 3, 4];
  const testVal4: Array<string> = ['a', 'b', 'c'];

  const setObjValue1 = funcObj(testVal1);
  const setObjValue2 = funcObj(testVal2);
  const setObjValue3 = funcObj(testVal3);
  const setObjValue4 = funcObj(testVal4);
  console.log(setObjValue1.getValue());
  console.log(setObjValue2.getValue());
  console.log(setObjValue3.getValue());
  console.log(setObjValue4.getValue());
}
console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };
  type GroupedPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };
  const isWorker = (person: Person): person is Worker => (person as Worker).avgMonthlyPay !== null;
  const isStudent = (student: Person): student is Student => (student as Student).university !== null && (student as Student).course !== null;

  const filterPersons = (people: Person[]): GroupedPeople => {
    const groupedPeople = people.reduce<GroupedPeople>((prevGroupedPeople, person) => {
      const newGroupedPeople = { ...prevGroupedPeople };

      if (isWorker(person)) newGroupedPeople.workers.push(person);
      if (isStudent(person)) newGroupedPeople.students.push(person);
      else newGroupedPeople.people.push(person);

      return newGroupedPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });

    return groupedPeople;
  };
  const people: (Person | Student | Worker)[] = [
    {
      name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2,
    },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    {
      name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2,
    },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    {
      name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1,
    },
  ];
  const groupedPeople = filterPersons(people);

  console.log(groupedPeople);
}
