import vehicles from "./mainVehicle.js";
class AirVehicle extends vehicles {
    maxDepth;
    constructor({ maxDepth }, vehicle) {
        super(vehicle);
        this.maxDepth = maxDepth;
    }
    toString = () => {
        return `${this.getString()} Max Depth: ${this.maxDepth}`;
    };
}
export default AirVehicle;
//# sourceMappingURL=WaterVehicle.js.map