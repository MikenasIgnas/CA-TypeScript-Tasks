"use strict";
console.log('asdasds');
const person1 = {
    id: '39304075689',
    name: 'Verundijus',
    surname: 'Bauda',
    age: 51,
};
const person2 = {
    id: '39304075689',
    name: 'Ryja',
    surname: 'Žaneirytė',
    age: 41,
    height: 1.65,
    weight: 55,
};
const person3 = {
    id: '39304075689',
    name: 'Brudas',
    surname: 'Veilokas',
    age: 11,
    height: 1.45,
    weight: 45,
};
const createFullname = ({ name, surname }) => `${name} ${surname}`;
const printCouple = (p1, p2) => {
    const p1Fullname = createFullname(p1);
    const p2Fullname = createFullname(p2);
    console.log(`${p1Fullname} + ${p2Fullname} = ❤`);
};
printCouple(person1, person2);
console.group('1. Užduoties Atsakymas');
{
    const legalAge = 18;
    const isAdult = ({ age }) => (age >= legalAge ? 'Legal Age' : 'Not Legal Age');
    console.log({
        [createFullname(person1)]: isAdult(person1),
        [createFullname(person2)]: isAdult(person2),
        [createFullname(person3)]: isAdult(person3),
    });
}
console.groupEnd();
console.group('2.Užduoties Atsakymas');
{
    const isFullyDescribedPerson = (person) => {
        if (person.height && person.weight) {
            console.log('Contains Height/Weight');
        }
        else {
            console.log('Doesnt Contain Height/Weight');
        }
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
    const createInitials = (person) => {
        console.log(`${`${person.name[0]}.${person.surname[0]}.`}`);
    };
    console.log({
        [createFullname(person1)]: createInitials(person1),
        [createFullname(person2)]: createInitials(person2),
        [createFullname(person3)]: createInitials(person3),
    });
}
console.groupEnd();
//# sourceMappingURL=main.js.map