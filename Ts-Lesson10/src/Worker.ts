/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { type PersonData } from './AbstractPerson.js';
import Employee from './AbstractEmployee.js';
import formatLine from './FormatLines.js';
import calcMonthWorkDays from './WorkDaysCalc.js';

export type WorkPersonData = PersonData & {
  hourPay: number,
  fullTimeEquivalent: number,
};

class WorkPerson extends Employee {
  private hourPay: number;

  private fullTimeEquivalent: number;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }: WorkPersonData) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  public calcPay = (): number => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;

  public override toString(): string {
    return `${this.getPersonInfo()
      + formatLine(`hour pay: ${this.hourPay}`, 1)
      + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
  }
}

export default WorkPerson;
