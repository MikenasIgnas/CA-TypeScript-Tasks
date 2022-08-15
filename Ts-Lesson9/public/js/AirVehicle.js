import vehicles from "./mainVehicle.js";
class airVehicle extends vehicles {
    maxAltitude;
    constructor({ maxAltitude }, vehicle) {
        super(vehicle);
        this.maxAltitude = maxAltitude;
    }
    toString = () => {
        return `${this.getString()} Max altitude: ${this.maxAltitude}`;
    };
}
export default airVehicle;
//# sourceMappingURL=AirVehicle.js.map