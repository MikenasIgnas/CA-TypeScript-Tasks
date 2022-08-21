/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { type PersonData } from './AbstractPerson.js';
import Employee from './AbstractEmployee.js';
import formatLine from './FormatLines.js';
import Job from './Job.js';

export type BuisnessLicencePersonProps = PersonData & {
  jobs?: Job[],
};

class BuisnessLicencePerson extends Employee {
  private jobs: Job[];

  constructor({ jobs = [], ...personProps }: BuisnessLicencePersonProps) {
    super(personProps);
    this.jobs = jobs;
  }

  public calcPay = (): number => {
    const unpayedFinishedJobs = this.jobs.filter((job) => job.isFinished() && !job.isPayed());
    const calculatedPay = unpayedFinishedJobs.reduce((sum, job) => sum + job.getPay(), 0);
    unpayedFinishedJobs.forEach((job) => job.setJobPayed());

    return calculatedPay;
  };

  public override toString(): string {
    const { jobs } = this;

    let result = this.getPersonInfo() + formatLine(`jobs:${jobs.length === 0 ? ' nėra darbų' : ''}`, 1);
    if (this.jobs.length > 0) {
      result += jobs.map((job) => `${job.toString()}`).join('\n');
    }

    return result;
  }
}

export default BuisnessLicencePerson;
