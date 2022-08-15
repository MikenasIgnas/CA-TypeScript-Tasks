import vehicles, { vehiclesData } from "./mainVehicle.js";

type airVehicleData = {
  maxAltitude: number
}

class airVehicle extends vehicles {
  private maxAltitude:number;
  constructor({maxAltitude}:airVehicleData, vehicle:vehiclesData){
    super(vehicle)
    this.maxAltitude = maxAltitude;
  }
   override  toString = ():string => {
    return `${this.getString()} Max altitude: ${this.maxAltitude}`
  }

}

export default airVehicle;