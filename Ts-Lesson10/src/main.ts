/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import WorkPerson from './Worker.js';
import SelfEmployedPerson from './SelfEmployed.js';
import BuisnessLicencePerson from './BuisinessPerson.js';
import Employee from './AbstractEmployee.js';
import Job from './Job.js';

const Worker1 = new WorkPerson({
  id: '25169845878',
  name: 'Apsas',
  surname: 'Revestenis',
  hourPay: 25,
  fullTimeEquivalent: 1,
});
const Worker2 = new WorkPerson({
  id: '25167745878',
  name: 'Eventas',
  surname: 'Klikauskas',
  hourPay: 25,
  fullTimeEquivalent: 0.5,
});

const selfEmployed1 = new SelfEmployedPerson({
  id: '25169845878',
  name: 'Beribė',
  surname: 'Jūračka',
  hourPay: 25,
  hoursWorked: 10,
});
const selfEmployed2 = new SelfEmployedPerson({
  id: '25169145878',
  name: 'Fanalijus',
  surname: 'Analijus',
  hourPay: 10,
});

const BuisinessPerson1 = new BuisnessLicencePerson({
  id: '15169845878',
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

const BuisinessPerson2 = new BuisnessLicencePerson({
  id: '15169845878',
  name: 'Protenis',
  surname: 'Knistauskenis',
  jobs,
});

const employees: Employee[] = [
  Worker1,
  Worker2,
  selfEmployed1,
  selfEmployed2,
  BuisinessPerson1,
  BuisinessPerson2,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
