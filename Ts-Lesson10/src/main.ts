/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import WorkPerson from './Worker.js';
import SelfEmployedPerson from './SelfEmployed.js';
import BuisnessLicencePerson from './BuisinessPerson.js';
import Employee from './AbstractEmployee.js';
import Job from './Job.js';

const Worker1 = new WorkPerson({
  id: '1',
  name: 'Apsas',
  surname: 'Revestenis',
  hourPay: 25,
  fullTimeEquivalent: 1,
});


const selfEmployed1 = new SelfEmployedPerson({
  id: '3',
  name: 'Beribė',
  surname: 'Jūračka',
  hourPay: 25,
  hoursWorked: 10,
});

const BuisinessPerson1 = new BuisnessLicencePerson({
  id: '5',
  name: 'Plunksytė',
  surname: 'Krupštytė',
});

const jobs = [
  new Job('Facebook adds', 200),
  new Job('Google adds', 700),
  new Job('Twitter adds', 400),
];

jobs[0].completeJob();
jobs[1].completeJob();
jobs[2].completeJob();

const employees: Employee[] = [
  Worker1,
  selfEmployed1,
  BuisinessPerson1,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.map((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.map((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
