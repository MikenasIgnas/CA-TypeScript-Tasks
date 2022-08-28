import brands from '../data/brands';
import cars from '../data/cars';
import CarsCollection from '../helpers/cars-collection';
import models from '../data/models';
// import SelectField from './selectField';

type TableProps<Type> = {
    title: string
    columns: Type
    filterValue?: string | undefined
    rowsData: Type[]
};

class Table<T> {
    public htmlElement: HTMLTableElement;

     props: TableProps<T>;

    private tbody: HTMLTableSectionElement;

    public filterValue: string | undefined;

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
        tableTitle.id = 'tableTitle';
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
        const carCollection = new CarsCollection(cars, brands, models, this.props.filterValue);
        carCollection.all.map((car) => {
            const tableRow = document.createElement('tr');
            const tdId = document.createElement('td');
            const tdTitle = document.createElement('td');
            const tdModel = document.createElement('td');
            const tdPrice = document.createElement('td');
            const tdYear = document.createElement('td');
            const tdButton = document.createElement('td');
            const deleteButton = document.createElement('button');

                deleteButton.innerHTML = `<svg class="color"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                d="M135.2 17.69C140.6 6.848 151.7 0 163.8 
                0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 
                32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
                </svg>`;
                deleteButton.style.lineHeight = '50%';
                deleteButton.style.padding = '0px';
                deleteButton.style.width = '15px';
                deleteButton.style.marginBottom = '5px';
                deleteButton.style.border = 'none';
                deleteButton.style.fill = 'red';
                tableRow.appendChild(deleteButton);
                deleteButton.addEventListener('click', () => {
                  this.tbody.removeChild(tableRow);
                });
            tdId.textContent = car.id;
            tdTitle.textContent = car.brand;
            tdModel.textContent = car.model;
            tdPrice.textContent = `${car.price}`;
            tdYear.textContent = `${car.year}`;
            tdButton.append(deleteButton);
            tableRow.append(tdId, tdTitle, tdModel, tdPrice, tdYear, tdButton);
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
