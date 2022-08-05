"use strict";
const wordArray = ['one', 'two', 'three', 'four', 'five'];
const numberArray = [1, 2, -4, 3, 4, 5, -8, 6, 7, -5, 8, 9, 10, -15, 13, 23];
console.group('1. Užduoties Atsakymas');
{
    const lastElIndex = (array) => console.log(array.length - 1);
    lastElIndex(wordArray);
    lastElIndex(numberArray);
}
console.groupEnd();
console.group('2. Užduoties Atsakymas');
{
    const eachElemenIndex = (array) => {
        array.map((_, i) => console.log(i));
    };
    eachElemenIndex(wordArray);
    console.log('-------------------------------------');
    eachElemenIndex(numberArray);
}
console.groupEnd();
console.group('3. Užduoties Atsakymas');
{
    const eachElemenValue = (array) => {
        array.map((el) => console.log(el));
    };
    eachElemenValue(wordArray);
    console.log('-------------------------------------');
    eachElemenValue(numberArray);
}
console.groupEnd();
console.group('4. Užduoties Atsakymas');
{
    const eachElemenIndexAndValue = (array) => {
        array.map((el, i) => console.log(`[${i}] => ${el}`));
    };
    eachElemenIndexAndValue(wordArray);
    console.log('-------------------------------------');
    eachElemenIndexAndValue(numberArray);
}
console.groupEnd();
console.group('5. Užduoties Atsakymas');
{
    const reverseArray = (array) => {
        const reversed = array.reverse();
        console.log(reversed);
        reversed.map((el) => console.log(el));
    };
    reverseArray(wordArray);
    reverseArray(numberArray);
}
console.groupEnd();
console.group('6. Užduoties Atsakymas');
{
    const inLineIndex = (array) => {
        const reversed = array.reverse();
        console.log(reversed);
        const emptyArr = [];
        reversed.map((_, i) => {
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
    const inLineValue = (array) => {
        const emptyArr = [];
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
{
    const arrayPairs = (wordArr, numArr) => {
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
    const doubleValue = (numArr) => {
        console.log(numArr.map((el) => el * 2));
    };
    doubleValue(numberArray);
}
console.groupEnd();
console.group('10. Užduoties Atsakymas');
{
    const squareValue = (numArr) => {
        console.log(numArr.map((el) => el * el));
    };
    squareValue(numberArray);
}
console.groupEnd();
console.group('11.Užduoties Atsakymas');
{
    const indexMultiply = (numArr) => {
        console.log(numArr.map((el, i) => el * i));
    };
    indexMultiply(numberArray);
}
console.groupEnd();
console.group('12. Užduoties Atsakymas');
{
    const postiveEl = (numArr) => {
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
    const negativeEl = (numArr) => {
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
    const evenEl = (numArr) => {
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
    const oddEl = (numArr) => {
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
    const oddEl = (numArr) => {
        numArr.map((el) => {
            if (el < 0) {
                console.log(el * -1);
            }
            else {
                console.log(el);
            }
        });
    };
    oddEl(numberArray);
}
console.groupEnd();
//# sourceMappingURL=main.js.map