import brands from '../data/brands';
import cars from '../data/cars';
import CarsCollection from '../helpers/cars-collection';
import models from '../data/models';

type TableProps<Type> = {
    title: string
    columns: Type
    rowsData: Type[]
};

class Table<T> {
    public htmlElement: HTMLTableElement;

     props: TableProps<T>;

    private tbody: HTMLTableSectionElement;

    private thead: HTMLTableSectionElement;

    constructor(props: TableProps<T>) {
        this.props = props;

        this.htmlElement = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');

        this.initialize();
    }

    initializeHead = () => {
        const { title, columns } = this.props;
        const headerElements = Object.values(columns);
        const tr = document.createElement('tr');
        const tableTitle = document.createElement('div');
        tableTitle.textContent = title;
        tableTitle.style.width = '173%';
        tableTitle.style.textAlign = 'center';
        tableTitle.style.fontSize = '30px';
        const headerRowsHtml = headerElements.map((headerNames) => {
            const tableHeader = document.createElement('th');
            tableHeader.textContent = headerNames;
            tr.append(tableHeader);
        });
        this.thead.append(tableTitle, tr);
        return headerRowsHtml;
    };

    initializeBody = () => {
        const carCollection = new CarsCollection(cars, brands, models);
        carCollection.all.map((car) => {
        const tableRow = document.createElement('tr');
        const tdId = document.createElement('td');
        const tdTitle = document.createElement('td');
        const tdModel = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdYear = document.createElement('td');
        tdId.textContent = car.id;
        tdTitle.textContent = car.brand;
        tdModel.textContent = car.model;
        tdPrice.textContent = `${car.price}`;
        tdYear.textContent = `${car.year}`;
        tableRow.append(tdId, tdTitle, tdModel, tdPrice, tdYear);
        this.tbody.append(tableRow);
});
    };

    initialize() {
        this.initializeHead();
        this.initializeBody();
        this.htmlElement.className = 'table table-striped order border p-3';
        this.htmlElement.append(
          this.thead,
          this.tbody,
        );
    }
}
export default Table;
