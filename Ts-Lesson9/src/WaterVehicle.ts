import vehicles, { vehiclesData } from "./mainVehicle.js";

export type waterVehicleData = {
  maxDepth: number
}

class AirVehicle extends vehicles {
  private maxDepth: number;

  constructor({ maxDepth }: waterVehicleData, vehicle: vehiclesData) {
    super(vehicle);
    this.maxDepth = maxDepth;
  }

    override toString = (): string => {
    return `${this.getString()} Max Depth: ${this.maxDepth}`;
  };
}

export default AirVehicle;