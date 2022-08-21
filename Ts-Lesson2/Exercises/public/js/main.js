"use strict";
console.group('1. Užduoties Atsakymas');
{
    const drinksPriceAsc = (drink1, drink2) => drink1.price - drink2.price;
    const sortedPrice = (drinks) => [...drinks].sort(drinksPriceAsc);
    const drinks = [
        { name: 'juice', price: 1.5 },
        { name: 'water', price: 1 },
        { name: 'cola', price: 2 },
    ];
    const sortedDrinks = sortedPrice(drinks);
    console.log({
        sortedDrinks,
    });
}
console.groupEnd();
console.group('2.  Užduoties Atsakymas');
{
    const solution = (itemObj, itemName, itemValue) => ({
        ...itemObj,
        [itemName]: itemValue,
    });
    const solutionArgs1 = [{}, 'Brutus', 300];
    const solutionArgs2 = [{ piano: 500 }, 'Brutus', 400];
    const solutionArgs3 = [{ piano: 500, stereo: 300 }, 'Caligula', 440];
    const result1 = solution(...solutionArgs1);
    const result2 = solution(...solutionArgs2);
    const result3 = solution(...solutionArgs3);
    console.log(solutionArgs1, result1);
    console.log(solutionArgs2, result2);
    console.log(solutionArgs3, result3);
}
console.groupEnd();
//# sourceMappingURL=main.js.map