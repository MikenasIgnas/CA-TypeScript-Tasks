console.group('Literal types - užduotys');
{
    type Berlin = 'Berlin'
    type Hamburg = 'Hamburg'
    type Munich = 'Munich'
    type Cologne = 'Cologne'
    type Stuttgart = 'Stuttgart'
    type LargestGermanCities = Berlin | Hamburg | Munich | Cologne | Stuttgart;

    type Akita = 'Akita';
    type Beagle = 'Beagle';
    type Bulldog = 'Bulldog';
    type Pug = 'Pug';
    type Dalmatian = 'Dalmatian';
    type DogBreed = Akita | Beagle | Bulldog | Pug | Dalmatian ;

    type Engine = 'Engine';
    type FuelTank = 'FuelTank';
    type Wheels = 'Wheels';
    type Heater = 'Heater';
    type Gearbox = 'Gearbox'
    type CarParts = Engine | FuelTank | Wheels | Heater | Gearbox

    const mapFunction = (arr:string[]) => {
      arr.map((el) => console.log([el]));
    };
    console.group('1. LITERAL-TYPES Užduoties Atsakymas');
    {
      const city1: LargestGermanCities = 'Berlin';
      const city2: LargestGermanCities = 'Hamburg';
      const city3: LargestGermanCities = 'Munich';
      const city4: LargestGermanCities = 'Cologne';
      const city5: LargestGermanCities = 'Stuttgart';
      const allCities: string[] = [city1, city2, city3, city4, city5];
      mapFunction(allCities);
    }
    console.groupEnd();

    console.group('2. LITERAL-TYPES Užduoties Atsakymas');
    {
      const dogBreed1: DogBreed = 'Akita';
      const dogBreed2: DogBreed = 'Beagle';
      const dogBreed3: DogBreed = 'Bulldog';
      const dogBreed4: DogBreed = 'Pug';
      const dogBreed5: DogBreed = 'Dalmatian';
      const allDogBreeds: string[] = [dogBreed1, dogBreed2, dogBreed3, dogBreed4, dogBreed5];
      mapFunction(allDogBreeds);
    }
    console.groupEnd();

    console.group('3. LITERAL-TYPES Užduoties Atsakymas');
    {
      const carPart1 : CarParts = 'Engine';
      const carPart2 : CarParts = 'FuelTank';
      const carPart3 : CarParts = 'Wheels';
      const carPart4 : CarParts = 'Heater';
      const carPart5 : CarParts = 'Gearbox';
      const carParts: string[] = [carPart1, carPart2, carPart3, carPart4, carPart5];
      mapFunction(carParts);
    }
    console.groupEnd();
}
console.groupEnd();
