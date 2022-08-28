import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import CarsCollection from '../helpers/cars-collection';
import StringifyObjectProps from '../helpers/stringify-object';
import Table from './table';

type InitProps = {
  filterValue?: string
  createSelect?: boolean
};

class App {
    private htmlElement: HTMLElement;

    private carsCollection: CarsCollection;

    constructor(selector: string) {
      const foundElement = document.querySelector<HTMLElement>(selector);
      this.carsCollection = new CarsCollection(cars, brands, models);
      if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

      this.htmlElement = foundElement;
    }

    initialize = ({ filterValue, createSelect }: InitProps) => {
      const table = new Table({
        title: 'All Cars',
        columns: {
          id: 'id',
          brand: 'Brand',
          model: 'Model',
          price: 'Price',
          year: 'Year',
        },
        filterValue,
        rowsData: this.carsCollection.all.map(StringifyObjectProps),
      });
      const container = document.createElement('div');
      container.id = 'carContainer';
      container.className = 'container my-5';
      container.appendChild(table.htmlElement);
      this.htmlElement.append(container);
      if (createSelect) {
        this.makeSelector(this.update);
      }
    };

    update = (filterValue: string) => {
      const item = document.getElementById('carContainer');
      if (item) {
        item.remove();
        this.initialize({ filterValue });
      }
    };

    makeSelector = (update: (a: string) => void) => {
      const selector = new CarsCollection(cars, brands, models);
      const selectEl = document.createElement('select');
      const defaultOption = document.createElement('option');
      selectEl.style.display = 'flex';
      selectEl.style.margin = ' auto';
      selectEl.style.marginTop = ' 30px';
      selectEl.style.width = '85%';
      selectEl.style.height = '30px';
      defaultOption.textContent = 'All Cars';
      selector.brand.map((carBrand) => {
        const optionEl = document.createElement('option');
        optionEl.textContent = carBrand.title;
        selectEl.prepend(defaultOption, optionEl);
      });
      this.htmlElement.prepend(selectEl);

      selectEl.addEventListener('change', () => {
        update(selectEl.value);
        const tableTitle = document.getElementById('tableTitle') as HTMLDivElement;
        if (selectEl.value !== 'All Cars') {
          tableTitle.innerHTML = `<span>All <span style='color:orange'>${selectEl.value}</span> Cars</span>`;
        }
      });
  };
  }

  export default App;
