import landVehicle from './LandVehicle.js';
import airVehicle from './AirVehicle.js';
import waterVehicle from './WaterVehicle.js';

const vehicles: (landVehicle | airVehicle | waterVehicle)[] = [
  new waterVehicle({
    maxDepth: 300,
  }, {
    brand: 'Water',
    model: 'Vehicle',
    year: 2008,
  }),
  new landVehicle({
    tires: ['Winter Tires', 'Winter Tires', 'Winter Tires', 'Summer Tires']
  }, {
    brand: 'Land',
    model: 'Vehicle',
    year: 2011,
  }),
  new airVehicle({
    maxAltitude: 4561,
  }, {
    brand: 'Air',
    model: 'Vehicle',
    year: 2020,
  }),
];

vehicles.map(vehiclesInfo => console.log(vehiclesInfo.toString()));