"use strict";
console.group('Užduotys');
{
    console.group('1. Užduoties Atsakymas');
    {
        const numbers2 = [1, -8, -6, 7, 5, 1];
        const addPositiveNumbers = (arr) => {
            const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
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
        const getFirstLetters = (arr) => {
            const firstLetter = [];
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
        const multiplyArr = (arr) => {
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
//# sourceMappingURL=main.js.map