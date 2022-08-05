"use strict";
const height = 175.0;
const weight = 78.2;
const fullname = 'Vardas';
const surname = 'Pavarde';
const age = 19;
const wife = null;
const innerAnimal = undefined;
console.log(height, weight, fullname, surname, age, wife, innerAnimal);
console.group('1. Užduoties Atsakymas');
{
    const title = 'Vermontas';
    const subTitle = 'Kavinė - Baras';
    const peopleCount = 5;
    const maxPeopleCount = 26;
    const isOpen = true;
    const openTime = '12:00';
    const closeTime = '02:00';
    const security = null;
    console.log({
        title: [title, typeof title],
        subTitle: [subTitle, typeof subTitle],
        peopleCount: [peopleCount, typeof peopleCount],
        maxPeopleCount: [maxPeopleCount, typeof maxPeopleCount],
        isOpen: [isOpen, typeof isOpen],
        openTime: [openTime, typeof openTime],
        closeTime: [closeTime, typeof closeTime],
        security: [security, typeof security],
    });
}
console.groupEnd();
//# sourceMappingURL=primitive-types.js.map