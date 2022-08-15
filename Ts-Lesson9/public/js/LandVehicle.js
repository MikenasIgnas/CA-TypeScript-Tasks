import vehicles from "./mainVehicle.js";
class landVehicle extends vehicles {
    tires;
    constructor({ tires }, vehicles) {
        super(vehicles);
        this.tires = tires;
    }
    toString = () => {
        return `${this.getString()} \n Tires: ${this.tires}`;
    };
}
export default landVehicle;
//# sourceMappingURL=LandVehicle.js.map