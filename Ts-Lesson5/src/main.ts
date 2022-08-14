/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type NameAndSurname = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person['married']
  }
  const getFullNames = ({ name, surname, married }:Person):NameAndSurname => ({ name, surname, married });
  const fullNames = people.map(getFullNames);
  console.log(fullNames);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  type Income = {
    sex: Person['sex'],
    income: Person['income'],
  }
  const getIncome = ({ sex, income }:Person):Income => ({ sex, income });
  const incomeResults = people.map(getIncome);
  console.log(incomeResults);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type FullNameAndGender = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex']
  }
  const getFullNamesAndGender = ({ name, surname, sex }:Person):FullNameAndGender => ({ name, surname, sex });
  const result = people.map(getFullNamesAndGender);
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  const getMales = ({ sex }:Person):boolean => sex === 'male';
  const allMales = people.filter(getMales);
  console.log(allMales);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  const getFemales = ({ sex }:Person):boolean => sex === 'female';
  const allFemales = people.filter(getFemales);
  console.log(allFemales);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type personCars = {
    name: Person['name'],
    surname: Person['surname'],
    hasCar: Person['hasCar']
  }
  const carOwners = ({ hasCar }:Person):boolean => hasCar === true;
  const hasCar = people.filter(carOwners);
  const owners = ({ name, surname, hasCar }:Person):personCars => ({ name, surname, hasCar });
  const onlyCarOwners = hasCar.map(owners);
  console.log(onlyCarOwners);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type marriedPeople = {
    name: Person['name']
    surname: Person['surname'],
    married: Person['married'],
  }
  const findMarriedPeople = ({ married }:Person):boolean => married === true;
  const filterMarriedPeople = people.filter(findMarriedPeople);
  const getMarriedPeople = ({ name, surname, married }:Person):marriedPeople => ({ name, surname, married });
  const allMarriedPeople = filterMarriedPeople.map(getMarriedPeople);
  console.log(allMarriedPeople);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type personCarsByGender = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex']
    hasCar: Person['hasCar']
  }
  const MalecarOwners = ({ hasCar, sex }:Person):boolean => hasCar === true && sex === 'male';
  const FemalecarOwners = ({ hasCar, sex }:Person):boolean => hasCar === true && sex === 'female';
  const malesHasCar = people.filter(MalecarOwners);
  const femalesHasCar = people.filter(FemalecarOwners);
  const owners = ({
    name, surname, hasCar, sex,
  }:Person):personCarsByGender => ({
    name, surname, hasCar, sex,
  });
  const onlyMaleCarOwners = malesHasCar.map(owners);
  const onlyFemaleCarOwners = femalesHasCar.map(owners);
  console.log(`Males:${onlyMaleCarOwners.length}`, `Females:${onlyFemaleCarOwners.length}`);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type incomeToSalary = Omit<Person, 'income'> & {
    salary?: Person['income']
  }
  const convertToSalary = ({ income, ...person }:Person):incomeToSalary => {
    const result:incomeToSalary = { ...person };
    if (income) result.salary = income;
    return result;
  };
  const salaryConvert: incomeToSalary[] = people.map(convertToSalary);
  console.log(salaryConvert);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type RemoveValues = Omit<Person, 'name'|'surname'|'sex'>

  const newPersonValues = ({
    name, surname, sex, ...restPerson
  }:Person):RemoveValues => restPerson;
  const newPeople: RemoveValues[] = people.map(newPersonValues);
  console.log(newPeople);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type changeToFullName = Omit<Person, 'name'| 'surname'>&{
    fulname: string;
  }
  const fullNames = ({ name, surname, ...rest }:Person):changeToFullName => ({
    ...rest,
    fulname: `${name} ${surname}`,
  });
  const peopleFullNames:changeToFullName[] = people.map(fullNames);
  console.log(peopleFullNames);
}
console.groupEnd();
