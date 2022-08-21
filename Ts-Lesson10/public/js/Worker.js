import Employee from './AbstractEmployee.js';
import formatLine from './FormatLines.js';
import calcMonthWorkDays from './WorkDaysCalc.js';
class WorkPerson extends Employee {
    hourPay;
    fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay = () => calcMonthWorkDays() * this.hourPay * this.fullTimeEquivalent * 8;
    toString() {
        return `${this.getPersonInfo()
            + formatLine(`hour pay: ${this.hourPay}`, 1)
            + formatLine(`full time equivalent: ${this.fullTimeEquivalent}`, 1)}\n`;
    }
}
export default WorkPerson;
//# sourceMappingURL=Worker.js.map