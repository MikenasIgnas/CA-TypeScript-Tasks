"use strict";
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ['a', 'b', 'c', 'd', 'e'];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const firstArrEl = (arr) => arr[0];
    console.log(firstArrEl(numberArray));
    console.log(firstArrEl(stringArray));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const lastArrEl = (arr) => arr[arr.length - 1];
    console.log(lastArrEl(numberArray));
    console.log(lastArrEl(stringArray));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const copyArr = (arr) => arr.map((arrCopy) => arrCopy);
    console.log(copyArr(numberArray));
    console.log(copyArr(stringArray));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const repeatValue = (value, count) => {
        const resultArr = [];
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
    const joinArr = (arr1, arr2) => [...arr1, ...arr2];
    console.log(joinArr(numberArray, stringArray));
    console.log(joinArr(numberArray, numberArray));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const funcObj = (anyVal) => {
        let value = anyVal;
        return {
            setValue: (newVal) => value = newVal,
            getValue: () => value,
        };
    };
    const testVal1 = 12;
    const testVal2 = 'yoyoyo';
    const testVal3 = [1, 2, 3, 4];
    const testVal4 = ['a', 'b', 'c'];
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
    const isWorker = (person) => person.avgMonthlyPay !== null;
    const isStudent = (student) => student.university !== null && student.course !== null;
    const solution = (people) => {
        const groupedPeople = people.reduce((prevGroupedPeople, person) => {
            const newGroupedPeople = { ...prevGroupedPeople };
            if (isWorker(person))
                newGroupedPeople.workers.push(person);
            if (isStudent(person))
                newGroupedPeople.students.push(person);
            else
                newGroupedPeople.people.push(person);
            return newGroupedPeople;
        }, {
            people: [],
            students: [],
            workers: [],
        });
        return groupedPeople;
    };
    const people = [
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
    const groupedPeople = solution(people);
    console.log(groupedPeople);
}
//# sourceMappingURL=main.js.map