// import brands from '../data/brands';
// import cars from '../data/cars';
// import models from '../data/models';
// import CarsCollection from '../helpers/cars-collection';

// class SelectField {
//     public htmlElement: HTMLElement;

//     constructor() {}

//     public makeSelector = () => {
//         const selector = new CarsCollection(cars, brands, models);

//         const htmlEl = document.getElementById('root');
//         const selectEl = document.createElement('select');

//         selector.brand.map((el) => {
//             const optionEl = document.createElement('option');
//             optionEl.textContent = el.title;
//             selectEl.prepend(optionEl);
//         });
//         htmlEl?.prepend(selectEl);

//         selectEl.addEventListener('change', () => {
//             app.update(selectEl.value);
//             // console.log(selectEl.value);
//         });
//     };
// }

// export default SelectField;
