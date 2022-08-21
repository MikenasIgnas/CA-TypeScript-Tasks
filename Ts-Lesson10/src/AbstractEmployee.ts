/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Person from './AbstractPerson.js';

abstract class Employee extends Person {
    public abstract calcPay():number
}

export default Employee;
