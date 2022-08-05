console.group('Union operators - užduotys');
{
    type Accommodation = {
        type: 'House' | 'Flat'
    }

    type Car = {
        transmission: 'Automatic' | 'Manual'
    }

    type Array = Car[] | Accommodation[]

    console.group('1. UNION OPERATORS Užduoties Atsakymas');
    {
      const accommodation1: Accommodation = {
        type: 'Flat',
      };
      const accommodation2: Accommodation = {
        type: 'House',
      };
      console.log(accommodation1, accommodation2);
    }
    console.groupEnd();

    console.group('2. UNION OPERATORS Užduoties Atsakymas');
    {
      const car1: Car = {
        transmission: 'Automatic',
      };
      const car2: Car = {
        transmission: 'Manual',
      };
      console.log(car1, car2);
    }
    console.groupEnd();

    console.group('3. UNION OPERATORS Užduoties Atsakymas');
    {
      const arr1: Array = [{
        type: 'House',
      }, {
        type: 'Flat',
      }];

      const arr2: Array = [{
        transmission: 'Manual',
      }, {
        transmission: 'Automatic',
      }];
      console.log(arr1, arr2);
    }
    console.groupEnd();
}
console.groupEnd();
