class Vehicle {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getVehicleInfo = () => {
        const { brand, model, year } = this;
        return `${brand} ${model} ${year}\n`;
    };
}
export default Vehicle;
//# sourceMappingURL=main.js.map