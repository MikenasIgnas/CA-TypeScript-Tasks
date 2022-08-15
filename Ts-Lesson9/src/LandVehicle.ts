import vehicles, { vehiclesData } from "./mainVehicle.js";

type landVehicleData = {
  tires: string[]
}

class landVehicle extends vehicles {
  
  private tires: string[];

  constructor({tires}:landVehicleData, vehicles: vehiclesData){
    super(vehicles)
    this.tires = tires
  }
  override toString = (): string => {
    return `${this.getString()} \n Tires: ${this.tires}`;
  };
}
export default landVehicle