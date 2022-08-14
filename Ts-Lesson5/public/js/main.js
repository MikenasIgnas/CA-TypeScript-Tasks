"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const getFullNames = ({ name, surname, married }) => ({ name, surname, married });
    const fullNames = people.map(getFullNames);
    console.log(fullNames);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const getIncome = ({ sex, income }) => ({ sex, income });
    const incomeResults = people.map(getIncome);
    console.log(incomeResults);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const getFullNamesAndGender = ({ name, surname, sex }) => ({ name, surname, sex });
    const result = people.map(getFullNamesAndGender);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const getMales = ({ sex }) => sex === 'male';
    const allMales = people.filter(getMales);
    console.log(allMales);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const getFemales = ({ sex }) => sex === 'female';
    const allFemales = people.filter(getFemales);
    console.log(allFemales);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const carOwners = ({ hasCar }) => hasCar === true;
    const hasCar = people.filter(carOwners);
    const owners = ({ name, surname, hasCar }) => ({ name, surname, hasCar });
    const onlyCarOwners = hasCar.map(owners);
    console.log(onlyCarOwners);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const findMarriedPeople = ({ married }) => married === true;
    const filterMarriedPeople = people.filter(findMarriedPeople);
    const getMarriedPeople = ({ name, surname, married }) => ({ name, surname, married });
    const allMarriedPeople = filterMarriedPeople.map(getMarriedPeople);
    console.log(allMarriedPeople);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const MalecarOwners = ({ hasCar, sex }) => hasCar === true && sex === 'male';
    const FemalecarOwners = ({ hasCar, sex }) => hasCar === true && sex === 'female';
    const malesHasCar = people.filter(MalecarOwners);
    const femalesHasCar = people.filter(FemalecarOwners);
    const owners = ({ name, surname, hasCar, sex, }) => ({
        name, surname, hasCar, sex,
    });
    const onlyMaleCarOwners = malesHasCar.map(owners);
    const onlyFemaleCarOwners = femalesHasCar.map(owners);
    console.log(`Males:${onlyMaleCarOwners.length}`, `Females:${onlyFemaleCarOwners.length}`);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToSalary = ({ income, ...person }) => {
        const result = { ...person };
        if (income)
            result.salary = income;
        return result;
    };
    const salaryConvert = people.map(convertToSalary);
    console.log(salaryConvert);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const newPersonValues = ({ name, surname, sex, ...restPerson }) => restPerson;
    const newPeople = people.map(newPersonValues);
    console.log(newPeople);
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const fullNames = ({ name, surname, ...rest }) => ({
        ...rest,
        fulname: `${name} ${surname}`,
    });
    const peopleFullNames = people.map(fullNames);
    console.log(peopleFullNames);
}
console.groupEnd();
//# sourceMappingURL=main.js.map