export interface PersonData {
    id:string,
    name:string,
    surname:string,
}
abstract class Person {
  protected id:string;

  protected name:string;

  protected surname: string;

  constructor({ id, name, surname }:PersonData) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }

    public abstract toString(): string

    public getPersonInfo = ():string => `${this.id}${this.name}${this.surname}`;
}

export default Person;
