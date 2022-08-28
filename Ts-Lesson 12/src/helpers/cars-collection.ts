import Car from '../types/car';
import Brand from '../types/brand';
import Model from '../types/model';
import CarJoined from '../types/car-joined';

class CarsCollection {
    constructor(
        private car:Car[],
        private brand:Brand[],
        private model:Model[],
) {}

    private joinCars = (car: Car):CarJoined => {
       const carModelId = this.model
       .filter((model) => car.modelId === model.id)
       .map((modelBrand) => modelBrand.brandId);

       const carBrand = this.brand
       .filter((carBrands) => carModelId.includes(carBrands.id))
       .map((brandTitle) => brandTitle.title);

       const carModel = this.model
       .filter((model) => car.modelId === model.id)
       .map((model) => model.title);

      const carJoined: CarJoined = {
          ...car,
          brand: carBrand.join(', '),
          model: carModel.join(', '),
      };

      return carJoined;
    };

    public get all(): CarJoined[] {
        return this.car.map((car) => this.joinCars(car));
      }
}
export default CarsCollection;
