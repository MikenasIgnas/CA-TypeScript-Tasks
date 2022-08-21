/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { type PersonData } from './AbstractPerson.js';
import Employee from './AbstractEmployee.js';
import formatLine from './FormatLines.js';

export type SelfEmployedPersonData = PersonData & {
  hourPay: number,
  hoursWorked?: number,
};

class SelfEmployedPerson extends Employee {
  private hourPay: number;

  private hoursWorked: number;

  constructor({
    hourPay,
    hoursWorked = 0,
    ...personProps
  }: SelfEmployedPersonData) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = hoursWorked;
  }

  public calcPay = (): number => this.hourPay * this.hoursWorked;

  public override toString(): string {
    return `${this.getPersonInfo()
      + formatLine(`hour pay: ${this.hourPay}`, 1)
      + formatLine(`hours worked: ${this.hoursWorked}`, 1)}\n`;
  }
}

export default SelfEmployedPerson;
