"use strict";
console.group('Tuples - užduotys');
{
    console.group('1. TUPLES Užduoties Atsakymas');
    {
        const person1 = ['Tom', 23];
        const person2 = ['Bob', 18];
        const person3 = ['John', 24];
        console.log(person1, person2, person3);
    }
    console.groupEnd();
    console.group('2. TUPLES Užduoties Atsakymas');
    {
        const ownerAndDog = [{
                personName: 'Bob',
                personAge: 12,
            }, {
                dogName: 'Brisius',
                dogAge: 2,
                dogBreed: 'tax',
            }];
        console.log(ownerAndDog);
    }
    console.groupEnd();
    console.group('3. TUPLES Užduoties Atsakymas');
    {
        const triangle1 = [[-2, 1], [2, 2], [3, 1]];
        const rightTriangle = [[0, 0], [4, 0], [4, 3]];
        console.log({
            triangle1,
            rightTriangle,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map