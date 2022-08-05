"use strict";
console.group('Union operators - užduotys');
{
    console.group('1. UNION OPERATORS Užduoties Atsakymas');
    {
        const accommodation1 = {
            type: 'Flat',
        };
        const accommodation2 = {
            type: 'House',
        };
        console.log(accommodation1, accommodation2);
    }
    console.groupEnd();
    console.group('2. UNION OPERATORS Užduoties Atsakymas');
    {
        const car1 = {
            transmission: 'Automatic',
        };
        const car2 = {
            transmission: 'Manual',
        };
        console.log(car1, car2);
    }
    console.groupEnd();
    console.group('3. UNION OPERATORS Užduoties Atsakymas');
    {
        const arr1 = [{
                type: 'House',
            }, {
                type: 'Flat',
            }];
        const arr2 = [{
                transmission: 'Manual',
            }, {
                transmission: 'Automatic',
            }];
        console.log(arr1, arr2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-Operators.js.map