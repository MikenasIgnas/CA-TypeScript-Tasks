export type vehiclesData = {
    brand: string, 
    model: string,
    year: number, 
}
 class vehicles {

    protected brand: string; 
    protected model: string;
    protected year: number;

    constructor({brand, model, year}:vehiclesData){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    protected getString = (): string => {
        const { brand, model, year } = this;
    
        return `Brand: ${brand} \n Model: ${model} \n Made in: ${year}\n`;
      }
}
export default vehicles