import App from './components/app';
// import CarsCollection from './helpers/cars-collection';
// import brands from './data/brands';
// import cars from './data/cars';
// import model from './data/models';

const app = new App('#root');
app.initialize();

// const carCollection = new CarsCollection(cars, brands, model);
// const tableBody = document.getElementById('tBody') as HTMLTableSectionElement;
// console.table(carCollection.all);
// carCollection.all.map((el, i) => {
//     const tr = document.createElement('tr');
//     const th = document.createElement('th');
//     const tdId = document.createElement('td');
//     const tdTitle = document.createElement('td');
//     const tdModel = document.createElement('td');
//     const tdPrice = document.createElement('td');
//     const tdYear = document.createElement('td');
//     th.scope = 'row';
//     th.textContent = `${i}`;
//     tdId.textContent = el.id;
//     tdTitle.textContent = el.brand;
//     tdModel.textContent = el.model;
//     tdPrice.textContent = `${el.price}`;
//     tdYear.textContent = `${el.year}`;
//     tr.append(th, tdId, tdTitle, tdModel, tdPrice, tdYear);
//     tableBody.append(tr);
// });

// const person = {
//     name: 'ignas',
//     age: 25,
// };

// const { age } = person;
// console.log(age);
