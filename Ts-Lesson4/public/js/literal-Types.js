"use strict";
console.group('Literal types - užduotys');
{
    const mapFunction = (arr) => {
        arr.map((el) => console.log([el]));
    };
    console.group('1. LITERAL-TYPES Užduoties Atsakymas');
    {
        const city1 = 'Berlin';
        const city2 = 'Hamburg';
        const city3 = 'Munich';
        const city4 = 'Cologne';
        const city5 = 'Stuttgart';
        const allCities = [city1, city2, city3, city4, city5];
        mapFunction(allCities);
    }
    console.groupEnd();
    console.group('2. LITERAL-TYPES Užduoties Atsakymas');
    {
        const dogBreed1 = 'Akita';
        const dogBreed2 = 'Beagle';
        const dogBreed3 = 'Bulldog';
        const dogBreed4 = 'Pug';
        const dogBreed5 = 'Dalmatian';
        const allDogBreeds = [dogBreed1, dogBreed2, dogBreed3, dogBreed4, dogBreed5];
        mapFunction(allDogBreeds);
    }
    console.groupEnd();
    console.group('3. LITERAL-TYPES Užduoties Atsakymas');
    {
        const carPart1 = 'Engine';
        const carPart2 = 'FuelTank';
        const carPart3 = 'Wheels';
        const carPart4 = 'Heater';
        const carPart5 = 'Gearbox';
        const carParts = [carPart1, carPart2, carPart3, carPart4, carPart5];
        mapFunction(carParts);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-Types.js.map