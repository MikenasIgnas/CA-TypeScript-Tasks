type peronData = {
    name: string,
    surname: string,
    age: number,
    height: number,
    weight: number,
    heightUnits?: HeightUnits,
    weightUnits?: WeightUnits,
}
class Person {
  name:string;

  surname: string;

  age!: number;

  constructor({
    name, surname, age,
  }:peronData) {
    this.name = name;
    this.surname = surname;
    this.setAge(age);
    // this.setHeight(height, heightUnits);
    // this.setWeight(weight, weightUnits);
  }

  set Name(name:string) {
    this.name = name;
  }

  set Surname(surname:string) {
    this.surname = surname;
  }

  get FullName() {
    return `${this.name} ${this.surname}`;
  }

  setAge(age: number): void {
    if (age < 1 || age > 150) {
      console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be in range [1; 150].`);
      return;
    }
    if (age % 1 !== 0) {
      console.error(`age value '${age}' for method Person.setAge in incorrect.\n\t Value must be an integer.`);
      return;
    }
    this.age = age;
  }

  getAge() {
    if (this.age < 1 || this.age > 150) {
      console.error(`age value '${this.age}' for method Person.setAge in incorrect.\n\t Value must be in range [1; 150].`);
    } else {
      return this.age;
    }

    if (this.age % 1 !== 0) {
      console.error(`age value '${this.age}' for method Person.setAge in incorrect.\n\t Value must be an integer.`);
    } else {
      return this.age;
    }
  }
}
const person1 = new Person({
  name: 'Serbentautas',
  surname: 'Bordiūras',
  age: 20,
  height: 180,
  weight: 80,
});

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  person1.Name = 'Ignas';
  person1.Surname = 'Mikenas';
  console.log(person1.FullName);
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  person1.setAge(-1);
  console.log(person1.getAge());
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{

}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{

}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{

}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{

}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
