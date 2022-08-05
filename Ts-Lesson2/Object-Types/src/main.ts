/* eslint-disable no-unused-vars */
type Person = {
    id: string,
    name: string,
    surname: string,
    age: number,
    height?: number,
    weight?: number,
  };

const person1: Person = {
  id: '39304075689',
  name: 'Jonas',
  surname: 'Jonauas',
  age: 51,
};
const person2: Person = {
  id: '39304075689',
  name: 'Toma',
  surname: 'Tomauskyte',
  age: 41,
  height: 1.65,
  weight: 55,
};

const person3: Person = {
  id: '39304075689',
  name: 'Andrius',
  surname: 'Andriauskas',
  age: 11,
  height: 1.45,
  weight: 45,
};

type PersonData = (person: Person) => string | number;
const createFullname: PersonData = ({ name, surname }) => `${name} ${surname}`;

console.group('1. Užduoties Atsakymas');
{ const legalAge:number = 18;
  const isAdult : PersonData = ({ age }) => (age >= legalAge ? 'Legal Age' : 'Not Legal Age');

  console.log({
    [createFullname(person1)]: isAdult(person1),
    [createFullname(person2)]: isAdult(person2),
    [createFullname(person3)]: isAdult(person3),
  });
}
console.groupEnd();

console.group('2.Užduoties Atsakymas');
{
  const isFullyDescribedPerson = (person:Person) => {
    if (person.height && person.weight) {
      return 'Contains Height/Weight';
    }
    return 'Doesnt Contain Height/Weight';
  };

  console.log({
    [createFullname(person1)]: isFullyDescribedPerson(person1),
    [createFullname(person2)]: isFullyDescribedPerson(person2),
    [createFullname(person3)]: isFullyDescribedPerson(person3),
  });
}
console.groupEnd();

console.group('3.Užduoties Atsakymas');
{
  const createInitials = (person:Person) => `${`${person.name[0]}.${person.surname[0]}.`}`;
  console.log({
    [createFullname(person1)]: createInitials(person1),
    [createFullname(person2)]: createInitials(person2),
    [createFullname(person3)]: createInitials(person3),
  });
}
console.groupEnd();
