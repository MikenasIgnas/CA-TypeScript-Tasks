console.group('Tuples - užduotys');
{
  type NameAge = [string, number]

  type Dog = {
    dogName: string;
    dogAge: number;
    dogBreed: string;
}

  type Person = {
    personName: string,
    personAge: number,
  };

  type PersonAndDog = [Person, Dog];
  type PointTuple = [number, number];
  type TriangleTuple = [PointTuple, PointTuple, PointTuple];

  console.group('1. TUPLES Užduoties Atsakymas');
  {
    const person1 : NameAge = ['Tom', 23];
    const person2 : NameAge = ['Bob', 18];
    const person3 : NameAge = ['John', 24];
    console.log(person1, person2, person3);
  }
  console.groupEnd();

  console.group('2. TUPLES Užduoties Atsakymas');
  {
    const ownerAndDog: PersonAndDog = [{
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
    const triangle1: TriangleTuple = [[-2, 1], [2, 2], [3, 1]];
    const rightTriangle: TriangleTuple = [[0, 0], [4, 0], [4, 3]];

    console.log({
      triangle1,
      rightTriangle,
    });
  }
  console.groupEnd();
}
console.groupEnd();
