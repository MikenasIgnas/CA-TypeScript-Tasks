import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import CarsCollection from '../helpers/cars-collection';
import StringifyObjectProps from '../helpers/stringify-object';
import Table from './table';

class App {
    private htmlElement: HTMLElement;

    private carsCollection: CarsCollection;

    constructor(selector: string) {
      const foundElement = document.querySelector<HTMLElement>(selector);
      this.carsCollection = new CarsCollection(cars, brands, models);
      if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

      this.htmlElement = foundElement;
    }

    initialize = (): void => {
      const table = new Table({
        title: 'All Cars',
        columns: {
          id: 'id',
          brand: 'Brand',
          model: 'Model',
          price: 'Price',
          year: 'Year',
        },
        rowsData: this.carsCollection.all.map(StringifyObjectProps),
      });
      const container = document.createElement('div');
      container.className = 'container my-5';
      container.appendChild(table.htmlElement);
      this.htmlElement.append(container);
    };
  }

  export default App;
