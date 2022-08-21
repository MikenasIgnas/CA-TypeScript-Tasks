class Person {
    id;
    name;
    surname;
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo = () => `${this.id}${this.name}${this.surname}`;
}
export default Person;
//# sourceMappingURL=AbstractPerson.js.map