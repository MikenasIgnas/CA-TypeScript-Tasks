enum HeightUnits {
  CENTIMETRES = 'Cm',
  METRES = 'M',
  INCHES = 'In',
}
enum WeightUnits {
  KILOGRAMS = 'Kg',
  POUNDS = 'Lbs',
}
type PersonData = {
  name: string,
  surname: string,
  age: number,
  height: number,
  heightMeasureUnits : HeightUnits,
  weight: number,
  WeightMeasureUnits : WeightUnits,
}
class Person {
  name: string;

  surname: string;

  age: number;

  height!: number;

  static heightMeasureUnits: HeightUnits = HeightUnits.CENTIMETRES;

  weight!:number;

  static WeightMeasureUnits: WeightUnits = WeightUnits.KILOGRAMS;

  constructor({
    name, surname, age, height, heightMeasureUnits, weight, WeightMeasureUnits,
  }:PersonData) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.setHeight(height, heightMeasureUnits);
    this.setWeight(weight, WeightMeasureUnits);
  }

  /// 1. /// /////////////////////////////////////////
  setName(name:string):void {
    this.name = name;
  }

  setSurname(surname: string):void {
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  /// 2. ////////////////////////////////////////////

  setAge(age:number):void {
    if (age < 1 || age > 150) {
      console.log(`Cannot set Age, because ${age} is not Valid`);
      return;
    }
    if (age % 1 !== 0) {
      console.log(`Cannot set Age, because ${age} must be whole number`);
      return;
    }
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  /// 3. ////////////////////////////////////////////

  setHeight(height: number, measureUnits?: HeightUnits): void {
    switch (measureUnits) {
      case HeightUnits.CENTIMETRES: this.height = height; break;
      case HeightUnits.METRES: this.height = height * 100; break;
      case HeightUnits.INCHES: this.height = height * 2.54; break;
      default: this.height = height;
    }
  }

  getHeight(): number {
    if (this.height === undefined) return 0;

    let value;
    switch (Person.heightMeasureUnits) {
      case HeightUnits.CENTIMETRES: value = this.height; break;
      case HeightUnits.METRES: value = this.height / 100; break;
      case HeightUnits.INCHES: value = this.height / 2.54; break;
      default: value = this.height;
    }

    return Math.round(value * 100) / 100;
  }

  /// 7. ////////////////////////////////////////////

  setWeight(weight:number, measureUnits?: WeightUnits):void {
    switch (measureUnits) {
      case WeightUnits.KILOGRAMS: this.weight = weight; break;
      case WeightUnits.POUNDS: this.weight = weight / 2.20462262; break;
      default: this.weight = weight;
    }
  }

  getWeight(): number {
    if (this.weight === undefined) return 0;

    let value;
    switch (Person.WeightMeasureUnits) {
      case WeightUnits.KILOGRAMS: value = this.weight; break;
      case WeightUnits.POUNDS: value = this.weight * 2.20462262; break;
      default: value = this.weight;
    }

    return Math.round(value * 10) / 10;
  }

  /// 8. ////////////////////////////////////////////
  toString():string {
    return `Full name: ${this.getFullName()} \n Age: ${this.getAge()} \n Height: ${this.getHeight()} ${Person.heightMeasureUnits}. \n Weight: ${this.getWeight()} ${Person.WeightMeasureUnits}.`;
  }
}
const personObj = new Person({
  name: 'Vardauskas',
  surname: 'Pavardauskas',
  age: 23,
  height: 184,
  heightMeasureUnits: HeightUnits.CENTIMETRES,
  weight: 84,
  WeightMeasureUnits: WeightUnits.KILOGRAMS,

});
const personObj2 = new Person({
  name: 'Vardauskas',
  surname: 'Pavardauskas',
  age: 23,
  height: 184,
  heightMeasureUnits: HeightUnits.METRES,
  weight: 64,
  WeightMeasureUnits: WeightUnits.POUNDS,
});
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  personObj.setName('newName');
  personObj.setSurname('newSurname');
  console.log(personObj.getFullName());
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  personObj.setAge(0);
  console.log(personObj.getAge());
  personObj.setAge(1.3);
  console.log(personObj.getAge());

  personObj.setAge(24);
  console.log(personObj.getAge());
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
  personObj.setHeight(184, HeightUnits.CENTIMETRES);
  console.log(personObj.getHeight());
  personObj.setHeight(1.8, HeightUnits.METRES);
  console.log(personObj.getHeight());
  personObj.setHeight(57, HeightUnits.INCHES);
  console.log(personObj.getHeight());
  personObj.setHeight(100);
  console.log(personObj.getHeight());

  personObj2.setHeight(50, HeightUnits.INCHES);
  console.log(personObj2.getHeight());
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
  Person.heightMeasureUnits = HeightUnits.INCHES;
  Person.heightMeasureUnits = HeightUnits.METRES;
  Person.heightMeasureUnits = HeightUnits.CENTIMETRES;
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
  Person.heightMeasureUnits = HeightUnits.CENTIMETRES;
  console.log('Person Height', personObj.getHeight(), HeightUnits.CENTIMETRES);

  Person.heightMeasureUnits = HeightUnits.METRES;
  console.log('Person Height', personObj.getHeight(), HeightUnits.METRES);

  Person.heightMeasureUnits = HeightUnits.INCHES;
  console.log('Person Height', personObj.getHeight(), HeightUnits.INCHES);
}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
  personObj.setWeight(184, WeightUnits.KILOGRAMS);
  console.log(personObj.getWeight());
  personObj.setWeight(1.8, WeightUnits.POUNDS);
  console.log(personObj.getWeight());
  personObj.setWeight(97);
  console.log(personObj.getWeight());

  Person.WeightMeasureUnits = WeightUnits.POUNDS;
  console.log('Person Weight', personObj.getWeight(), WeightUnits.KILOGRAMS);
  
  Person.WeightMeasureUnits = WeightUnits.KILOGRAMS;
  console.log('Person Weight', personObj.getWeight(), WeightUnits.POUNDS);
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
console.log(personObj.toString());
console.log(personObj2.toString());
