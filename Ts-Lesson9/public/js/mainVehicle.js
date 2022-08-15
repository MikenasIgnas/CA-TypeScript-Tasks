class vehicles {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString = () => {
        const { brand, model, year } = this;
        return `Brand: ${brand} \n Model: ${model} \n Made in: ${year}\n`;
    };
}
export default vehicles;
//# sourceMappingURL=mainVehicle.js.map