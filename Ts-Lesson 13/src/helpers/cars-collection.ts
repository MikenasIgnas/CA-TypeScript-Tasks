import Car from '../types/car';
import Brand from '../types/brand';
import Model from '../types/model';
import CarJoined from '../types/car-joined';

class CarsCollection {
    constructor(
        private car:Car[],
        public brand:Brand[],
        private model:Model[],
        public filterValue?: string,
) {}

    private joinCars = (car: Car): CarJoined | undefined => {
       const carModelId = this.model
       .filter((model) => car.modelId === model.id)
       .map((modelBrand) => modelBrand.brandId);

       const carBrand = this.brand
       .filter((carBrands) => carModelId.includes(carBrands.id))
       .map((brandTitle) => brandTitle.title);

       const carModel = this.model
       .filter((model) => car.modelId === model.id)
       .map((model) => model.title);

       if (!this.filterValue || carBrand.includes(this.filterValue)) {
           const carJoined: CarJoined = {
               ...car,
               brand: carBrand.join(', '),
               model: carModel.join(', '),
           };

           return carJoined;
       }
       if (this.filterValue === 'All Cars') {
        const carJoined: CarJoined = {
            ...car,
            brand: carBrand.join(', '),
            model: carModel.join(', '),
        };
        return carJoined;
       }

       return undefined;
    };

    public get all(): CarJoined[] {
        return this.car.map((car) => this.joinCars(car)).filter((b): b is CarJoined => !!b);
      }
}
export default CarsCollection;
